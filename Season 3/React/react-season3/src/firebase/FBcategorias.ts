import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, setDoc, doc } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebaseConfig } from "./config/firebaseConfig";
import { ICategoria } from "../interfaces/ICategoria";
import { nanoid } from 'nanoid'

export const app = initializeApp(firebaseConfig)
export const db = getFirestore() //use database para las credenciales
// export const storage = getStorage(app);

//AÑADIR CATEGORIAS A FB
export const newCategoria = async (data: ICategoria) => {
    try{
        console.log('Insertando en FB el objeto', data)
        const newData = {codigo: nanoid(20), ...data}
        const docRef = doc(db, "Categorias", newData.codigo);
        await setDoc(docRef, newData);
    }catch(error){
        console.log(error)
    }
}


//LISTADO DE CATEGORIAS DE FB
export const getCategorias = async ():Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; //array inicializado al vacio
    // const categoriasRef = collection(useFirestore(), "Categorias") //seleccionamos la coleccion categorias
    const categoriasRef = collection(db, "Categorias"); //seleccionamos la coleccion categorias
    const CategoriasDocs = await getDocs(categoriasRef) //obtengo todos los datos, es como un select *
    CategoriasDocs.forEach(doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as ICategoria)
    });
    console.log(categorias);
    return categorias;
}


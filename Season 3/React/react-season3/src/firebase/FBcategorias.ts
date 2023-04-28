import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useFirestore } from "reactfire";
import { firebaseConfig } from "./config/firebaseConfig";
import { ICategoria } from "../interfaces/ICategoria";

export const app = initializeApp(firebaseConfig)
export const db = getFirestore() //use database para las credenciales

export const getCategorias = async ():Promise<ICategoria[]> => {
    let categorias: ICategoria[] = []; //array inicializado al vacio
    const categoriasRef = collection(useFirestore(), "Categorias")
    const CategoriasDocs = await getDocs(categoriasRef) //SELECT * FROM ...
    CategoriasDocs.forEach( doc => {
        const categoria = { ...doc.data() }
        categorias.push(categoria as ICategoria)
    });
    console.log(categorias);
    return categorias;
}


import React from "react"
import { Data } from "../../../data/seed"
import { Ordenadores } from "../OrdenadoresCard"


export const OrdenadorListCard = () => {
    return (
        <>
            <h1>Listado de ordenadores</h1>
            <div className="equipos">
                {
                    Data.equipos.map ((equipo) =>(
                        <Ordenadores />
                    ))
                }
            </div>

        </>
        
            
                
    )
}

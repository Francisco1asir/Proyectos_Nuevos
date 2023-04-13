import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavBarServicios } from './common/NavBarServicios'
import Modalfran from './common/modal'

export const Servicios = () => {
  return (
    <>
      <h1>Servicios Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere et esse commodi, corrupti ut nihil dolorum ipsam numquam debitis, culpa quis delectus? Laudantium odit aliquid ipsam neque praesentium et laborum!
        Autem tenetur aliquid, cupiditate earum excepturi magni dolore nam rem. Adipisci nisi, ipsam, ducimus, ut sapiente architecto veniam quasi obcaecati perferendis eos deserunt voluptatum nam aliquam consectetur ratione tempore quae!
        Ad tenetur hic totam. Ad iure dolor fuga ea rerum nam natus saepe, voluptas, et cumque obcaecati ex incidunt, alias illo dolore dolorum sed. Ipsa quasi tempora soluta et totam?</p>
      <NavBarServicios />
      <Modalfran />
      <div className="outlet">
        <Outlet />
      </div>
    </>
  )
}

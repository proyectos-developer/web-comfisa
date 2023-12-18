import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'

import BarraMenu from '../barramenu.jsx'
import MenuLateralCarrito from '../carrito/menulateral.jsx'

export default function PanelHome({proporcional}) {

  const {open_menu_carrito} = useSelector(({datareducer}) => datareducer)
  
  return (
    <div style={{width: '100%'}} className='position-relative'>
        <BarraMenu proporcional={proporcional}/>
        {
          open_menu_carrito ? (
            <MenuLateralCarrito proporcional={proporcional}/>
          ) : null
        }
        <Outlet/>
    </div>
  )
}
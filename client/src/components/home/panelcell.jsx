import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'

import BarraMenuCell from '../barramenucell.jsx'
import MenuLateralCarritoCell from '../carrito/menulateralcell.jsx'

export default function PanelHomeCell({proporcional}) {

  const {open_menu_carrito} = useSelector(({datareducer}) => datareducer)
  
  return (
    <div style={{width: '100%'}} className='position-relative'>
        <BarraMenuCell proporcional={proporcional}/>
        {
          open_menu_carrito ? (
            <MenuLateralCarritoCell proporcional={proporcional}/>
          ) : null
        }
        <Outlet/>
    </div>
  )
}
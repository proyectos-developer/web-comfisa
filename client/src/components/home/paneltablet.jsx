import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom'

import BarraMenuTablet from '../barramenutablet.jsx'
import MenuLateralCarritoTablet from '../carrito/menulateraltablet.jsx'

export default function PanelHomeTablet({proporcional}) {

  const {open_menu_carrito} = useSelector(({datareducer}) => datareducer)
  
  return (
    <div style={{width: '100%'}} className='position-relative'>
        <BarraMenuTablet proporcional={proporcional}/>
        {
          open_menu_carrito ? (
            <MenuLateralCarritoTablet proporcional={proporcional}/>
          ) : null
        }
        <Outlet/>
    </div>
  )
}
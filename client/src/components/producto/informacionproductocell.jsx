import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import icono_car from '../../assets/iconos/icono_car_white_96.png'

import { set_open_menu_carrito } from '../../redux/actions/dataactions';

export default function InformacionProductoCell({proporcional}) {

  const dispatch = useDispatch()
  const [cantidad, setCantidad] = useState (1)

  return (
    <div style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
        <div className='' style={{width: '100%', height: 'auto'}}>
            <div style={{width: 459 / proporcional, height: 459 / proporcional, background: 'rgba(95, 101, 109, 0.4)', marginBottom: 18 / proporcional}}/>
            <div style={{width: 459 / proporcional, height: 'auto'}}>
              <p style={{fontSize: 28 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 0, fontWeight: 500, color: '#222931'}}>
                Nombre producto
              </p>
              <p style={{fontSize: 24 / proporcional, lineHeight: `${38 / proporcional}px`, marginBottom: 18 / proporcional, fontWeight: 400, color: 'rgba(95, 101, 109, 0.6'}}>
                Descripción producto
              </p>
              <p style={{fontSize: 18 / proporcional, lineHeight: `${22 / proporcional}px`, marginBottom: 10 / proporcional, fontWeight: 400, color: '#222931'}}>
                Pide tu cotización
              </p>
              <div style={{width: '100%'}} className='d-flex'>
                <input 
                  type='number'
                  className='form-control'
                  value={cantidad}
                  onChange={(event) => setCantidad(event.target.value)}
                  placeholder='1'
                  style={{fontSize: 16 / proporcional, width: 50 / proporcional, height: 50 / proporcional, padding: 10 / proporcional, background: '#f8f9f9', 
                          color: '#848a90', marginRight: 10 / proporcional}}/>
                <div className='btn rounded d-flex justify-content-center'
                    onClick={() => {dispatch(set_open_menu_carrito(true)); window.scrollTo(0, 0)}}
                    style={{width: 175 / proporcional, height: 50 / proporcional, background: '#E10404', paddingTop: 18 / proporcional, 
                          paddingBottom: 18 / proporcional}}>
                      <img src={icono_car} style={{width: 14 / proporcional, height: 14 / proporcional, marginRight: 7 / proporcional}}/>
                      <p style={{fontSize: 14 / proporcional, fontWeight: 700, color: 'white', lineHeight: `${16 / proporcional}px`}}>
                        Agregar a lista
                      </p>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

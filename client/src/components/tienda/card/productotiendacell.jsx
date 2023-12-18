import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import icono_favoritos from '../../../assets/iconos/icono_favoritos_black_empty_96.png'
import icono_favoritos_black from '../../../assets/iconos/icono_favoritos_black_96.png'

import icono_carr_add from '../../../assets/iconos/icono_carr_black_add_96.png'
import icono_carr_black from '../../../assets/iconos/icono_car_white_96.png'
import { useNavigate } from 'react-router-dom'

import { set_open_menu_carrito } from '../../../redux/actions/dataactions';

export default function CardProductoTienda({proporcional}) {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [opcion_icono, setOpcionIcono] = useState('')
    const [view_opciones, setViewOpcions] = useState('')

    return (
        <div style={{width: 459 / proporcional, paddingBottom: 40 / proporcional}}
            onMouseOver={() => setViewOpcions(true)} onMouseLeave={() => setViewOpcions(false)}>
            <div style={{width: 459 / proporcional, height: 459 / proporcional, background: 'rgba(95, 101, 109, 0.4)'}}/>
            <div className='position-relative' style={{width: 459 / proporcional}}>
                <p style={{fontSize: 16 / proporcional, fontWeight: 400, lineHeight: `${24 / proporcional}px`, color: '#5f656d', paddingTop: 10 / proporcional,
                        paddingBottom: 10 / proporcional, marginTop: 15 / proporcional, marginBottom: 15 / proporcional, cursor: 'default'}}>Descripción producto</p>
                <p style={{fontSize: 26 / proporcional, fontWeight: 700, lineHeight: `${30 / proporcional}px`, color: '#222931', paddingTop: 10 / proporcional,
                        paddingBottom: 10 / proporcional, marginTop: 15 / proporcional, marginBottom: 15 / proporcional, cursor: 'default'}}>Pide cotización</p>
                <div className={`position-absolute ${view_opciones ? 'top-50 animate__animated animate__bounceIn' : 'top-0 animate__animated animate__bounceOut'}`} style={{width: 459 / proporcional}}>
                    <button className='btn' style={{width: 459 / proporcional, background: '#d18e32', height: 50 / proporcional, marginTop: 10 / proporcional,
                        marginBottom: 10 / proporcional, color: 'white', fontWeight: 400, fontSize: 16 / proporcional}}
                        onClick={() => navigate ('/producto/producto')}>
                        Ver más detalles
                    </button>
                    <div style={{width: 459 / proporcional}} className='d-flex'>
                        <div className='d-flex justify-content-center' style={{width: 229.5 / proporcional}}>
                            <img src={opcion_icono === 'favoritos' ? icono_favoritos_black : icono_favoritos} style={{width: 15 / proporcional, height: 15 / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setOpcionIcono('favoritos')} onMouseLeave={() => setOpcionIcono('')}/>
                        </div>
                        <div className='d-flex justify-content-center' style={{width: 229.5 / proporcional}}>
                            <img src={opcion_icono === 'carrito' ? icono_carr_black : icono_carr_add} style={{width: 20 / proporcional, height: 20 / proporcional, cursor: 'pointer'}}
                                onMouseOver={() => setOpcionIcono('carrito')} onMouseLeave={() => setOpcionIcono('')}
                                onClick={() => {dispatch(set_open_menu_carrito(true)); window.scrollTo(0, 0)}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

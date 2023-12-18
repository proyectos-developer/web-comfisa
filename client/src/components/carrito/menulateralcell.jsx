import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import icono_cross_black from '../../assets/iconos/icono_cross_black_96.png'
import icono_plus_black from '../../assets/iconos/icono_plus_black_96.png'
import icono_minus_black from '../../assets/iconos/icono_minus_black_96.png'

import { set_open_menu_carrito } from '../../redux/actions/dataactions';
import { useNavigate } from 'react-router-dom';

export default function MenuLateralCarritoCell({proporcional}) {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [cantidad, setCantidad] = useState (1)

    return (
        <div className='position-absolute top-0 end-0 shadow vh-100'
            style={{width: 418 / proporcional, zIndex: 99999, background: 'white'}}>
            <div className='d-flex justify-content-between' 
                    style={{width: 418 / proporcional, padding: 30 / proporcional, marginBottom: 30 / proporcional,
                    background: '#f5f5f5'}}>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${20 / proporcional}px`, fontWeight: 400, marginBottom: 0}}>
                Lista de productos para cotizar (1)
                </p>
                <img src={icono_cross_black} style={{width: 15 / proporcional, height: 15 / proporcional, marginTop: 2.5 / proporcional,
                    marginBottom: 2.5 / proporcional, cursor: 'pointer'}}
                    onClick={() => {dispatch(set_open_menu_carrito(false)); window.scrollTo(0, 0)}}/>
            </div>
            <div className='' style={{with: 418 / proporcional, paddingLeft: 30 / proporcional, paddingRight: 10 / proporcional, height: 570 / proporcional}}>
                <div className='d-flex' style={{width: 378 / proporcional, height: 124 / proporcional}}>
                    <div style={{width: 124 / proporcional, height: 124 / proporcional, marginRight: 15 / proporcional, background: 'rgba(95, 101, 109, 0.4)'}}/>
                    <div style={{width: 239 / proporcional, height: 124 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, marginBottom: 10 / proporcional, color: '#222222'}}>
                            Nombre producto
                        </p>
                        <div className='d-flex' style={{width: 140 / proporcional, height: 40 / proporcional}}>
                            <img src={icono_plus_black} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer',
                                    marginRight: 10 / proporcional}} onClick={() => setCantidad(cantidad + 1)}/>
                            <input 
                                type='number'
                                className='form-control'
                                value={cantidad}
                                onChange={(event) => setCantidad(event.target.value)}
                                placeholder='1'
                                style={{fontSize: 16 / proporcional, width: 50 / proporcional, height: 40 / proporcional, padding: 10 / proporcional, background: 'white', 
                                        color: '#848a90'}}/>
                            <img src={icono_minus_black} style={{width: 24 / proporcional, height: 24 / proporcional, margin: 8 / proporcional, cursor: 'pointer',
                                    marginLeft: 10 / proporcional}} onClick={() => setCantidad(cantidad - 1 < 1 ? cantidad : cantidad - 1)}/> 
                        </div>
                        <p style={{fontSize: 12 / proporcional, lineHeight: `${14 / proporcional}px`, color: '#666666', textDecoration: 'underline', cursor: 'pointer'}}>
                            Borrar de la lista
                        </p>
                    </div>
                </div>
            </div>
            <div className='shadow-lg' style={{with: 418 / proporcional, padding: 30 / proporcional, paddingRight: 10 / proporcional, height: 'auto'}}>
                <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgba(34, 34, 34, 0.5)',
                        fontSize: 16 / proporcional, color: 'white', fontWeight: 500, marginBottom: 10 / proporcional}}
                        onClick={() => {dispatch(set_open_menu_carrito(false)); navigate('/lista-cotizar'); window.scrollTo(0, 0)}}>
                    Ver lista a cotizar
                </button>
                <button className='btn rounded' style={{width: 358 / proporcional, height: 50 / proporcional, background: 'rgb(34, 34, 34)',
                        fontSize: 16 / proporcional, color: 'white', fontWeight: 500}}
                        onClick={() => {dispatch(set_open_menu_carrito(false)); window.scrollTo(0, 0)}}>
                    Volver
                </button>
            </div>
        </div>
    )
}
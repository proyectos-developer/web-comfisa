import React, { useState } from 'react'

import logo from '../assets/logo_texto_48.png'
import icono_menu_white from '../assets/iconos/icono_menu_white_96.png'
import icono_right from '../assets/iconos/arrow_right_white_96.png'
import icono_left from '../assets/iconos/arrow_left_white_96.png'
import icono_cross_black from '../assets/iconos/icono_cross_black_96.png'

import icono_favoritos_white from '../assets/iconos/icono_favoritos_white_96.png'
import icono_lupa_white from '../assets/iconos/icono_lupa_white_96.png'
import icono_carrito_white from '../assets/iconos/icono_car_white_96.png'
import icono_perfil_white from '../assets/iconos/icono_perfil_white_96.png'

import icono_dot_white from '../assets/iconos/icono_dot_white_96.png'

import { useNavigate } from 'react-router-dom'

export default function BarraMenuCell({proporcional}) {

    const navigate = useNavigate()

    const [open_menu, setMenuOpen] = useState(false)
    const [open_menu_carrito, setMenuOpenCarrito] = useState(false)
    const [open_sub_menu, setSubMenuOpen] = useState(false)

    return (
      <div className='' style={{height: 120 / proporcional, background: '#f9f9f9', paddingTop: 4 / proporcional, paddingBottom: 4 / proporcional}}>
        <div className='d-flex justify-content-center' style={{height: 56 / proporcional, paddingTop: 4 / proporcional,
             paddingBottom: 4 / proporcional, marginBottom: 4 / proporcional}}>
            <img src={logo} style={{width: 192 / proporcional, height: 48 / proporcional}}  onClick={() => navigate ('/')}/>
        </div>
        
        <div className='' style={{height: 56 / proporcional, width: '100%', background: '#f9f9f9'}}>
            <div className='d-flex justify-content-between' style={{background: '#d18e32', width: '100%',
                    paddingRight: 20 / proporcional, paddingLeft: 20 / proporcional}}>
                <img src={icono_menu_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                    cursor: 'pointer', marginRight: 30 / proporcional}} onClick={() => setMenuOpen(!open_menu)}/>
                <div className='d-flex' style={{paddingRight: 25 / proporcional, background: '#d18e32'}}>
                    <img src={icono_lupa_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                        cursor: 'pointer', marginRight: 30 / proporcional}}/>
                    <img src={icono_perfil_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                        cursor: 'pointer', marginRight: 30 / proporcional}}/>
                    <img src={icono_favoritos_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                            cursor: 'pointer', marginRight: 30 / proporcional}}/>
                    <div className='position-relative' style={{width: 49 / proporcional, height: 24 / proporcional, cursor: 'pointer',
                        marginTop: 18 / proporcional, marginBottom: 18 / proporcional}} 
                        onClick={() => setMenuOpenCarrito(!open_menu_carrito)}>
                        <div className='d-flex' style={{height: 56 / proporcional}}>
                        <img src={icono_carrito_white} 
                                style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 2 / proporcional, marginBottom: 2 / proporcional, 
                                            cursor: 'pointer', marginRight: 5 / proporcional}}/>
                        <div className='rounded-circle' style={{width: 24 / proporcional, height: 24 / proporcional, background: '#222931'}}>
                            <p style={{fontSize: 14 / proporcional, lineHeight: `${24 / proporcional}px`, color: 'white', marginBottom: 0, fontWeight: 400,
                                textAlign: 'center'}}>
                                1
                            </p>
                        </div>
                        </div>
                        {
                        open_menu_carrito ? (
                            <div className='position-absolute shadow'
                            style={{width: 240 / proporcional, height: 'auto', padding: 20 / proporcional, background: '#ebecec', top: 38 / proporcional, 
                                    right: -10 / proporcional, zIndex: 99999}}>
                                <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)', marginBottom: 0,
                                    fontWeight: 500,}}>
                                Mi lista
                                </p>
                                <div style={{width: 200 / proporcional, height: 'auto', marginTop: 12 / proporcional}}>
                                <div className='d-flex justify-content-end' style={{width: 200 / proporcional}}>
                                    <img src={icono_cross_black} 
                                        style={{width: 12 / proporcional, height: 12 / proporcional, cursor: 'pointer'}}/>
                                </div>
                                <div className='d-flex' style={{width: 200 / proporcional, height: 'auto', marginBottom: 15 / proporcional}}>
                                    <div style={{width: 75 / proporcional, height: 75 / proporcional, marginRight: 10 / proporcional, background: 'rgba(95, 101, 109, 0.4)'}}/>
                                    <div style={{height: 75 / proporcional}}>
                                    <p style={{fontSize: 16 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 8 / proporcional, color: '#5f656d', fontWeight: 500}}>
                                        Producto
                                    </p>
                                    <p style={{fontSize: 15 / proporcional, lineHeight: `${16 / proporcional}px`, marginBottom: 0, color: '#5f656d', fontWeight: 400}}>
                                        Cantidad: 1 
                                    </p>
                                    </div>
                                </div>
                                <button className='btn' style={{width: 200 / proporcional, height: 40 / proporcional, fontSize: 14 / proporcional, 
                                    color: 'white', fontWeight: 500, background: 'rgb(225, 4, 4)'}}  onClick={() => navigate('/lista-cotizar')}>
                                    VER LISTA
                                </button>
                                </div>
                            </div>
                        ) : null
                        }
                    </div>
                </div> 
            </div>
        </div>
        {
            open_menu  ? (
                <div className='position-absolute vh-100 shadow' style={{padding: 20 / proporcional, background: '#292929', top: 120 / proporcional, width: '100%', zIndex: 99999}}>
                    <div className='d-flex justify-content-end' style={{width: '100%'}}
                    onClick={() => setMenuOpen(false)}>
                        <img src={icono_left} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 19 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/'); setMenuOpen(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Inicio
                        </p>  
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/sobre-nosotros'); setMenuOpen(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Nosotros
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {setSubMenuOpen (true); setMenuOpen(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Proveedores
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/tienda'); setMenuOpen(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Tienda
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                    <div className='d-flex justify-content-between' style={{width: '100%', cursor: 'pointer'}}
                    onClick={() => {navigate ('/contacto'); setMenuOpen(false)}}>
                        <p style={{width: 100 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Contácto
                        </p>   
                        <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 20 / proporcional}}/>
                    </div>
                </div>
            ) : null
        }
        {
            open_sub_menu  ? (
                <div className='position-absolute shadow' 
                    style={{padding: 20 / proporcional, background: '#292929', top: 120 / proporcional, width: '100%', zIndex: 99999, height: 'auto'}}>
                    <div className='d-flex justify-content-end' style={{width: '100%'}}>
                        <img src={icono_left} style={{width: 18 / proporcional, height: 18 / proporcional, margin: 19 / proporcional}}
                        onClick={() => {setSubMenuOpen(false); setMenuOpen(true)}}/>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            Aceros Arequipa
                        </p>  
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/aceros-arequipa/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Varillas de acero
                            </p>  
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}} >
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            ASA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/asa/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Lijas
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            BRIKER
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/briker/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Discos cortadores
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            COMFISA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/comfisa/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Guantes
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            INDURA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/indura/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Soldadura
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            INKA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/inka/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Cemento
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            MAJESTAD
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/majestad/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Sellador, temple
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            MATUSITA
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/matusita/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Tubos PVC y CPVC
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            METALYCK
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/metalyck/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Clavos
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            NORTON
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/norton/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Discos cortadores
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            PIRAMIDE
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/piramide/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Ladrillos
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                    <div className='' style={{width: '100%', cursor: 'pointer'}}>
                        <p style={{width: 150 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                            marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                            UNACEM
                        </p>   
                        <div className='d-flex' style={{width: '100%', cursor: 'pointer', paddingLeft: 20 / proporcional}}
                        onClick={() => {navigate('/proveedor/unacem/productos'); setSubMenuOpen(false)}}>
                            <img src={icono_dot_white} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            <p style={{width: 250 / proporcional, fontSize: 16 / proporcional, lineHeight: `${32 / proporcional}px`, fontWeight: 600, 
                                marginBottom: 0, color: 'white', textAlign: 'left', cursor: 'pointer', background: '#292929'}}>
                                Cemento
                            </p>   
                            <div className='d-flex justify-content-end' style={{width: '100%'}}>
                                <img src={icono_right} style={{width: 16 / proporcional, height: 16 / proporcional, margin: 8 / proporcional}}/>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null
        }
      </div>
    )
}

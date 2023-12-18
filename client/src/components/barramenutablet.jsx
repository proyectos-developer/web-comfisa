import React, { useEffect, useState } from 'react'

import logo from '../assets/logo_texto_48.png'
import icono_cell from '../assets/iconos/icono_cell.png'
import icono_clock from '../assets/iconos/icono_clock.png'
import icono_cross_black from '../assets/iconos/icono_cross_black_96.png'

import icono_favoritos_white from '../assets/iconos/icono_favoritos_white_96.png'
import icono_lupa_white from '../assets/iconos/icono_lupa_white_96.png'
import icono_carrito_white from '../assets/iconos/icono_car_white_96.png'
import icono_perfil_white from '../assets/iconos/icono_perfil_white_96.png'

import icono_favoritos_black from '../assets/iconos/icono_favoritos_black_96.png'
import icono_lupa_black from '../assets/iconos/icono_lupa_black_96.png'
import icono_carrito_black from '../assets/iconos/icono_car_black_96.png'
import icono_perfil_black from '../assets/iconos/icono_perfil_black_96.png'

import icono_dot from '../assets/iconos/icono_menu_dot.png'

import icono_arrow_down from '../assets/iconos/icono_arrow_down.png'

import { useLocation, useNavigate } from 'react-router-dom'

export default function BarraMenuTablet({proporcional}) {

  const navigate = useNavigate()
  const location = useLocation()
  
  const [menu, setMenu] = useState('')
  const [menu_opcion, setMenuOpcion] = useState('inicio')

  useEffect(() => {
    setMenuOpcion (location.pathname.split ('/')[1] === 'sobre-nosotros' ? 'nosotros' :
                   location.pathname.split ('/')[1] === 'tienda' ? 'tienda' :
                   location.pathname.split ('/')[1] === 'contacto' ? 'contacto' : 
                   location.pathname.split ('/')[1] === 'proveedores' ? 'proveedores' : 'inicio')
  }, [location.pathname])

    return (
      <div className='' style={{height: 120 / proporcional, paddingLeft: 60 / proporcional,  paddingRight: 60 / proporcional,
                                                 background: '#f9f9f9', paddingTop: 4 / proporcional, paddingBottom: 6 / proporcional}}>
        <div className='d-flex justify-content-between' style={{height: 56 / proporcional, borderBottom: '2px solid #fafafa'}}>
            <div className='' style={{width: '25%', height: 56 / proporcional, paddingTop: 2 / proporcional, paddingBottom: 2 / proporcional}}>
                <img src={logo} style={{width: 192 / proporcional, height: 48 / proporcional}} onClick={() => navigate ('/')}/>
            </div>
            <div className='d-flex justify-content-end' style={{width: '75%', height: 48 / proporcional, paddingTop: 2 / proporcional,
                paddingBottom: 2 / proporcional}}>
                <div className='d-flex'>
                  <div className='d-flex' style={{paddingRight: 25 / proporcional, borderRight: '1px solid #e6e8e8'}}>
                    <img src={icono_cell} style={{width: 29 / proporcional, height: 29 / proporcional, marginTop: 7.5 / proporcional, marginBottom: 7.5 / proporcional, 
                            marginRight: 15 / proporcional}}/>
                    <div style={{}}>
                      <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#5f656d', marginBottom: 0, fontWeight: 400}}>
                        Soporte técnico
                      </p>
                      <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121', marginBottom: 0, fontWeight: 600}}>
                        +51 999 999999
                      </p>
                    </div>
                  </div>
                  <div className='d-flex' style={{paddingLeft: 25 / proporcional}}>
                    <img src={icono_clock} style={{width: 29 / proporcional, height: 29 / proporcional, marginTop: 7.5 / proporcional, marginBottom: 7.5 / proporcional, 
                            marginRight: 15 / proporcional}}/>
                    <div style={{}}>
                      <p style={{fontSize: 14 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#5f656d', marginBottom: 0, fontWeight: 400}}>
                        Soporte técnico
                      </p>
                      <p style={{fontSize: 16 / proporcional, lineHeight: `${22 / proporcional}px`, color: '#212121', marginBottom: 0, fontWeight: 600}}>
                        +51 999 999999
                      </p>
                    </div>
                  </div>
                </div>
            </div>
        </div>
        
        <div className='position-relative' 
          style={{height: 56 / proporcional, zIndex: 99999, width: '100%', paddingRight: 60 / proporcional, paddingLeft: 60 / proporcional, background: '#f9f9f9'}}>
            <div className='d-flex justify-content-between position-absolute top-0 start-0 rounded' style={{background: '#d18e32', width: 871 / proporcional}}>
                <div className='d-flex position-relative' style={{paddingLeft: 25 / proporcional, background: '#d18e32'}}>
                    <p style={{width: 120 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: menu === 'inicio' ? 700 : 600, 
                        marginBottom: 0,
                        color: 'white', textAlign: 'center', cursor: 'pointer', background: menu_opcion === 'inicio' ? '#384da7' : '#d18e32'}} 
                        onMouseOver={() => setMenu ('inicio')} onMouseLeave={() => setMenu('')} onClick={() => navigate ('/')}>
                    Inicio
                    </p>  
                    <p style={{width: 120 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: menu === 'nosotros' ? 700 : 600, 
                        marginBottom: 0,
                        color: 'white', textAlign: 'center', cursor: 'pointer', background: menu_opcion === 'nosotros' ? '#384da7' : '#d18e32'}} 
                        onMouseOver={() => setMenu ('nosotros')} onMouseLeave={() => setMenu('')} onClick={() => navigate ('/sobre-nosotros')}>
                    Nosotros
                    </p> 
                    <div style={{width: 120 / proporcional, height: 56 / proporcional}}
                              onMouseOver={() => setMenu ('proveedores')} onMouseLeave={() => setMenu('')}>
                        <div className='d-flex' style={{width: 120 / proporcional, height: 56 / proporcional}}>
                          <p style={{width: 121 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: menu === 'proveedores' ? 700 : 600, 
                              marginBottom: 0,
                              color: 'white', textAlign: 'center', cursor: 'pointer', background: menu_opcion === 'proveedores' ? '#384da7' : '#d18e32'}}>
                            Proveedores
                          </p>  
                          <img src={icono_arrow_down} style={{width: 14 / proporcional, height: 14 / proporcional, marginTop: 21 / proporcional, 
                              marginBottom: 21 / proporcional, marginRight: 5 / proporcional, cursor: 'pointer'}}/>
                        </div> 
                        {
                          menu === 'proveedores' ? (
                            <div className='position-absolute shadow rounded' 
                                style={{width: 800 / proporcional, height: 'auto', padding: 15 / proporcional, background: 'white', top: 56 / proporcional,
                                       left: 33.75 / proporcional}}>
                                <div className='d-flex' style={{width: 770 / proporcional, height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        Acreos Arequipa
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'aceros-arequipa'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Varillas de acero
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        ASA
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'asa'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Lijas
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        BRIKER
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'briker'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Discos cortadores
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        COMFISA
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'comfisa'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Guantes
                                          </p>
                                      </div>
                                    </div>
                                </div>
                                <div className='d-flex' style={{width: 770 / proporcional, height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        INDURA
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'indura'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Soldadura
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        INKA
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'inka'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Cemento
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        MAJESTAD
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'majestad'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Sellador, temple
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        MATUSITA
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'matusita'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Tubos PVC Y CPVC
                                          </p>
                                      </div>
                                    </div>
                                </div>
                                <div className='d-flex' style={{width: 770 / proporcional, height: 'auto', marginBottom: 10 / proporcional}}>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        METALYCK
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'metalyck'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Clavos
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        NORTON
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'norton'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Discos cortadores
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        PIRAMIDE
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'piramide'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Ladrillos
                                          </p>
                                      </div>
                                    </div>
                                    <div style={{width: '25%', height:'auto'}}>
                                      <p style={{fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, fontWeight: 500, cursor: 'default',
                                          marginBottom: 0, color: '#22222'}}>
                                        UNACEM
                                      </p>
                                      <div className='d-flex' style={{height: 30 / proporcional, width: '100%', cursor: 'pointer'}}
                                          onClick={() => navigate(`/proveedor/${'unacem'}/productos`)}>
                                          <img src={icono_dot} style={{width: 10 / proporcional, height: 10 / proporcional, marginTop: 10 / proporcional, 
                                                  marginBottom: 10 / proporcional, marginRight: 10 / proporcional}}/>
                                          <p style={{fontSize: 14 / proporcional, lineHeight: `${30 / proporcional}px`, fontWeight: 400, 
                                              marginBottom: 0, color: '#000000'}}>
                                            Cemento
                                          </p>
                                      </div>
                                    </div>
                                </div>
                            </div>
                          ) : null
                        }  
                    </div> 
                    <p style={{width: 120 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: menu === 'tienda' ? 700 : 600, 
                        marginBottom: 0,
                        color: 'white', textAlign: 'center', cursor: 'pointer', background: menu_opcion === 'tienda' ? '#384da7' : '#d18e32'}} 
                        onMouseOver={() => setMenu ('tienda')} onMouseLeave={() => setMenu('')} onClick={() => navigate ('/tienda')}>
                    Tienda
                    </p>  
                    <p style={{width: 120 / proporcional, fontSize: 16 / proporcional, lineHeight: `${56 / proporcional}px`, fontWeight: menu === 'contacto' ? 700 : 600, 
                        marginBottom: 0,
                        color: 'white', textAlign: 'center', cursor: 'pointer', background: menu_opcion === 'contacto' ? '#384da7' : '#d18e32'}} 
                        onMouseOver={() => setMenu ('contacto')} onMouseLeave={() => setMenu('')} onClick={() => navigate ('/contacto')}>
                    Contácto
                    </p>  
                </div> 
                <div className='d-flex' style={{paddingRight: 25 / proporcional, background: '#d18e32'}}>
                    <img src={menu === 'lupa' ? icono_lupa_black : icono_lupa_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                        cursor: 'pointer', marginRight: 30 / proporcional}}
                        onMouseOver={() => setMenu('lupa')} onMouseLeave={() => setMenu('')}/>
                    <img src={menu === 'perfil' ? icono_perfil_black : icono_perfil_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                        cursor: 'pointer', marginRight: 30 / proporcional}}
                        onMouseOver={() => setMenu('perfil')} onMouseLeave={() => setMenu('')}/>
                    <img src={menu === 'favoritos' ? icono_favoritos_black : icono_favoritos_white} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 18 / proporcional, marginBottom: 18 / proporcional, 
                                            cursor: 'pointer', marginRight: 30 / proporcional}}
                        onMouseOver={() => setMenu('favoritos')} onMouseLeave={() => setMenu('')}/>
                    <div className='position-relative' style={{width: 49 / proporcional, height: 24 / proporcional, cursor: 'pointer',
                        marginTop: 18 / proporcional, marginBottom: 18 / proporcional}} 
                        onMouseOver={() => setMenu('carrito')} onMouseLeave={() => setMenu('')}  onClick={() => navigate('/lista-cotizar')}>
                      <div className='d-flex' style={{height: 56 / proporcional}}>
                        <img src={menu === 'carrito' ? icono_carrito_black : icono_carrito_white} 
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
                        menu === 'carrito' ? (
                          <div className='position-absolute shadow'
                            style={{width: 240 / proporcional, height: 'auto', padding: 20 / proporcional, background: '#ebecec', top: 42 / proporcional, right: -10 / proporcional}}>
                              <p style={{fontSize: 16 / proporcional, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)', marginBottom: 0,
                                  fontWeight: 500}}>
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
      </div>
    )
}

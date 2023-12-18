import React, { useState } from 'react'

import arrow_right_white from '../../../assets/iconos/arrow_right_white_96.png'

export default function CardProveedorTablet({proporcional, titulo, subtitulo, descripcion, icono, logo}) {

    const [seleccion_producto, setSeleccionProducto] = useState('')

    return (
        <div style={{width: 429 / proporcional, marginBottom: 37 / proporcional, marginRight: 15 / proporcional, marginLeft: 15 / proporcional}}>
            <div className='position-relative' style={{width: 429 / proporcional, height: 345 / proporcional, marginBottom: 15 / proporcional, border: '1px solid #ededed', cursor: 'default'}}
                onMouseOver={() => setSeleccionProducto ('norton')} onMouseLeave={() => setSeleccionProducto('')}>
                {
                    logo !== null ? (
                        <img src={logo} style={{width: 427 / proporcional, height: 343 / proporcional}}/>
                    ) : null
                }
                <div className={`position-absolute top-0 start-0 ${seleccion_producto === 'norton' ? 'animate__animated animate__backInDown' : 'animate__animated animate__bounceOut'}`} 
                    style={{width: 429 / proporcional, height: 345 / proporcional, background: '#384da7',
                            padding: 10}}>
                    <div style={{width: 409 / proporcional, height: 325 / proporcional, marginTop: 14 / proporcional, marginBottom: 14 / proporcional}}>
                        <p style={{fontSize: 16 / proporcional, color: 'white', textAlign: 'left', marginBottom: 0, lineHeight: `${24 / proporcional}px`,
                            marginBottom: 30 / proporcional}}>
                            {descripcion}
                        </p>
                        <div className='d-flex' style={{cursor: 'pointer'}}>
                            <p style={{fontSize: 14 / proporcional, fontWeight: 600 / proporcional, color: '#d18e32', lineHeight: `${14 / proporcional}px`,
                                marginRight: 5 / proporcional}}>
                                Ver más
                            </p>
                            <img src={arrow_right_white} style={{width: 14 / proporcional, height: 14 / proporcional}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='d-flex' style={{width: 429 / proporcional}}>
                <img src={icono} style={{width: 32 / proporcional, height: 32 / proporcional, margin: 13 / proporcional }}/>
                <div style={{width: 292 / proporcional, height: 58 / proporcional}}>
                    <p style={{fontSize: 21 / proporcional, lineHeight: `${29 / proporcional}px`, color: '#292929', fontWeight: 500, marginBottom: 0}}>
                        {titulo}
                    </p>
                    <p style={{fontSize: 19 / proporcional, lineHeight: `${29 / proporcional}px`, color: '#292929', fontWeight: 500, marginBottom: 6}}>
                        {subtitulo}
                    </p>
                    <div className='rounded-pill' style={{width: 100 / proporcional, height: 4 / proporcional, background: '#d18e32'}}/>
                </div>
            </div>
        </div>
    )
}
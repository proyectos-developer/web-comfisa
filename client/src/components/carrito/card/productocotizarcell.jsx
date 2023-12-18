import React, { useState } from 'react'

import icono_cross_black from '../../../assets/iconos/icono_cross_black_96.png'

export default function CardProductoCotizarCell({proporcional}) {

    const [informacion, setInformacion] = useState('')

    return (
        <div className='d-flex' style={{width: '100%', height: 131 / proporcional, border: '1px solid #e8e8e8'}}>
            <div className='d-flex' style={{width: '30%', height: 129 / proporcional, padding: 10 / proporcional}}>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${99 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                    }}>
                    Producto
                </p>
            </div>
            <div style={{width: '10%', height: 129 / proporcional, padding: 10 / proporcional}}>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${99 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                    textAlign: 'center'}}>
                    1
                </p>
            </div>
            <div style={{width: '60%', height: 129 / proporcional, padding: 10 / proporcional}}>
                <textarea 
                  type='number'
                  cols={3}
                  className='form-control'
                  value={informacion}
                  onChange={(event) => setInformacion(event.target.value)}
                  placeholder='Ingrese requerimientos del producto'
                  style={{fontSize: 16 / proporcional, width: '100%', height: 99 / proporcional, padding: 10 / proporcional, background: '#f8f9f9', 
                          color: '#848a90', marginRight: 10 / proporcional}}/>
            </div>
        </div>
    )
}

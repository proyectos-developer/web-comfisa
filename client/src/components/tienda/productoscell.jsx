import React, { useState } from 'react'

import CardProductoTiendaCell from './card/productotiendacell.jsx'

export default function ProductosCell({proporcional}) {

    const [order_by, setOrderBy] = useState ('')

    return (
        <div style={{width: '100%', paddingTop: 10 / proporcional, paddingLeft: 10 / proporcional, paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional}}>
            <p style={{fontSize: 34 / proporcional, fontWeight: 500, lineHeight: `${45 / proporcional}px`, marginBottom: 30 / proporcional}}>
                TIENDA
            </p>
            <select
                className='form-control'
                onChange={(value) => setOrderBy(value)}
                value={order_by}
                style={{width: 270 / proporcional, height: 50 / proporcional, background: '#f8f9f9', marginBottom: 23 / proporcional, paddingTop: 5 / proporcional,
                        paddingBottom: 5 / proporcional, paddingLeft: 22 / proporcional, fontSize: 16 / proporcional, lineHeight: `${40 / proporcional}px`, 
                        color: '#5f656d'}}>
                <option defaultValue={'0'}>Ordenar por</option>
                <option value={'mayor-precio'}>Mayor a menor precio</option>
                <option value={'menor-precio'}>Menor a mayor precio</option>
                <option value={'popularidad'}>Popularidad</option>
                <option value={'calificacion'}>Calificación</option>
                <option value={'agrgados'}>Últimos agregados</option>
            </select>
            <div className='rounded-pill' style={{width: '100%', height: 2 / proporcional, background: '#ececec', marginBottom: 60 / proporcional}}/>
            <CardProductoTiendaCell proporcional={proporcional}/>
            <CardProductoTiendaCell proporcional={proporcional}/>
            <CardProductoTiendaCell proporcional={proporcional}/>
            <CardProductoTiendaCell proporcional={proporcional}/>
            <CardProductoTiendaCell proporcional={proporcional}/>
            <CardProductoTiendaCell proporcional={proporcional}/>
            <CardProductoTiendaCell proporcional={proporcional}/>
            <CardProductoTiendaCell proporcional={proporcional}/>
            <CardProductoTiendaCell proporcional={proporcional}/>
        </div>
    )
}

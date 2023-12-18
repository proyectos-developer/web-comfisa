import React, { useState } from 'react'

import CardProductoTiendaTablet from './card/productotiendatablet.jsx'

export default function ProductosTablet({proporcional}) {

    const [order_by, setOrderBy] = useState ('')

    return (
        <div style={{width: '100%', paddingTop: 10 / proporcional, paddingLeft: 10 / proporcional, paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional}}>
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
            <CardProductoTiendaTablet proporcional={proporcional}/>
            <CardProductoTiendaTablet proporcional={proporcional}/>
            <CardProductoTiendaTablet proporcional={proporcional}/>
            <CardProductoTiendaTablet proporcional={proporcional}/>
            <CardProductoTiendaTablet proporcional={proporcional}/>
            <CardProductoTiendaTablet proporcional={proporcional}/>
            <CardProductoTiendaTablet proporcional={proporcional}/>
            <CardProductoTiendaTablet proporcional={proporcional}/>
            <CardProductoTiendaTablet proporcional={proporcional}/>
        </div>
    )
}

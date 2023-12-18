import React from 'react'

import CardProductoListaTablet from './card/productolistatablet.jsx'

export default function ListaProductosProveedorTablet({proporcional}) {

    return (
        <div className='' style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 20 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#222931', marginBottom: 20 / proporcional}}>
                Productos relacionados
            </p>
            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                <CardProductoListaTablet proporcional={proporcional}/>
                <CardProductoListaTablet proporcional={proporcional}/>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                <CardProductoListaTablet proporcional={proporcional}/>
                <CardProductoListaTablet proporcional={proporcional}/>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                <CardProductoListaTablet proporcional={proporcional}/>
                <CardProductoListaTablet proporcional={proporcional}/>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                <CardProductoListaTablet proporcional={proporcional}/>
                <CardProductoListaTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}

import React from 'react'

import CardProductoLista from './card/productolista.jsx'

export default function ListaProductosProveedor({proporcional}) {

    return (
        <div className='' style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 20 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#222931', marginBottom: 20 / proporcional}}>
                Productos relacionados
            </p>
            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                <CardProductoLista proporcional={proporcional}/>
                <CardProductoLista proporcional={proporcional}/>
                <CardProductoLista proporcional={proporcional}/>
                <CardProductoLista proporcional={proporcional}/>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                <CardProductoLista proporcional={proporcional}/>
                <CardProductoLista proporcional={proporcional}/>
                <CardProductoLista proporcional={proporcional}/>
                <CardProductoLista proporcional={proporcional}/>
            </div>
        </div>
    )
}

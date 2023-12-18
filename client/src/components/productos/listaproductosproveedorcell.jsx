import React from 'react'

import CardProductoListaCell from './card/productolistacell.jsx'

export default function ListaProductosProveedorCell({proporcional}) {

    return (
        <div className='' style={{width: '100%', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 20 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#222931', marginBottom: 20 / proporcional}}>
                Productos relacionados
            </p>
            <div className='' style={{width: '100%'}}>
                <CardProductoListaCell proporcional={proporcional}/>
                <CardProductoListaCell proporcional={proporcional}/>
                <CardProductoListaCell proporcional={proporcional}/>
                <CardProductoListaCell proporcional={proporcional}/>
                <CardProductoListaCell proporcional={proporcional}/>
                <CardProductoListaCell proporcional={proporcional}/>
                <CardProductoListaCell proporcional={proporcional}/>
                <CardProductoListaCell proporcional={proporcional}/>
            </div>
        </div>
    )
}

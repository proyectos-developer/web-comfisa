import React from 'react'

import CardProductoInformacionTablet from './card/productoinformaciontablet.jsx'

export default function ProductosRelacionadosTablet({proporcional}) {

    return (
        <div className='' style={{width: '100%', paddingLeft: 60 / proporcional, paddingRight: 60 / proporcional, paddingTop: 20 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${30 / proporcional}px`, color: '#222931', marginBottom: 20 / proporcional}}>
                Productos relacionados
            </p>
            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                <CardProductoInformacionTablet proporcional={proporcional}/>
                <CardProductoInformacionTablet proporcional={proporcional}/>
            </div>
            <div className='d-flex justify-content-between' style={{width: '100%'}}>
                <CardProductoInformacionTablet proporcional={proporcional}/>
                <CardProductoInformacionTablet proporcional={proporcional}/>
            </div>
        </div>
    )
}

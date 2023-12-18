import React from 'react'

import TituloPagina from './tituloprincipal.jsx'
import Filtros from './filtros.jsx'
import Productos from './productos.jsx'
import FooterPrincipal from '../footerprincipal.jsx'
import Footer from '../footer.jsx'

export default function Tienda({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPagina proporcional={proporcional}/>
        <div className='d-flex' style={{width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional, paddingTop: 58 / proporcional}}>
            <div style={{width: '33%'}}>
              <Filtros proporcional={proporcional}/>
            </div>
            <div style={{width: '67%'}}>
              <Productos proporcional={proporcional}/>
            </div>
        </div>
        <div style={{width: 1200 / proporcional, marginLeft: 350 / proporcional, marginRight: 350 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                     marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
        <FooterPrincipal proporcional={proporcional}/>
        <Footer proporcional={proporcional}/>
    </div>
  )
}
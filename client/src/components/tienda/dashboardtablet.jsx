import React from 'react'

import TituloPaginaTablet from './tituloprincipaltablet.jsx'
import FiltrosTablet from './filtrostablet.jsx'
import ProductosTablet from './productostablet.jsx'
import FooterPrincipalTablet from '../footerprincipaltablet.jsx'
import FooterTablet from '../footertablet.jsx'

export default function  TiendaTablte({proporcional}) {
  return (
    <div style={{width: '100%'}}>
      <TituloPaginaTablet proporcional={proporcional}/>
      <FiltrosTablet proporcional={proporcional}/>
      <ProductosTablet proporcional={proporcional}/>
      <div style={{width: 871 / proporcional, marginLeft: 60 / proporcional, marginRight: 60 / proporcional, background: 'rgb(230, 232, 232)', height: 2 / proporcional,
                    marginTop: 15 / proporcional, marginBottom: 35 / proporcional}}/>
      <FooterPrincipalTablet proporcional={proporcional}/>
      <FooterTablet proporcional={proporcional}/>
    </div>
  )
}
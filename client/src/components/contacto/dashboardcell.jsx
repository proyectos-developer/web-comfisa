import React from 'react'

import TituloPaginaCell from './tituloprincipalcell.jsx'
import MapaUbicacionCell from './mapaubicacioncell.jsx'
import ContactoInfoCell from './informacioncell.jsx'
import FormularioContactoCell from './formulariocell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import FooterCell from '../footercell.jsx'

export default function ContactoCell({proporcional}) {
  return (
    <div style={{width: '100%'}}>
        <TituloPaginaCell proporcional={proporcional}/>
        <MapaUbicacionCell proporcional={proporcional}/>
        <ContactoInfoCell proporcional={proporcional}/>
        <FormularioContactoCell proporcional={proporcional}/>
        <div style={{width: 459 / proporcional, marginLeft: 20 / proporcional, marginRight: 20 / proporcional, height: 2 / proporcional, 
                    background: 'rgb(230, 232, 232)', marginBottom: 35 / proporcional}}/>
        <FooterPrincipalCell proporcional={proporcional}/>
        <FooterCell proporcional={proporcional}/>    
    </div>
  )
}

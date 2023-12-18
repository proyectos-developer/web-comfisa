import React from 'react'

import SliderHomeCell from '../dashboard/slidercell.jsx'
import ProductosProveedoresCell from '../dashboard/productoscell.jsx'
import CotizarAquiCell from '../dashboard/cotizarcell.jsx'
import FooterPrincipalCell from '../footerprincipalcell.jsx'
import FooterCell from '../footercell.jsx'

export default function DashboardHomeTablet({proporcional}) {

    return (
        <div className='' style={{width: '100%', height:'auto'}}>
            <SliderHomeCell proporcional={proporcional}/>
            <ProductosProveedoresCell proporcional={proporcional}/>
            <CotizarAquiCell proporcional={proporcional}/>
            <FooterPrincipalCell proporcional={proporcional}/>
            <FooterCell proporcional={proporcional}/>
        </div>
    )
}

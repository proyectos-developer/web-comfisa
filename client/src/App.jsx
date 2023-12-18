import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './styles.css'

import PanelHome from './components/home/panel.jsx'
import PanelHomeTablet from './components/home/paneltablet.jsx'
import PanelHomeCell from './components/home/panelcell.jsx'

import DashboardHome from './components/home/dashboard.jsx'
import DashboardHomeTablet from './components/home/dashboardtablet.jsx'
import DashboardHomeCell from './components/home/dashboardcell.jsx'

import SobreNosotros from './components/nosotros/dashboard.jsx'
import SobreNosotrosTablet from './components/nosotros/dashboardtablet.jsx'
import SobreNosotrosCell from './components/nosotros/dashboardcell.jsx'

import Tienda from './components/tienda/dashboard.jsx'
import TiendaTablet from './components/tienda/dashboardtablet.jsx'
import TiendaCell from './components/tienda/dashboardcell.jsx'

import CarritoCotizar from './components/carrito/dashboard.jsx'
import CarritoCotizarTablet from './components/carrito/dashboardtablet.jsx'
import CarritoCotizarCell from './components/carrito/dashboardcell.jsx'

import DetallesProducto from './components/producto/dashboard.jsx'
import DetallesProductoTablet from './components/producto/dashboardtablet.jsx'
import DetallesProductoCell from './components/producto/dashboardcell.jsx'

import ProductosProveedor from './components/productos/productos.jsx'
import ProductosProveedorTablet from './components/productos/productostablet.jsx'
import ProductosProveedorCell from './components/productos/productoscell.jsx'

import Contacto from './components/contacto/dashboard.jsx'
import ContactoTablet from './components/contacto/dashboardtablet.jsx'
import ContactoCell from './components/contacto/dashboardcell.jsx'

function App() {
  const [width, setWidth] = useState (window.outerWidth)

  useEffect(() => {
    window.addEventListener('resize', handle_resize)

    return () => {
      window.removeEventListener('resize', handle_resize)
    }
  }, [])

  const handle_resize = () => {
    setWidth(window.outerWidth)
  }

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={width < 500 ? <PanelHomeCell   proporcional={499 / width}/> : 
                                     width < 991 ? <PanelHomeTablet proporcional={991 / width}/> : 
                                                   <PanelHome       proporcional={1920 / width} />}>

                <Route index element={width < 500 ? <DashboardHomeCell   proporcional={499 / width}/> :
                                      width < 991 ? <DashboardHomeTablet proporcional={991 / width}/> :
                                                    <DashboardHome       proporcional={1920 / width} />}/>
                                                    
                <Route path='sobre-nosotros' element={width < 500 ? <SobreNosotrosCell   proporcional={499 / width}/> :
                                                      width < 991 ? <SobreNosotrosTablet proporcional={991 / width}/> :
                                                                    <SobreNosotros       proporcional={1920 / width} />}/>
                                                    
                <Route path='proveedor/:proveedor/productos' element={width < 500 ? <ProductosProveedorCell   proporcional={499 / width}/> :
                                                                      width < 991 ? <ProductosProveedorTablet proporcional={991 / width}/> :
                                                                                    <ProductosProveedor       proporcional={1920 / width} />}/>
 
                <Route path='tienda' element={width < 500 ? <TiendaCell   proporcional={499 / width}/> :
                                              width < 991 ? <TiendaTablet proporcional={991 / width}/> :
                                                            <Tienda       proporcional={1920 / width} />}/>
                                                            
                <Route path='lista-cotizar' element={width < 500 ? <CarritoCotizarCell   proporcional={499 / width}/> :
                                                     width < 991 ? <CarritoCotizarTablet proporcional={991 / width}/> :
                                                                   <CarritoCotizar       proporcional={1920 / width} />}/>
                                                            
                <Route path='producto/:producto' element={width < 500 ? <DetallesProductoCell   proporcional={499 / width}/> :
                                                          width < 991 ? <DetallesProductoTablet proporcional={991 / width}/> :
                                                                        <DetallesProducto       proporcional={1920 / width} />}/>

                <Route path='contacto' element={width < 500 ? <ContactoCell   proporcional={499 / width}/> :
                                                width < 991 ? <ContactoTablet proporcional={991 / width}/> :
                                                              <Contacto       proporcional={1920 / width} />}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App

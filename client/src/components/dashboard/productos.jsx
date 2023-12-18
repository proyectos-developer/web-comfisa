import React, { useState } from 'react'

import icono_alambre from '../../assets/iconos/icono_alambre.png'
import icono_cemento from '../../assets/iconos/icono_cemento.png'
import icono_clavos from '../../assets/iconos/icono_clavos.png'
import icono_disco from '../../assets/iconos/icono_disco.png'
import icono_guantes from '../../assets/iconos/icono_guantes.png'
import icono_ladrillos from '../../assets/iconos/icono_ladrillos.png'
import icono_lija from '../../assets/iconos/icono_lija.png'
import icono_pintura from '../../assets/iconos/icono_pintura.png'
import icono_planchas from '../../assets/iconos/icono_planchas.png'
import icono_sellado from '../../assets/iconos/icono_sellado.png'
import icono_soldadura from '../../assets/iconos/icono_soldadura.png'
import icono_tubo from '../../assets/iconos/icono_tubo.png'
import icono_varilla from '../../assets/iconos/icono_varilla.png'

import cortadora from '../../assets/productos/cortadora_370.png'
import lijas from '../../assets/productos/lijas_370.png'
import varillas from '../../assets/productos/varillas_370.png'
import tecnopor from '../../assets/productos/tecnopor_370.png'
import clavos from '../../assets/productos/clavos_370.png'
import alambre from '../../assets/productos/alambre_370.png'
import soldadura from '../../assets/productos/soldadura_370.png'
import sellador from '../../assets/productos/sellador_370.png'
import pintura from '../../assets/productos/pintura_370.png'
import cemento from '../../assets/productos/cemento_370.png'
import ladrillos from '../../assets/productos/ladrillos_370.png'
import guantes from '../../assets/productos/guantes_370.png'
import tubos from '../../assets/productos/tubos_370.png'

import CardProveedor from './card/proveedor.jsx'

export default function ProductosProveedores({proporcional}) {

    const [seleccion_producto, setSeleccionProducto] = useState('')

    const lista_proveedores = [
        {titulo: 'NORTON, BRIKER', subtitulo: 'DISCOS PARA CORTAR', desripcion: 'Usado en trabajos artesanales e industriales para darle forma a un material, para cortar o para mejorar el acabado de la superficie del producto con el que se está trabajando.', icono: icono_disco, logo: cortadora},
        {titulo: 'ASA', subtitulo: 'LIJAS', descripcion: 'Las lijas suelen usare para dejar lisas las paredes, previo al pintado. Las lijas también se utilizan en carpintería, para el acabado de diferentes piezas.', icono: icono_lija, logo: lijas},
        {titulo: 'ACEROS AREQUIPA', subtitulo: 'VARILLAS DE FIERRO', descripcion: 'Se utiliza como material de refuerzo en las construcciones de concreto armado. Debido a sus características y propiedade posee una función esencial en la construcción de obra e infraetructura, de vivienda, comerciale e industriales.', icono: icono_varilla, logo: varillas},
        {titulo: 'TECNOPOR', subtitulo: 'PLANCHAS', descripcion: 'El tecnopor es utilizado en el sector de las obras civiles y construcción, en techos y parede para el aislamiento térmico y acústico.', icono: icono_planchas, logo: tecnopor},
        {titulo: 'METALYCK', subtitulo: 'CLAVOS', descripcion: 'El alambre reacocido, es un material vital para el armado de las estructuras, así como para dotarlas de firmeza, pues gracias a su flexibilidad puede servir para amarrar los estribos o hacer nudos que refuercen sin que el material se rompa.', icono: icono_clavos, logo: clavos},
        {titulo: 'METALYCK', subtitulo: 'ALAMBRE', descripcion: 'El alambre reacocido, es un material vital para el armado de las estructuras, así como para dotarlas de firmeza, pues gracias a su flexibilidad puede servir para amarrar los estribos o hacer nudos que refuercen sin que el material se rompa.', icono: icono_alambre, logo: alambre},
        {titulo: 'INDURA', subtitulo: 'SOLDADURA', descripcion: 'Se utiliza comúnmente para soldar estructuras de acero. Ete tipo de soldadura se utiliza para unir dos piezas de metal para crear estructuras más complejas. La mayoría de la industria prefiere utilizar este tipo de soldadura, debido a su simplicidad', icono: icono_soldadura, logo: soldadura},
        {titulo: 'MAJESTAD', subtitulo: 'SELLADOR, TEMPLE', descripcion: 'El sellador genera en la pared una barrera que impide que en los poros de la superficie entre cualquier tipo de sustancia o material que pueda perjudicar a la pintura.', icono: icono_sellado, logo: sellador},
        {titulo: 'MAXI', subtitulo: 'PINTURA', descripcion: 'La pintura látex permite mayor cubrimiento de las superficies gracia a su composición, es perfecta para trabajar en interiore y exteriores debido a su resistencia.', icono: icono_pintura, logo: pintura},
        {titulo: 'INKA, UNACEM', subtitulo: 'CEMENTO', descripcion: 'El cemento es un material de construcción esencial; de hecho, es el más utilizado en el mundo. La mayoría de las construcciones lo emplean en, por lo menos, una de sus etapas: cimientos, suelos, dinteles, muros, paredes o techos.', icono: icono_cemento, logo: cemento},
        {titulo: 'PIRAMIDE', subtitulo: 'LADRILLOS', descripcion: 'Los ladrillos se utilizan en construcción para fachadas y particiones. Se utiliza principalmente para construir muros o tabiques. Aunque se pueden colocar a hueso, lo habitual es que se reciban con mortero.', icono: icono_ladrillos, logo: ladrillos},
        {titulo: 'COMFISA', subtitulo: 'GUANTES', descripcion: 'Guante reforzador de nitrilo en la palma para proteger contra cortes leves. De fácil manipulación y flexible. Ajuste elástico para la muñeca.', icono: icono_guantes, logo: guantes},
        {titulo: 'MATUSITA', subtitulo: 'TUBOS PVC Y CPVC', descripcion: '', icono: icono_tubo, logo: tubos},
    ]

    return (
        <div style={{background: 'white', width: '100%', paddingLeft: 350 / proporcional, paddingRight: 350 / proporcional}}>
            <div style={{background: 'white', width: '100%', paddingTop: 57 / proporcional, marginBottom: 34 / proporcional}}>
                <p style={{fontSize: 34 / proporcional, lineHeight: `${45 / proporcional}px`, color: '#384da7', marginBottom: 6 / proporcional, textAlign: 'center',
                            fontWeight: 500}}>
                    Nuestros productos
                </p>
                <p style={{fontSize: 18 / proporcional, lineHeight: `${25 / proporcional}px`, color: 'rgb(95, 101, 109)', marginBottom: 0 / proporcional, textAlign: 'center',
                            fontWeight: 400}}>
                    Contamos con productos de la siguientes marcas
                </p>
            </div>
            <div style={{background: 'white', width: 1200 / proporcional, paddingTop: 57 / proporcional, paddingBottom: 57 / proporcional}}>
                <div className='d-flex' style={{width: 1200 / proporcional, marginBottom: 34 / proporcional, height: 392 / proporcional}}>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[0].titulo} subtitulo={lista_proveedores[0].subtitulo} descripcion={lista_proveedores[0].descripcion}  icono={lista_proveedores[0].icono} logo={lista_proveedores[0].logo}/>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[1].titulo} subtitulo={lista_proveedores[1].subtitulo} descripcion={lista_proveedores[1].descripcion}  icono={lista_proveedores[1].icono} logo={lista_proveedores[1].logo}/>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[2].titulo} subtitulo={lista_proveedores[2].subtitulo} descripcion={lista_proveedores[2].descripcion}  icono={lista_proveedores[2].icono} logo={lista_proveedores[2].logo}/>
                </div>
                <div className='d-flex' style={{width: 1200 / proporcional, marginBottom: 34 / proporcional, height: 392 / proporcional}}>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[3].titulo} subtitulo={lista_proveedores[3].subtitulo} descripcion={lista_proveedores[3].descripcion}  icono={lista_proveedores[3].icono} logo={lista_proveedores[3].logo}/>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[4].titulo} subtitulo={lista_proveedores[4].subtitulo} descripcion={lista_proveedores[4].descripcion}  icono={lista_proveedores[4].icono} logo={lista_proveedores[4].logo}/>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[5].titulo} subtitulo={lista_proveedores[5].subtitulo} descripcion={lista_proveedores[5].descripcion}  icono={lista_proveedores[5].icono} logo={lista_proveedores[5].logo}/>
                </div>
                <div className='d-flex' style={{width: 1200 / proporcional, marginBottom: 34 / proporcional, height: 392 / proporcional}}>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[6].titulo} subtitulo={lista_proveedores[6].subtitulo} descripcion={lista_proveedores[6].descripcion}  icono={lista_proveedores[6].icono} logo={lista_proveedores[6].logo}/>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[7].titulo} subtitulo={lista_proveedores[7].subtitulo} descripcion={lista_proveedores[7].descripcion}  icono={lista_proveedores[7].icono} logo={lista_proveedores[7].logo}/>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[8].titulo} subtitulo={lista_proveedores[8].subtitulo} descripcion={lista_proveedores[8].descripcion}  icono={lista_proveedores[8].icono} logo={lista_proveedores[8].logo}/>
                </div>
                <div className='d-flex' style={{width: 1200 / proporcional, marginBottom: 34 / proporcional, height: 392 / proporcional}}>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[9].titulo} subtitulo={lista_proveedores[9].subtitulo} descripcion={lista_proveedores[9].descripcion}  icono={lista_proveedores[9].icono} logo={lista_proveedores[9].logo}/>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[10].titulo} subtitulo={lista_proveedores[10].subtitulo} descripcion={lista_proveedores[10].descripcion}  icono={lista_proveedores[10].icono} logo={lista_proveedores[10].logo}/>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[11].titulo} subtitulo={lista_proveedores[11].subtitulo} descripcion={lista_proveedores[11].descripcion}  icono={lista_proveedores[11].icono} logo={lista_proveedores[11].logo}/>
                </div>
                <div className='d-flex' style={{width: 1200 / proporcional, marginBottom: 34 / proporcional, height: 392 / proporcional}}>
                    <CardProveedor proporcional={proporcional} titulo={lista_proveedores[12].titulo} subtitulo={lista_proveedores[12].subtitulo} descripcion={lista_proveedores[12].descripcion}  icono={lista_proveedores[12].icono} logo={lista_proveedores[12].logo}/>
                </div>
            </div>
        </div>
    )
}
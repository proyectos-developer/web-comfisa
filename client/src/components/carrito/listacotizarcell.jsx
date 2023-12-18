import React from 'react'

import CardProductoCotizarCell from './card/productocotizarcell.jsx'
import { useNavigate } from 'react-router-dom';

export default function ListaCotizarCell({proporcional}) {

    const navigate = useNavigate()

    return (
        <div style={{width: '100%', height: 'auto', paddingLeft: 20 / proporcional, paddingRight: 20 / proporcional, paddingTop: 120 / proporcional, paddingBottom: 120 / proporcional}}>
            <div className='d-flex' style={{width: '100%', height: 60 / proporcional, border: '1px solid #e8e8e8'}}>
                <div style={{width: '30%', height: 58 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                        padding: 15 / proporcional}}>
                        Producto
                    </p>
                </div>
                <div style={{width: '10%', height: 58 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                        padding: 15 / proporcional}}>
                        Cant.
                    </p>
                </div>
                <div style={{width: '60%', height: 58 / proporcional}}>
                    <p style={{fontSize: 18 / proporcional, lineHeight: `${28 / proporcional}px`, fontWeight: 500, marginBottom: 0, color: 'rgb(34, 34, 34)', 
                        padding: 15 / proporcional, textAlign: 'center'}}>
                        Detalles
                    </p>
                </div>
            </div>
            <CardProductoCotizarCell proporcional={proporcional}/>
            <div className=' justify-content-between' style={{width: '100%', height: 60 / proporcional, padding: 10}}>
                <button className='btn rounded' style={{width: '100%', height: 50 / proporcional, background: 'rgba(34, 34, 34, 0.5)',
                        fontSize: 16 / proporcional, color: 'white', fontWeight: 500, marginBottom: 10 / proporcional}}
                        onClick={() => {navigate('/'); window.scrollTo(0, 0)}}>
                    Volver
                </button>
                <button className='btn rounded' style={{width: '100%', height: 50 / proporcional, background: 'rgb(34, 34, 34)',
                        fontSize: 16 / proporcional, color: 'white', fontWeight: 500}}
                        onClick={() => {window.scrollTo(0, 0)}}>
                    Pedir cotización
                </button>
            </div>
        </div>
    )
}

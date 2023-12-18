import React, { useState } from 'react'

export default function FormularioContactoCell({proporcional}) {
    
    const [nombres, setNombres] = useState('')
    const [apellidos, setApellidos] = useState('')
    const [nro_telefono, setNroTelefono] = useState('')
    const [email, setEmail] = useState('')
    const [mensajes, setMensajes] = useState('')
    
    const [enombres, setENombres] = useState('')
    const [eapellidos, setEApellidos] = useState('')
    const [enro_telefono, setENroTelefono] = useState('')
    const [eemail, setEEmail] = useState('')
    const [emensajes, setEMensajes] = useState('')

    const enviar_mensaje = () => {
        if (nombres === '' || apellidos === '' || nro_telefono === '' || email === '' || mensajes === ''){
            setENombres(nombres === '' ? true : false)
            setEApellidos(apellidos === '' ? true : false)
            setENroTelefono(nro_telefono === '' ? true : false)
            setEEmail(email === '' ? true : false)
            setEMensajes(mensajes === '' ? true : false)
        }else{
            setENombres(false)
            setEApellidos(false)
            setENroTelefono(false)
            setEEmail(false)
            setEMensajes(false)
        }
    }

    return (
        <div style={{width: 459 / proporcional, marginRight: 20 / proporcional, marginLeft: 20 / proporcional}}>
            <div className='rounded-pill' style={{width: 50 / proporcional, height: 4 / proporcional, background: '#d18e32', marginTop: 15 / proporcional,
                    marginBottom: 15 / proporcional}}/>
            <p style={{fontSize: 22 / proporcional, fontWeight: 600, color: '#292929', lineHeight: `${26 / proporcional}px`}}>Contáctanos</p>
            <div style={{width: 459 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)'}}>Nombres *</p>
                <input
                    type='text'
                    className='form-control'
                    onChange={(event) => setNombres(event.target.value)}
                    value={nombres}
                    style={{width: '100%', height: 50 / proporcional, border: enombres === '' ? '1px solid #ededed' : '1px solid red', 
                            color: '#848a90', paddingTop: 12 / proporcional, 
                            paddingBottom: 12 / proporcional, paddingLeft: 17 / proporcional, paddingRight: 17 / proporcional, background: '#f5f6f6'}} 
                    placeholder='Ingrese sus nombres'
                />
            </div>
            <div style={{width: 459 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)'}}>Apellidos *</p>
                <input
                    type='text'
                    className='form-control'
                    onChange={(event) => setApellidos(event.target.value)}
                    value={apellidos}
                    style={{width: '100%', height: 50 / proporcional, border: enombres === '' ? '1px solid #ededed' : '1px solid red', 
                            color: '#848a90', paddingTop: 12 / proporcional, 
                            paddingBottom: 12 / proporcional, paddingLeft: 17 / proporcional, paddingRight: 17 / proporcional, background: '#f5f6f6'}} 
                    placeholder='Ingrese sus apellidos'
                />
            </div>
            <div style={{width: 459 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)'}}>Teléfono *</p>
                <input
                    type='number'
                    className='form-control'
                    onChange={(event) => setNroTelefono(event.target.value)}
                    value={nro_telefono}
                    style={{width: '100%', height: 50 / proporcional, border: eapellidos === '' ? '1px solid #ededed' : '1px solid red', 
                            color: '#848a90', paddingTop: 12 / proporcional, 
                            paddingBottom: 12 / proporcional, paddingLeft: 17 / proporcional, paddingRight: 17 / proporcional, background: '#f5f6f6'}} 
                    placeholder='Ingrese su teléfono'
                />
            </div>
            <div style={{width: 459 / proporcional, marginBottom: 20 / proporcional}}>
                <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)'}}>E-mail *</p>
                <input
                    type='email'
                    className='form-control'
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    style={{width: '100%', height: 50 / proporcional, border: enro_telefono === '' ? '1px solid #ededed' : '1px solid red', 
                            color: '#848a90', paddingTop: 12 / proporcional, 
                            paddingBottom: 12 / proporcional, paddingLeft: 17 / proporcional, paddingRight: 17 / proporcional, background: '#f5f6f6'}} 
                    placeholder='Ingrese su email'
                />
            </div>
            <p style={{fontSize: 16 / proporcional, fontWeight: 600, lineHeight: `${18 / proporcional}px`, color: 'rgb(34, 41, 49)'}}>Tu mensaje *</p>
            <textarea
                type='email'
                rows='4'
                className='form-control'
                onChange={(event) => setMensajes(event.target.value)}
                value={mensajes}
                style={{width: '100%', height: 50 / proporcional, border: emensajes === '' ? '1px solid #ededed' : '1px solid red', 
                        color: '#848a90', height: 225 / proporcional, 
                        paddingTop: 12 / proporcional,  paddingBottom: 12 / proporcional, paddingLeft: 17 / proporcional, paddingRight: 17 / proporcional, 
                        background: '#f5f6f6', marginBottom: 20 / proporcional}} 
                placeholder='Ingrese su mensaje.'
            />
            <button className='btn rounded' style={{width: 200 / proporcional, hight: 50 / proporcional, background: '#d18e32', fontSize: 18 / proporcional, 
                    color: 'white', lineHeight: `${50 / proporcional}px`, fontWeight: 600, marginBottom: 20 / proporcional}}
                    onClick={() => enviar_mensaje()}>Enviar mensaje</button>
        </div>
    )
}

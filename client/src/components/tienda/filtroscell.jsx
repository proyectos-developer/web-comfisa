import React, { useState } from 'react'

import icono_box from '../../assets/iconos/icono_box.png'
import icono_check_box from '../../assets/iconos/icono_check_box.png'

export default function FiltrosTablet({proporcional}) {

    const [set_check_norton, setCheckNorton] = useState (false)
    const [set_check_briker, setCheckBriker] = useState (false)
    const [set_check_asa, setCheckAsa] = useState (false)
    const [set_check_aceros, setCheckAceros] = useState (false)
    const [set_check_metalyck, setCheckMetalyck] = useState (false)
    const [set_check_indura, setCheckIndura] = useState (false)
    const [set_check_majestad, setCheckMajestad] = useState (false)
    const [set_check_maxi, setCheckMaxi] = useState (false)
    const [set_check_inka, setCheckInka] = useState (false)
    const [set_check_unacem, setCheckUnacem] = useState (false)
    const [set_check_piramide, setCheckPiramide] = useState (false)
    const [set_check_comfisa, setCheckComfisa] = useState (false)
    const [set_check_matusita, setCheckMatusita] = useState (false)

    return (
        <div style={{width: '100%', paddingRight: 20 / proporcional, paddingLeft: 20 / proporcional, paddingTop: 10 / proporcional, paddingRight: 10 / proporcional, marginTop: 58 / proporcional}}>
            <p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${26 / proporcional}px`, color: '#222931'}}>Por proveedor</p>
            <div className='rounded' style={{width: '25%', height: 4 / proporcional, background: '#d18e32', marginTop: 17 / proporcional, marginBottom: 17 / proporcional}}/>
            <div style={{width: '100%', marginBottom: 33 / proporcional}}>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_norton ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckNorton(!set_check_norton)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>NORTON</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_briker ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckBriker(!set_check_briker)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>BRIKRE</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_asa ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckAsa(!set_check_asa)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>ASA</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_aceros ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckAceros(!set_check_aceros)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>ACEROS AREQUIPA</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_metalyck ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckMetalyck(!set_check_metalyck)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>METALYCK</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_indura ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckIndura(!set_check_indura)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>INDURA</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_majestad ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckMajestad(!set_check_majestad)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>MAJESTAD</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_maxi ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckMaxi(!set_check_maxi)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>MAXI</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_inka ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckInka(!set_check_inka)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>INKA</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_unacem ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckUnacem(!set_check_unacem)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>UNACEM</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_piramide ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckPiramide(!set_check_piramide)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>PIRAMIDE</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_comfisa ? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckComfisa(!set_check_comfisa)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>COMFISA</p>
                </div>
                <div className='d-flex' style={{width: '100%', height: 26 / proporcional, marginBottom: 3 / proporcional}}>
                    <img src={set_check_matusita? icono_check_box : icono_box} style={{width: 20 / proporcional, height: 20 / proporcional, marginTop: 3 / proporcional,
                            marginBottom: 3 / proporcional, marginRight: 6 / proporcional, cursor: 'pointer'}}
                            onClick={() => setCheckMatusita(!set_check_matusita)}/>
                    <p style={{fontSize: 16 / proporcional, lineHeight: `${26 / proporcional}px`, color: 'rgb(95, 101, 109)', cursor: 'pointer',
                        fontWeight: 400}}>MATUSITA</p>
                </div>
            </div>
            {/**<p style={{fontSize: 22 / proporcional, fontWeight: 500, lineHeight: `${26 / proporcional}px`, color: '#222931'}}>Por producto</p>
            <div className='rounded' style={{width: '25%', height: 4 / proporcional, background: '#d18e32', marginTop: 17 / proporcional, marginBottom: 17 / proporcional}}/>**/}
        </div>
    )
}
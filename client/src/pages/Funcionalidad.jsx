import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const Funcionalidad = () => {
    const getData = async () => {
        axios.get('/api/pases').then((response) => {
            console.log(response)
        })
    }
    useEffect(() => {
        getData();
    }, []);
    return (
        <div className='container'>
            <div className='abs-center'><h2>Bienvenido a SIP - Sistema Informatico de Pases</h2></div>
            <div className='row'>
                <div className='col-md-6'>
                    <h3>Usuarios</h3>
                </div>
                <div className='col-md-6'>
                    <h3>Pases</h3>
                </div>
            </div>
            <div className='row'>
                <div className='col-md-12'>
                    <h3>Reporte</h3>
                </div>
            </div>
        </div>
    )
}
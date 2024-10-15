import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AgregarServicio() {
    let navegacion = useNavigate();

    const [orden, setOrden] = useState({
        codigo: "",
        cliente: "",
        cedula: "",
        tipoServicio: "",
        direccion: "",
        marca: "",
        modelo: "",
        serial: "",
        cargador: "",
        bateria: "",
        otros: "",
        telefono: "",
        descripcion: "",
        fecha: ""
    });

    const [isEditing, setIsEditing] = useState(false); // Controla si se puede editar el formulario

    const { codigo, cliente, cedula, tipoServicio, direccion, marca,modelo,serial,cargador,bateria,otros,telefono,descripcion,fecha} = orden;

    // Esta función obtiene el código solo cuando el usuario presiona "Agregar Nueva Orden de Servicio"
    const obtenerCodigo = async () => {
        try {
            const response = await axios.get('http://localhost:8080/cw/generarcodigo');
            setOrden(prevOrden => ({ ...prevOrden, codigo: response.data }));
        } catch (error) {
            console.error("Error al obtener el código", error);
        }
    };

    const onInputChange = (e) => {
        setOrden({ ...orden, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const urlBase = "http://localhost:8080/cw/ordenservicios";
        await axios.post(urlBase, orden);
        setOrden({
            codigo: "",
            cliente: "",
            cedula: "",
            tipoServicio: "",
            direccion: "",
            marca: "",
            modelo: "",
            serial: "",
            cargador: "",
            bateria: "",
            otros: "",
            telefono: "",
            descripcion: "",
            fecha: ""
        });
        setIsEditing(false);
        navegacion("/");
    };

    const handleAgregarOrden = () => {
        obtenerCodigo(); // Llama la función para obtener el código cuando el usuario presiona el botón
        setIsEditing(true); // Habilita la edición del formulario
    };

    return (
        <div className='container'>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/agregarorden"><i className="fa-solid fa-house"></i> Inicio</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Orden de Servicio</li>
                </ol>
            </nav>

            <div className='text-center' style={{ height: '60px', width: "880px", position: "relative", left: "332px", top: "4px" }} >
                <div className='row mb-4'>
                    <div className='col'>
                        <button type="button" className="btn btn-primary" style={{width:"386px", height:"60px"}} onClick={handleAgregarOrden}>
                            Agregar Nueva Orden de Servicio
                        </button>
                    </div>
                    <div className='col'>
                        <Link type="button" className="btn btn-primary" style={{width:"386px", height:"60px", display:"flex", alignItems:"center", justifyContent:"space-around" }} to="/buscarorden">
                            Buscar Orden de Servicio
                        </Link>
                    </div>
                </div>
            </div>

            <h6 className='mb-3' style={{ textAlign: 'left' }}>Nueva Orden de Servicio</h6>

            <form onSubmit={onSubmit} className="form-horizontal" style={{ height: '60px', width: "880px", position: "relative", left: "29%", top: "40px" }}>
                
                <div className="mb-3 row">
                    <label htmlFor="codigo" className="col-sm-3 col-form-label">Código:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="codigo"
                            name='codigo'
                            value={codigo} // El código será asignado aquí tras pulsar "Agregar Nueva Orden"
                            onChange={onInputChange}
                            disabled
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="cliente" className="col-sm-3 col-form-label">Cliente:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="cliente"
                            name='cliente'
                            required
                            value={cliente}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="Fecha" className="col-sm-3 col-form-label">fecha:*</label>
                    <div className="col-sm-6">
                        <input
                            type="date"
                            className="form-control"
                            id="fecha"
                            name='fecha'
                            required
                            value={fecha}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="direiccion" className="col-sm-3 col-form-label">Direccion:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="direccion"
                            name='direccion'
                            required
                            value={direccion}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="cedula" className="col-sm-3 col-form-label">Cedeula:</label>
                    <div className="col-sm-3">
                        <input
                            type="number"
                            className="form-control"
                            id="cedula"
                            name='cedula'
                            required
                            value={cedula}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="telefono" className="col-sm-3 col-form-label">Telefono:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="telefono"
                            name='telefono'
                            required
                            value={telefono}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="tipoServicio" className="col-sm-3 col-form-label">Tipo Servicio:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="fetipoServicio"
                            name='tipoServicio'
                            required
                            value={tipoServicio}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="marca" className="col-sm-3 col-form-label">Marca:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="marca"
                            name='marca'
                            required
                            value={marca}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="modelo" className="col-sm-3 col-form-label">Modelo:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="modelo"
                            name='modelo'
                            required
                            value={modelo}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="serial" className="col-sm-3 col-form-label">Serial:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="serial"
                            name='serial'
                            required
                            value={serial}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="cargador" className="col-sm-3 col-form-label">Cargador:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="cargador"
                            name='cargador'
                            required
                            value={cargador}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="bateria" className="col-sm-3 col-form-label">Batería:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="bateria"
                            name='bateria'
                            required
                            value={bateria}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="otros" className="col-sm-3 col-form-label">Otros:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="otros"
                            name='otros'
                            required
                            value={otros}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>

                <div className="mb-3 row">
                    <label htmlFor="descripcion" className="col-sm-3 col-form-label">Descripcion:*</label>
                    <div className="col-sm-6">
                        <input
                            type="text"
                            className="form-control"
                            id="descripcion"
                            name='descripcion'
                            required
                            value={descripcion}
                            onChange={onInputChange}
                            disabled={!isEditing}
                        />
                    </div>
                </div>


                <div className="text-center">
                    <button type="submit" className="btn btn-success" disabled={!isEditing}>Guardar <i className="fa-solid fa-check" /></button>
                </div>
            </form>
        </div>
    );
}

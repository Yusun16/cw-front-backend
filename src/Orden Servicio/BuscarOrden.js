import axios from 'axios';
import React, { useState } from 'react';

export default function BuscarOrden() {
    const urlBase = "http://localhost:8080/cw";

    const [ordenes, setOrdenes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(7);

    // Estados para los campos de búsqueda
    const [idOrden, setidOrden] = useState('');
    const [cliente, setCliente] = useState('');
    const [fecha, setFecha] = useState('');
    const [serial, setSerial] = useState('');

    // Manejo del envío del formulario de búsqueda
    const handleBuscar = async (e) => {
        e.preventDefault();

        const filtros = {};
        if (idOrden) filtros.idOrden = idOrden;
        if (cliente) filtros.cliente = cliente;
        if (fecha) filtros.fecha = fecha;
        if (serial) filtros.serial = serial;

        await cargarOrdenes(filtros);

        setCurrentPage(1); // Reinicia la paginación
    }

    const cargarOrdenes = async (filtros) => {
        try {
            const resultado = await axios.get(`${urlBase}/buscarorden`, { params: filtros });
            console.log(resultado);

            setOrdenes(resultado.data);
        } catch (error) {
            console.error("Error al cargar las órdenes:", error);
        }
    }

    // Paginación
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = ordenes.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(ordenes.length / itemsPerPage);

    const goToPreviousPage = () => setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
    const goToNextPage = () => setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages));

    return (
        <div className='container'>
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="/agregarorden"><i className="fa-solid fa-house"></i> Inicio</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Buscar Orden</li>
                </ol>
            </nav>

            {/* Formulario de búsqueda */}
            <div className='d-flex justify-content-center' style={{ margin: "30px" }}>
                <div className='w-100' style={{ maxWidth: "600px" }}>
                    <h6 className='mb-3 text-center' style={{ width: "296px", height: "34px" }}>Buscar Orden de Servicio</h6>
                    <form onSubmit={handleBuscar}>
                        <div className="row">
                            <div className="col-12 mb-3">
                                <div className="mb-3 row">
                                    <label htmlFor="idOrden" className="col-sm-3 col-form-label">N° de servicio:*</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="idOrden" name='idOrden' value={idOrden} onChange={(e) => setidOrden(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="mb-3 row">
                                    <label htmlFor="cliente" className="col-sm-3 col-form-label">Cliente:*</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="cliente" name='cliente' value={cliente} onChange={(e) => setCliente(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="mb-3 row">
                                    <label htmlFor="fecha" className="col-sm-3 col-form-label">Fecha de Ingreso:*</label>
                                    <div className="col-sm-6">
                                        <input type="date" className="form-control" id="fecha" name='fecha' value={fecha} onChange={(e) => setFecha(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <div className="mb-3 row">
                                    <label htmlFor="serial" className="col-sm-3 col-form-label">Serial:*</label>
                                    <div className="col-sm-6">
                                        <input type="text" className="form-control" id="serial" name='serial' value={serial} onChange={(e) => setSerial(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button type="submit" className="btn btn-success">
                                    <i className="fa-solid fa-magnifying-glass"></i> Buscar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Tabla con resultados */}
            {ordenes.length > 0 && (
                <div className='container' style={{ margin: "30px 0px" }}>
                    <h5>Seleccione el N° de servicio para abrir la ejecución</h5>
                    <div className="container" style={{}}>
                        <table className="container">
                            <thead>
                                <tr className='tr-table-tr'>
                                    <th className='th-tabla colorthead text-center' scope="col">Orden de servicio</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Cliente</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Cedula</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Fecha</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Direccion</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Telefono</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Marca</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Modelo</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Serial</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Cargador</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Bateria</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Otros</th>
                                    <th className='th-tabla colorthead text-center' scope="col">Descripcion</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((orden, indice) => (
                                    <tr className='tr-table-tr text-center' key={indice}>
                                        <th>{orden.idOrden}</th>
                                        <td>{orden.cliente}</td>
                                        <td>{orden.cedula}</td>
                                        <td>{orden.fecha}</td>
                                        <td>{orden.direccion}</td>
                                        <td>{orden.telefono}</td>
                                        <td>{orden.marca}</td>
                                        <td>{orden.modelo}</td>
                                        <td>{orden.serial}</td>
                                        <td>{orden.cargador}</td>
                                        <td>{orden.bateria}</td>
                                        <td>{orden.otros}</td>
                                        <td>{orden.descripcion}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div class="h4 pb-2 mb-4 text-danger border-bottom border-dark"></div>
                </div>
            )}

            {/* Paginación */}
            {ordenes.length > 0 && (
                <div className='container' style={{ margin: "30px" }}>
                    <div className='d-flex justify-content-between align-items-center'>
                        {/* Texto de página actual */}
                        <div>
                            <span>Mostrando {currentPage} de {totalPages}</span>
                        </div>
                        {/* Botones Anterior y Siguiente */}
                        <div className='pag-num' >
                            <button
                                onClick={goToPreviousPage}
                                className="btn btn-secondary"
                                disabled={currentPage === 1}
                            >
                                Anterior
                            </button>
                            <div >
                                <button type="button" class="btn btn-light"><span>{currentPage}</span></button>
                            </div>
                            <button
                                onClick={goToNextPage}
                                className="btn btn-secondary"
                                disabled={currentPage === totalPages}
                            >
                                Siguiente
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

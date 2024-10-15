import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';

// Versión en JavaScript, sin tipos
export default function ListadoOrden() {
  const urlBase = "http://localhost:8080/cw/ordenservicios";
  
  // Estado para almacenar las órdenes
  const [ordenes, setOrdenes] = useState([]);

  useEffect(() => {
    cargarOrdenes();
  }, []);

  // Función para cargar las órdenes desde la API
  const cargarOrdenes = async () => {
    try {
      const resultado = await axios.get(urlBase);
      console.log("Resultado cargar ordenes", resultado.data);
      setOrdenes(resultado.data);
    } catch (error) {
      console.error("Error al cargar las órdenes", error);
    }
  };

  // Definir las columnas de la tabla
  const columns = useMemo(() => [
    {
      accessorKey: 'codigo', // Nombre del campo en los datos
      header: 'Código',
      size: 150,
    },
    {
      accessorKey: 'cliente',
      header: 'Cliente',
      size: 200,
    },
    {
      accessorKey: 'cedula',
      header: 'Cédula',
      size: 150,
    },
    {
      accessorKey: 'direccion',
      header: 'Dirección',
      size: 200,
    },
    {
      accessorKey: 'marca',
      header: 'Marca',
      size: 150,
    },
    {
      accessorKey: 'modelo',
      header: 'Modelo',
      size: 150,
    },
    {
      accessorKey: 'serial',
      header: 'Serial',
      size: 150,
    },
    {
      accessorKey: 'cargador',
      header: 'Cargador',
      size: 150,
    },
    {
      accessorKey: 'bateria',
      header: 'Batería',
      size: 150,
    },
    {
      accessorKey: 'otros',
      header: 'Otros',
      size: 150,
    },
    {
      accessorKey: 'telefono',
      header: 'Teléfono',
      size: 150,
    },
    {
      accessorKey: 'descripcion',
      header: 'Descripción',
      size: 200,
    },
    {
      accessorKey: 'fecha',
      header: 'Fecha',
      size: 150,
    },
  ], []);

  const table = useMaterialReactTable({
    columns,
    data: ordenes, // datos deben ser estables o memorizados
  });

  return (
    <div className='container'>
      <div className="container text-center" style={{ margin: "30px" }}>
        <h3>Orden de Servicio</h3>
      </div>

      <div className='container text-center' style={{ margin: "30px" }}>
        <Link type="button" className="btn btn-center btn-primary" to="/agregarorden">
          Agregar Servicio
        </Link>
      </div>

      {/* Reemplazar la tabla HTML con MaterialReactTable */}
      <MaterialReactTable table={table} />
    </div>
  );
}

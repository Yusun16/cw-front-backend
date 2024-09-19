package cw.cw.servicio;

import cw.cw.modelo.Orden;

import java.time.LocalDate;
import java.util.List;

public interface IOrdenServicio {

    public List<Orden> listarOrden();

    public Orden buscarOrdenPorId(Integer idOrden);

    public Orden guardarOrden(Orden orden);

    public void eliminarOrden(Orden orden);

    public List<Orden> listordenbyparanst(Integer codigo, String cliente, String placaVehiculo, LocalDate fecha);

    public String buscarCodigo();

}

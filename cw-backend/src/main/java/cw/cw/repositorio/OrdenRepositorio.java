package cw.cw.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import cw.cw.modelo.Orden;

import java.time.LocalDate;
import java.util.List;

public interface OrdenRepositorio extends JpaRepository<Orden, Integer> {

    @Query(value="select codigo from orden where id_orden=(select max(id_orden) from orden);",nativeQuery = true)
    String buscarCodigo();

    List<Orden> findByIdOrdenOrClienteAndPlacaVehiculoOrFecha(
            Integer idOrden, String cliente, String placaVehiculo, LocalDate fecha
    );

}

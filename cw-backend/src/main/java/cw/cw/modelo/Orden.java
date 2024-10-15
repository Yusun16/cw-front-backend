package cw.cw.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.time.LocalDate;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Orden {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Integer idOrden;
    String codigo;
    String cliente;
    String Cedula;
    String tipoServicio;
    String Direccion;
    String Marca;
    String Modelo;
    String serial;
    String Cargador;
    String Bateria;
    String Otros;
    String Telefono;
    String Descripcion;
    LocalDate fecha;
}

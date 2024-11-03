package org.unsam.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Personas")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class persona {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nombre;

    @Column
    private String apellido;

    @Column
    private String email;
    
    public Long getId() {
        return id;
    }
    
    public String getNombre() {
        return this.nombre;
    }

    public String getApellido() {
        return this.apellido;
    }

    public String getEmail() {
        return this.email;
    }

    public void setNombre(String newNombre) {
         this.nombre = newNombre;
    }

    public void setApellido(String newApellido) {
        this.apellido = newApellido;
    }

    public void setEmail(String newEmail) {
        this.email = newEmail;
    }
}

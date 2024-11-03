package org.unsam.menu;

import java.util.Scanner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.unsam.service.personaService;
import org.unsam.service.aulaService;
import org.unsam.service.horarioService;
import org.unsam.entity.persona;
import org.unsam.entity.aula;
import org.unsam.entity.horario;

@Component
public class MenuPrueba implements CommandLineRunner {

    @Autowired
    private personaService personaService;

    @Autowired
    private aulaService aulaService;

    @Autowired
    private horarioService horarioService;

    private final Scanner scanner = new Scanner(System.in);

    @Override
    public void run(String... args) throws Exception {
        boolean salir = false;
        while (!salir) {
            System.out.println("\n--- Menú de Prueba ---");
            System.out.println("1. Listar Personas");
            System.out.println("2. Agregar Persona");
            System.out.println("3. Listar Aulas");
            System.out.println("4. Agregar Aula");
            System.out.println("5. Listar Horarios");
            System.out.println("6. Agregar Horario");
            System.out.println("0. Salir");
            System.out.print("Seleccione una opción: ");

            int opcion = scanner.nextInt();
            scanner.nextLine(); // Consumir el salto de línea

            switch (opcion) {
                case 1:
                    listarPersonas();
                    break;
                case 2:
                    agregarPersona();
                    break;
                case 3:
                    listarAulas();
                    break;
                case 4:
                    agregarAula();
                    break;
                case 5:
                    listarHorarios();
                    break;
                case 6:
                    agregarHorario();
                    break;
                case 0:
                    salir = true;
                    break;
                default:
                    System.out.println("Opción no válida");
            }
        }
        System.out.println("¡Hasta luego!");
    }

    private void listarPersonas() {
        System.out.println("\nListado de Personas:");
        personaService.listarPersonas().forEach(p -> 
            System.out.println(p.getId() + ": " + p.getNombre() + " " + p.getApellido()));
    }

    private void agregarPersona() {
        System.out.println("\nAgregar nueva Persona:");
        System.out.print("Nombre: ");
        String nombre = scanner.nextLine();
        System.out.print("Apellido: ");
        String apellido = scanner.nextLine();
        System.out.print("Email: ");
        String email = scanner.nextLine();

        persona nuevaPersona = new persona();
        nuevaPersona.setNombre(nombre);
        nuevaPersona.setApellido(apellido);
        nuevaPersona.setEmail(email);

        personaService.guardarPersona(nuevaPersona);
        System.out.println("Persona agregada con éxito.");
    }

    private void listarAulas() {
        System.out.println("\nListado de Aulas:");
        aulaService.listarAulas().forEach(a -> 
            System.out.println(a.getId() + ": " + a.getNombre()));
    }

    private void agregarAula() {
        System.out.println("\nAgregar nueva Aula:");
        System.out.print("Nombre: ");
        String nombre = scanner.nextLine();
        System.out.print("ID del Tipo de Aula: ");
        Long tipoAulaId = scanner.nextLong();

        aula nuevaAula = new aula();
        nuevaAula.setNombre(nombre);
        nuevaAula.setTipoAulaId(tipoAulaId);

        aulaService.guardarAula(nuevaAula);
        System.out.println("Aula agregada con éxito.");
    }

    private void listarHorarios() {
        System.out.println("\nListado de Horarios:");
        horarioService.listarHorarios().forEach(h -> 
            System.out.println(h.getId() + ": " + h.getDia() + " " + h.getHoraInicio() + "-" + h.getHoraFin()));
    }

    private void agregarHorario() {
        System.out.println("\nAgregar nuevo Horario:");
        System.out.print("Día (ej. Lunes): ");
        String dia = scanner.nextLine();
        System.out.print("Hora de inicio (HH:MM): ");
        String horaInicio = scanner.nextLine();
        System.out.print("Hora de fin (HH:MM): ");
        String horaFin = scanner.nextLine();
        System.out.print("ID del Aula: ");
        Long aulaId = scanner.nextLong();
        System.out.print("ID de la Asignatura: ");
        Long asignaturaId = scanner.nextLong();

        horario nuevoHorario = new horario();
        nuevoHorario.setDia(dia);
        nuevoHorario.setHoraInicio(java.time.LocalTime.parse(horaInicio));
        nuevoHorario.setHoraFin(java.time.LocalTime.parse(horaFin));
        nuevoHorario.setAulaId(aulaId);
        nuevoHorario.setAsignaturaId(asignaturaId);

        horarioService.guardarHorario(nuevoHorario);
        System.out.println("Horario agregado con éxito.");
    }
}
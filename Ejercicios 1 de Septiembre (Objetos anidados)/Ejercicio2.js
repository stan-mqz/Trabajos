// Una aplicación móvil necesita gestionar los perfiles de sus usuarios. Se requiere crear un objeto anidado que contenga:


// Información personal (nombre, edad, email)

// Preferencias de la aplicación (idioma, notificaciones, tema)

// Estadísticas de uso (fechaRegistro, ultimoAcceso, numeroSesiones).

// Tareas a realizar:

// Crear un objeto perfilUsuario con tres objetos anidados.

// Mostrar cada sección de información por separado.

// Cambiar el idioma de "español" a "inglés".

// Actualizar la fecha de último acceso a la fecha actual.

// Eliminar una preferencia innecesaria.

// Extraer el email y el idioma en variables separadas.

// Mostrar el perfil completo actualizado.

const perfilUsuario = {
   informacionPersonal: {
    nombre: "Stanley",
    edad: 19,
    email: "stanley@gmail.com",
   },
   preferenciasDeLaAplicacion: {
    idioma: "español",
    notificaciones: "si",
    tema: "claro",
   },
   estadisticasDeUso: {
    fechaRegistro: "2025-01-01",
    ultimoAcceso: "2025-01-01",
    numeroSesiones: 10,
   },
}

console.log(perfilUsuario.informacionPersonal);
console.log(perfilUsuario.preferenciasDeLaAplicacion);
console.log(perfilUsuario.estadisticasDeUso);

perfilUsuario.preferenciasDeLaAplicacion.idioma = "inglés";

perfilUsuario.estadisticasDeUso.ultimoAcceso = "2025-09-01"

delete perfilUsuario.preferenciasDeLaAplicacion.notificaciones

const {email} = perfilUsuario.informacionPersonal
const {idioma} = perfilUsuario.preferenciasDeLaAplicacion

console.log(perfilUsuario);

const databaseService = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host : 'localhost',
            port : 3306,
            user : 'usuario',
            password: 'lorena99.',
            database : 'veterinaria'
         }
    });
      
    const tableRegistro = 'Registro';
    const tableAgendar = 'Agendar';
  

    const getAgendas = () => {
        return knex(tableAgendar).select();
    };

    const getRegistros = () => {
        return knex(tableRegistro).select();
    };

    const leerRegistro = (email, contrasena) => {
        return knex(tableRegistro).select().where('email', email).where('contrasena', contrasena);
    };

    const leerAgendaUsuario = (idRegistro) => {
        return knex(tableAgendar).select().where('id_Registro', idRegistro);
    };
    

    const crearRegistro = (idRegistro, email, nombre, apellido, contrasena, telefono, nombreMascota, tipoMascota, fechaNacimiento, raza) => {
        console.log(email);
        return knex(tableRegistro).insert({
            id_Registro: idRegistro,
            email: email,
            nombre: nombre,
            apellido: apellido, 
            contrasena: contrasena,
            telefono: telefono,
            nombre_mascota: nombreMascota,
            tipo_mascota: tipoMascota,
            fecha_nacimiento: fechaNacimiento,
            raza: raza,
            administrador : 0     
        });
    }

   const crearAgendar = (idAgenda, nombreServicio, nombreEspecialista, idRegistro, fechaAgenda, horaAgenda, id_Servicio, id_Especialista) => {
        return knex(tableAgendar).insert({
            id_Agendar: idAgenda,
            nombre_Servicio: nombreServicio,
            especialista: nombreEspecialista,
            id_Registro: idRegistro,
            fecha: fechaAgenda,
            hora: horaAgenda,
            id_Servicio : id_Servicio,
            id_Especialista : id_Especialista
            
        });
     };

    return {crearRegistro, crearAgendar, getAgendas, getRegistros, leerRegistro, leerAgendaUsuario};
    
};

module.exports = {
    databaseService
};
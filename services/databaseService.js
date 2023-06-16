
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
    


    const getAgendar = () => {
        return knex(tableAgendar).select();
    };

    const leerRegistro = (mail, contrasena) => {
        return knex(tableRegistro).select().where('mail', mail).where('contrasena', contrasena);
    };

    const crearRegistro = (idRegistro, email, nombre, apellido, contrasena, telefono, nombreMascota, tipoMascota, fechaNacimiento, raza) => {
        console.log(email);
        return knex(tableRegistro).insert({
            id_Registro: idRegistro,
            mail: email,
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
    };

  

   const crearAgendar = (idAgenda, nombreServicio, idRegistro, fecha, hora ) => {
        return knex(tableAgendar).insert({
            id_Agendar: idAgenda,
            nombre_Servicio: nombreServicio,
            id_Registro: idRegistro,
            fecha: fecha,
            hora: hora
            
        });
     };

    return {crearRegistro, crearAgendar, getAgendar, leerRegistro };
    
};


module.exports = {
    databaseService
};
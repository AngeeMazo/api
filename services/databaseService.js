
const databaseService = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host : 'localhost',
            port : 3306,
            user : 'angee2',
            password: 'lorena99.',
            database : 'veterinaria',
         }
    });
      
    const tableRegistro = 'Registro';
    const tableMascota = 'Mascota';
    const tableAgendar = 'Agendar_Hora';
    

    const getMascota = () => {
        return knex(tableMascota).select();
    };

    const getAgendar = () => {
        return knex(tableAgendar).select();
    };

    const leerRegistro = (mail) => {
        return knex(tableRegistro).select().where('mail', mail);
    };

    const crearRegistro = (idRegistro, mail, idMascota, nombre, apellido, contrasena, telefono ) => {
        return knex(tableRegistro).insert({
            id_Registro : idRegistro,
            mail: mail,
            id_mascota: idMascota, 
            nombre: nombre,
            apellido: apellido, 
            contrasena: contrasena,
            telefono: telefono,
            administrador : 0
        });
    };

    const crearMascota = (idMascota, mail, nombre, tipoMascota, fechaNacimiento, raza ) => {
        return knex(tableMascota).insert({
            id_Mascota : idMascota,
            mail: mail,
            nombre: nombre, 
            tipo_Mascota: tipoMascota,
            fecha_Nacimiento: fechaNacimiento, 
            raza : raza
            
        });

        
    };

   const crearAgendar = (idAgendar,nombreServicio, idMascota, fecha ) => {
        return knex(tableAgendar).insert({
            id_Agendar_Hora : idAgendar,
            nombre_Servicio: nombreServicio, 
            id_Mascota: idMascota,
            fecha : fecha
            
        });
     };

    return {crearRegistro, crearMascota, crearAgendar, getAgendar, leerRegistro, getMascota };
    
};


module.exports = {
    databaseService
};

module.exports = function(app, databaseService) {
    app.get('/', (request, response)=>{ //get Leer datos
        response.json({"mensaje":"bien"})
    } );
    
    app.get('/Registro', (request, response) =>{ // Leer datos con Post
        const query = request.query;
        console.log(query)
        databaseService.leerRegistro(query.email, query.contrasena)
        .then(registros =>{
            response.json(registros);
        }).catch(e => response.status(500).json(e));
          
    });

    app.get('/ConsultaAgeda', (request, response) =>{ // Leer datos con Post
        const query = request.query;
        console.log(query)
        databaseService.leerAgendaUsuario(query.idRegistro)
        .then(agenda=>{
            response.json(agenda);
        }).catch(e => response.status(500).json(e));
          
    });
    
    app.post('/Registro', (request, response) =>{ // crear datos con Post
        const nuevoRegistro = request.body;
        console.log(nuevoRegistro);

        databaseService.crearRegistro(
            nuevoRegistro.idRegistro,
            nuevoRegistro.email,
            nuevoRegistro.nombre,
            nuevoRegistro.apellido,
            nuevoRegistro.contrasena,
            nuevoRegistro.telefono,
            nuevoRegistro.nombre_mascota,
            nuevoRegistro.tipo_mascota,
            nuevoRegistro.fecha_nacimiento,
            nuevoRegistro.raza
            )
        .then(()=>{
            response.json({"mensaje": "Registro creado!"});

        }).catch(e => {
            response.status(500).json(e);
        })
    });

    app.post('/Agendar', (request, response) =>{ // crear datos con Post
        const nuevoAgenda = request.body;
        console.log(nuevoAgenda);

        databaseService.crearAgendar(
            nuevoAgenda.idAgendar,
            nuevoAgenda.nombre_Servicio,
            nuevoAgenda.especialista,
            nuevoAgenda.id_Registro,
            nuevoAgenda.fecha,
            nuevoAgenda.hora,
            nuevoAgenda.id_Servicio
        )
        .then(()=>{
            response.json({"mensaje": "Hora creada!"});

        }).catch(e => {
            response.status(500).json(e);
        })
    });

};
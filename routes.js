
module.exports = function(app, databaseService) {

    app.get('/', (request, response)=>{ //get Leer datos
        response.json({"mensaje":"bien"})
    } );
    
    app.get('/Registro', (request, response) =>{ // Leer datos con Post
        const bodyRequest = request.body;
        databaseService.leerRegistro(bodyRequest.mail)
        .then(registros =>{
            response.json(registros);
        }).catch(e => response.status(500).json(e));
          
    });
    
    app.post('/Registro', (request, response) =>{ // crear datos con Post
        const nuevoRegistro = request.body;
        console.log(nuevoRegistro);

        databaseService.crearRegistro(
            nuevoRegistro.idRegistro,
            nuevoRegistro.mail,
            nuevoRegistro.idMascota,
            nuevoRegistro.nombre,
            nuevoRegistro.apellido,
            nuevoRegistro.contrasena,
            nuevoRegistro.telefono
        )
        
        .then(()=>{
            response.json({"mensaje": "Registro creado!"});

        }).catch(e => {
            response.status(500).json(e);
        })
    });

    app.post('/Mascota', (request, response) =>{ // crear datos con Post
        const nuevoMascota = request.body;
        console.log(nuevoMascota);

        databaseService.crearMascota(
            nuevoMascota.idMascota,
            nuevoMascota.mail,
            nuevoMascota.nombre,
            nuevoMascota.tipoMascota,
            nuevoMascota.fechaNacimiento,
            nuevoMascota.raza    
        )
        
        .then(()=>{
            response.json({"mensaje": "Mascota creada!"});

        }).catch(e => {
            response.status(500).json(e);
        })
    });

app.post('/enviar-correo', (req, res) => {
    const nombre = req.body.nombre;
    const email = req.body.email;
    const mensaje = req.body.mensaje;

    // Configurar el transporte del correo electrónico
    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'angeelorena99@gmail.com',
            pass: 'Lorena99.'
        }
    });

    // Configurar el contenido del correo electrónico
    const mailOptions = {
        from: email,
        to: 'angeelorena99@gmail.com',
        subject: 'Nuevo formulario de contacto',
        text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`
    };

    // Enviar el correo electrónico
    transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
            console.log(error);
            res.sendStatus(500);
        } else {
            console.log('Correo electrónico enviado: ' + info.response);
            res.sendStatus(200);
        }
    });
});
};
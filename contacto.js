/*const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.json());



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

app.listen(3000, () => {
    console.log('Servidor iniciado en el puerto 3000');
});
*/

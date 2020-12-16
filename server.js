const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const socketio = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));
/* C: user/Enderson Vizcaino/Desktop/ChatTutorial */
/* C: user/Enderson Vizcaino/Documents/ChatTutorial */

socketio.on('connection', function(socket){
    console.log('Nuevo usuario conectado');

    /* Escuchando evento enviado por el cliente */
    socket.on('nuevo mensaje', data =>{
        /* console.log("Informacion enviada por el cliente:",data); */
        socketio.emit('nuevo mensaje servidor', data);
    });

});

var port = process.env.PORT || 8080;
http.listen(port, ()=>{
    console.log('Servidor escuchando en el puerto 8080');
});
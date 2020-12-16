var socket = io();
const env = document.getElementById('enviar');

env.addEventListener('click', ()=>{
    let mensaje = document.getElementById('mensaje');
    let name = document.getElementById('nombre').value;

    var newMss = {
        mensaje: mensaje.value,
        name
    }

    if(mensaje.value != '' ){
        if(name != ''){
            socket.emit('nuevo mensaje', newMss);
            mensaje.value = '';
        }else{
            alert('Quien eres?');
        }
                
    }else{
        alert(' Si quieres enviar un mensaje no deberias escribir algo? :c');
    }
});

socket.on('nuevo mensaje servidor', data =>{
    let mensajes = document.getElementById('nuevo_mensaje');
    let html = '<strong>'+data.name+': </strong>'+data.mensaje;
    let div = document.createElement("div");
    div.classList.add("card-panel");
    div.classList.add("mensaje");
    div.innerHTML =  html;
    mensajes.appendChild(div);
});
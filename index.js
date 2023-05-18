let bienvenida= alert("¡Bienvenido al Box de crossfit Warriors, el mejor lugar para entregar el cuerpo y la mente de un guerrero!");

let inicio= prompt("Deseas iniciar el camino del guerro o dejar pasar la oportunidad. Escribe 'iniciar' para continuar o 'salir' para abandonar.");

if(inicio==="iniciar"){
    function InicializarPrograma(){
    

        let nombreUsuario= prompt("¿cual es tu nombre?");
        let apellidoUsuario= prompt("¿cual es tu apellido?");
        alert(`Hola ${nombreUsuario} ${apellidoUsuario} Aquí inicia tu transformación en un guerrero!`);
    
        let seleccionUsuario =prompt("¿Qué te gustaria hacer: registrarte para 2 clases gratuitas o registrarte con 50% de descuento? Ingresa la palabra 'gratis' para las clases gratuitas o la palabra 'descuento' para registrarte con 50% menos.");
    
        if(seleccionUsuario ==="gratis"){
            alert("Felicidades, ya cuentas con 2 clases gratis para empezar tu entrenamiento");
        }else if(seleccionUsuario==="descuento"){
            alert("¡Felicidades! Ya obtuviste 50% de descuento en tu matricula");
        }else{
            alert("¡Debes realizar una elección para continuar!");
        }
    }
    
    InicializarPrograma();

    function concurso() {
        var respuestaCliente = prompt("En agradecimiento por tu interés en entrenar con nosotros, te invitamos a participar en un concurso en el que ganarás un combo de vestimenta deportiva y suplementos alimenticios. ¿Te gustaría participar? Responde si o no.");
    
        while (respuestaCliente !== "si" && respuestaCliente !== "no") {
            respuestaCliente = prompt("Respuesta inválida. Por favor, responde si o no.");
        }
    
        if (respuestaCliente === "si") {
            var respuestaConcurso = parseInt(prompt("¿Cuántos discos de 5 kilos se necesitan para armar una pesa de 60 kilos?"));
            switch(respuestaConcurso){
                case 8:
                    alert("Respuesta incorecta, gracias por participar. Suerte para los próximos concursos que tendremos!");
                    break;
                case 10:
                    alert("Respuesta incorecta, gracias por participar. Suerte para los próximos concursos que tendremos!");
                    break;
                case 12:
                    alert("Felicidades! Has ganado el premio prometido! Ahora cuentas con todos los implementos para iniciar tu entrenamiento!");
                    break;
                case 14:
                        alert("Respuesta incorecta, gracias por participar. Suerte para los próximos concursos que tendremos!");
                        break;        
            }
    
            // Procesamiento adicional basado en el valor de respuestaPeso
        } else {
            alert("Gracias por visitarnos. Te esperamos para comenzar tu entrenamiento.");
        }
    }

    concurso();
    

    /*function concurso(){
        var respuestaCliente= prompt("En agradecimiento por tu interés en entrenar con nosotros, te invitamos participar en un concurso en el que ganarás un combo de vestimenta deportiva y suplementos alimenticios. ¿Te gustaría participar? Responde si o no.");
        if(respuestaCliente==="si"){
            parseint(prompt("¿Cuántos discos de 5 kilos se necesitan para armar una pesa de 60 Kilos?"));
        }else{
            alert("Gracias por visitarnos! Te esperamos para comenzar tu entremaniento.")
        }
    }

concurso();*/


}else if(inicio==="salir"){
    alert("Regresa pronto, te estaremos esperando para dar inicio a tu transformación");
}else{
    alert("Debes realizar una elección");
}



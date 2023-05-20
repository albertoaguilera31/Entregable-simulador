let bienvenida= alert("¡Bienvenido al Box de crossfit Warriors! El mejor lugar para entrenar el cuerpo y la mente de un guerrero.");

let inicio= prompt("¿Deseas iniciar el camino para convertirte en un guerrero o dejar pasar la oportunidad para luego? Escribe 'iniciar' para continuar o 'salir' para abandonar.");

while (inicio !== "iniciar" && inicio !== "salir") {
    inicio = prompt("Respuesta inválida. Por favor, responde iniciar o salir.");
}

if(inicio==="iniciar"){
    function InicializarRegistro(){
    
        let nombreUsuario= prompt("¿cual es tu nombre?");

        let apellidoUsuario= prompt("¿cual es tu apellido?");

        alert(`¡Hola ${nombreUsuario} ${apellidoUsuario}! Aquí inicia tu transformación en un guerrero!`);
    
        let seleccionUsuario =prompt("¿Qué te gustaria hacer: registrarte para 2 clases gratuitas o registrarte con 50% de descuento durante los primeros 6 meses? Ingresa la palabra 'gratis' para las clases gratuitas o la palabra 'descuento' para registrarte con 50% menos.");
    
        while (seleccionUsuario !== "gratis" && seleccionUsuario !== "descuento") {
            seleccionUsuario = prompt("Respuesta inválida. Por favor, responde gratis o descuento.");
        }

        if(seleccionUsuario ==="gratis"){
            alert("¡Felicidades, ya cuentas con 2 clases gratis para empezar tu entrenamiento con nosotros!");
        }else{
            alert("¡Felicidades! Ya obtuviste 50% de descuento en tu mensualidad durante 6 meses.");
        }
    }
    
    InicializarRegistro();

    function concursoOpcional() {
        let respuestaCliente = prompt("En agradecimiento por tu interés en entrenar con nosotros, te invitamos a participar en un concurso en el que ganarás un combo de vestimenta deportiva y suplementos alimenticios. ¿Te gustaría participar? Responde si o no.");
    
        while (respuestaCliente !== "si" && respuestaCliente !== "no") {
            respuestaCliente = prompt("Respuesta inválida. Por favor, responde si o no.");
        }
    
        if (respuestaCliente === "si") {
            let respuestaConcurso = parseInt(prompt("¿Cuántos discos de 5 kilos se necesitan para armar una pesa de 60 kilos? Elige cuidadosamente, solo tienes una oportunidad. Tienes 4 opciones: \n a.-8 \nb.-10 \nc.-12 \nd.-14"));
            switch(respuestaConcurso){
                case 8:
                    alert("Respuesta incorrecta, gracias por participar. ¡Suerte para los próximos concursos que tendremos!");
                    break;
                case 10:
                    alert("Respuesta incorrecta, gracias por participar. ¡Suerte para los próximos concursos que tendremos!");
                    break;
                case 12:
                    alert("¡Felicidades! Has ganado tu combo de vestimenta y suplementos deportivos. ¡Ahora cuentas con todos los implementos para iniciar tu entrenamiento!");
                    break;
                case 14:
                    alert("Respuesta incorrecta, gracias por participar. ¡Suerte para los próximos concursos que tendremos!");
                    break;
                    default:
                    alert("Lo sentimos, elegiste una opción fuera de las opciones disponibles, has perdido tu oportunidad.")
            }
    
        } else {
            alert("Gracias por visitarnos. Te esperamos para comenzar tu entrenamiento.");
        }
    }

    concursoOpcional();

}else{
    alert("¡Regresa pronto! Te estaremos esperando para dar inicio a tu transformación.");
}



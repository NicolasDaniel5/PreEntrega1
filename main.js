function entrarLugar(edad){
    if(edad >= 21){
        alert("Puede pasar");
    }else if(edad >=16){
        let respuesta = prompt("Tenes autorizacion de tus padres");
        if(respuesta === "Si"){
            alert("Puede pasar");
        }else if(respuesta === "No"){
            alert("No puede pasar");
        }else {alert("Texto no valido")}
    }else{alert("No puede pasar")}
}
function temporizador(seg){
    for(seg == 0; seg--;){
        alert(`${seg}`);
    }
}

let edad = parseInt(prompt("Ingrese su edad:"));
entrarLugar(edad);

let segundos = parseInt(prompt("Cuantos segundos queres que dure la cuenta regresiva?"));
temporizador(segundos);


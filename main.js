let edad = parseInt(prompt("Ingrese su edad:"));

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


let segundos = parseInt(prompt("Cuantos segundos queres que dure la cuenta regresiva?"));

for(segundos == 0; segundos--;){
    alert(`${segundos}`);
}

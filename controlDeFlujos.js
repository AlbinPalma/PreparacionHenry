function viajar(destino){
    if(destino == "Brazil"){
        console.log("Gire a la IZQUIERDA")
    } else if (destino == "Argentina"){
        console.log("Gire a la DERECHA")
    }else {
        console.log("Nos PERDIMOS")
    }
}
//control de flujo
viajar('Argentina');

function puedeManejar(edad){
    if(edad >= 18){
        console.log(true);
    }else{
    console.log(false);
    }
}

puedeManejar(2);
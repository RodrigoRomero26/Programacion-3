function esPar (num){
    if (num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

function convertirCelsiusAFahrenheit (Celsius){
    console.log(Celsius+ "C son equivalentes a "+(Celsius*1.18+21)+" F");
}
export{
    esPar,
    convertirCelsiusAFahrenheit
}
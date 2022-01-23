function horario(){
    let tempo = new Date;
    let horas = tempo.getHours();
    let minutos = tempo.getMinutes();
    let segundos = tempo.getSeconds();     
  
    
    if(horas < 10){
        horas =  '0' + horas;
    } 

    if(minutos < 10){
        minutos =  '0' + minutos;
    } 
    if(segundos < 10){
        segundos =  '0' + segundos;
    } 

    let clock = document.getElementById('relogio');
    clock.value = `${horas}:${minutos}:${segundos}`;
    setTimeout('horario()',1000);
}

horario();


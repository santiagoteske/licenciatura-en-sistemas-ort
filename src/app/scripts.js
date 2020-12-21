var contador=0;

function cambiarColor(identificador){    
    contador++;
    if(contador == 1){
        document.getElementById(identificador).classList.add('amarillo');
    }
    if (contador == 2){
        document.getElementById(identificador).classList.remove('amarillo');
        document.getElementById(identificador).classList.add('verde');
    }
    if (contador == 3){
        document.getElementById(identificador).classList.remove('verde');
        contador = 0;
    }
    titulo();
    final();
    guardar();
}

function titulo(){
    let verde= false;
    for (let i = 1; i <= 27; i++) { //Chequea que este la primer parte completa para pintar el titulo
        if(document.getElementById(''+i).classList.contains("verde") ){
            verde=true; 
        }else{
            verde=false;
        }        
    }
    if (verde){
        document.getElementById('intermedio').classList.add('verde');
    }
}

function final(){
    let verde= false;
    for (let i = 28; i <=37 ; i++) {
        if(document.getElementById(''+i).classList.contains("verde") ){
            verde=true; 
        }else{
            verde=false;
        }        
    }
    if (verde){
        document.getElementById('final').classList.add('verde');
    }
}

function guardar(){      
    for (let id = 1; id <= 37; id++) {
    localStorage.setItem('Color de'+id , JSON.stringify(document.getElementById(''+id).classList));
    }
}

function cargar() {
    let valores = new Array();    
    for (let id = 1; id <= 37; id++) {      
        valores [id-1] = JSON.parse(localStorage.getItem('Color de'+ id), document.getElementById(''+id).classList);
        if (valores[id-1]["1"]!= 'undefined'){
            document.getElementById(''+id).classList.add(valores[id-1]["1"]);            
        }else{
            document.getElementById(''+id).classList.add(valores[id-1]["2"]);
        }              
    }
    titulo(); 
    final();        
}


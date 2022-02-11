


function cambiarColor(identificador) {    
    
    let objeto = document.getElementById(''+identificador).classList;    
    let color = objeto.item(1); // Le paso por string el color actual del boton
    switch (color) {
        case "rojo":
            objeto.add('azul');
            objeto.remove("rojo");
            verificar();                        
            break;
        case "azul":
            objeto.add('amarillo');
            objeto.remove("azul");
            verificar();           
            break;
        case "amarillo":
            objeto.add('verde');
            objeto.remove("amarillo");
            verificar();                     
            break;
        case "verde":
            objeto.add('rojo');
            objeto.remove("verde");
            verificar();
            break;        
        default: //Significa que esta en undefined.
            objeto.add('azul');
            objeto.remove("undefined");
            verificar();
            break;
    }
    titulo();
    final();    
    guardar();              
}



function titulo(){
    let verde= true;
    for (let i = 1; i <= 22 && verde; i++) { //Chequea que este la primer parte completa para pintar el titulo
        if(document.getElementById(''+i).classList.contains("verde") ){
            verde=true; 
        }else{
            verde=false;
        }        
    }
    if (verde){
        document.getElementById('intermedio').classList.add('verde');        
    }else{        
        document.getElementById('intermedio').classList.add('rojo');
    } 
}

function final(){
    let verde= true;    
    for (let i = 1; i <=37 && verde; i++) {
        let objeto = document.getElementById(''+i).classList;
        if(objeto.contains("verde") ){
            verde=true; 
        }else verde=false;
            
    }
    if (verde){
        document.getElementById('final').classList.add('verde');       
    }else {        
        document.getElementById('final').classList.add("rojo");
    }
}

function guardar(){      
    for (let i = 1; i <= 37; i++) {
    let elemento = document.getElementById(''+i).classList;
        localStorage.setItem('Color de'+i , JSON.stringify(document.getElementById(''+i).classList));
    //console.log("Se guardo"+"Color de"+ i + ""+ elemento);
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

    cantidadRestantes();
    cantidadTotales();
    cantidadParciales();
    
    titulo(); 
    final();        
}


function cantidadParciales(){    
    let cantParciales =0 ;
    for (let id = 1; id <= 37; id++) {      
        if(document.getElementById(''+id).classList.contains("amarillo") ){
            cantParciales++;            
        }   
    }
    document.getElementById('credParciales').innerHTML = cantParciales;    
    return cantParciales;   
}

function cantidadTotales(){
    let cantTotales =0;
    for (let id = 1; id <=37 ; id++) {
        if(document.getElementById(''+id).classList.contains("verde") ){
            cantTotales++;           
        }              
    }
    document.getElementById('credTotales').innerHTML = cantTotales;
    return cantTotales;
}

function cantidadRestantes(){        
    let cantRestante =0;
    for (let id = 1; id <=37 ; id++) {        
        let objeto = document.getElementById(''+id).classList;
        if(objeto.contains("rojo") ||  objeto.contains("undefined") || objeto.contains("azul")){
            cantRestante++;    //Si la materia esta roja, undefined o azul lo toma como restante.                 
        }                      
    }
    document.getElementById('credRestantes').innerHTML = cantRestante;
    return cantRestante;
}

function verificar(){    
    cantidadRestantes();
    cantidadParciales();
    cantidadTotales();
}
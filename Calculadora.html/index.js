function limpiar (){
    document.getElementById('miFormulario').reset();

}

function sumar (){
    var x = parseFloat(document.getElementById('valor1').value);
    var y = parseFloat(document.getElementById('valor2').value);
        
    document.getElementById('el-resultado').innerHTML= x+y;
    
}

function restar (){
    var x = parseFloat(document.getElementById('valor1').value);
    var y = parseFloat(document.getElementById('valor2').value);
        
    document.getElementById('el-resultado').innerHTML= x-y;
    
}

function multiplicar (){
    var x = parseFloat(document.getElementById('valor1').value);
    var y = parseFloat(document.getElementById('valor2').value);
        
    document.getElementById('el-resultado').innerHTML= x*y;
    
}

function dividir (){
    var x = parseFloat(document.getElementById('valor1').value);
    var y = parseFloat(document.getElementById('valor2').value);
        
    document.getElementById('el-resultado').innerHTML= x/y;
    
}
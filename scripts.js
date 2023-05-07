function zero(){
    return document.getElementById('tela').value +="0"    
}
function um(){
    return document.getElementById('tela').value +="1"    
}
function dois(){
    return document.getElementById('tela').value +="2"    
}
function tres(){
    return document.getElementById('tela').value +="3"    
}
function quatro(){
    return document.getElementById('tela').value +="4"    
}
function cinco(){
    return document.getElementById('tela').value +="5"    
}
function seis(){
    return document.getElementById('tela').value +="6"    
}
function sete(){
    return document.getElementById('tela').value +="7"    
}
function oito(){
    return document.getElementById('tela').value +="8"    
}
function nove(){
    return document.getElementById('tela').value +="9"    
}
function ponto(){
    return document.getElementById('tela').value +="."    
}
function soma(){
    return document.getElementById('tela').value +="+"    
}
function subtracao(){
    return document.getElementById('tela').value +="-"    
}
function multiplicacao(){
    return document.getElementById('tela').value +="*"    
}
function divisao(){
    return document.getElementById('tela').value +="/"    
}
function resposta(){
    let resp = eval(document.getElementById('tela').value) 
    return document.getElementById('tela').value = resp.toFixed(2)    
}
function limparVisor(){
    return document.getElementById('tela').value =""    
}





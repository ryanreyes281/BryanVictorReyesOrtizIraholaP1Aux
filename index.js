// 1.-
function uno(){
let edad = prompt("Introduce tu edad");
document.write("1.-");

if(edad >= 18) {
		document.write("Puedes conducir");
	}
else {
    document.write("aún no Puedes conducir");
	}
}
//2.-
function dos(){
var suma=0;
do{
    var numero= prompt("introduzca un numero");
    if(Number(numero)==numero){
        numero=Number(numero);
        suma=suma+numero;
    }
    else{
        if (numero != undefined) {
            alert(numero + " No es un numero");
        }
    }
}
while(numero!=undefined);

    document.write(suma);
}
//3.-
function tres(){
    let nameone=prompt("inserte el Nombre 1");
    let nametwo=prompt("inserte el Nombre 2");
    let namethree=prompt("inserte el Nombre 3");
    let ageone=prompt("inserte la edad 1");
    let agetwo=prompt("inserte la edad 2");
    let agethree=prompt("inserte la edad 3");
    let max=Math.max(ageone,agetwo,agethree);
    if(max==ageone){
        document.write("el mayor es"+" "+nameone);
    } 
    if(max==agetwo){
        document.write("el mayor es"+" "+nametwo);
    }
    if(max==agethree){
        document.write("el mayor es"+" "+namethree);
    }
}
//4.-
function cuatro(){
    let one=0;
    let two=0;
    let three=0;
    let aux=0;
    for (let i=1;i<=3;i++){
    aux=Math.floor((Math.random()*99)+1);
    if(aux!=one && aux!=two && aux!=three){   
        if(i==1){
            one=aux;
            document.write(one+",");
        }
        if(i==2){
            two=aux;
            document.write(two+",");
        }
        if(i==3){
            three=aux;
            document.write(three+",");
        }
        }
    }
}
//5.-
function cinco(){
    let phrase=prompt("ingrese el texto");
    let cont=0;
    for (let i=0;i<phrase.length;i++){
        if(phrase[i].charCodeAt(0)==65 || phrase[i].charCodeAt(0)==97){
            cont++;
        }
        if(phrase[i].charCodeAt(0)==69 || phrase[i].charCodeAt(0)==101){
            cont++;
        }
        if(phrase[i].charCodeAt(0)==73 || phrase[i].charCodeAt(0)==105){
            cont++;
        }
        if(phrase[i].charCodeAt(0)==79 || phrase[i].charCodeAt(0)==111){
            cont++;
        }
        if(phrase[i].charCodeAt(0)==85 || phrase[i].charCodeAt(0)==117){
            cont++;
        }
    }
    document.write("el numero de vocales es:"+cont);
}
//6.- 
function seis(){
    let string = prompt("Introduce un Texto que contenga paréntesis:");
    var tamaño = string.length;
    var caracter;
    var salida = "";
    var cp = false;
        
	for (let i = 0; i < tamaño; i++) {
		caracter = string.charAt(i);    
		if (caracter == ")") {
            cp = false;
        }
        if (cp) {
            salida = salida + caracter;
        }
        if (caracter == "(") {
                cp = true;
        }
    }
    document.write(salida);
}
//7.-
function siete(){
    let string=prompt("ingrese el texto");
    let reverse="";
    for (let i=string.length-1;i>=0;i--){
        reverse=reverse+string[i];
    }
    document.write(reverse);
}
//8.-
function ocho(){
let number=prompt("ingrese un numero entre el 1 y 100");
let nout;
let a=0;
let b=1;
for(let i=0;i<number;i++){
    nout=a+b;
    document.write(nout+"  ");
    b=a;
    a=nout;
}   
}
//9.- 
function nueve(){
 let sets=0;
 let win=0;
 let lose=0;
 do{
     let  move="";
     move=prompt('Elija "piedra","papel" o "tijera');
     let rand=Math.floor((Math.random()*9)+1);
     let chose="";
     if(rand<=3){
         chose="piedra";
     }else if(rand<=6){
         chose="papel";
     }
     else{
         chose="tijera";
     }
     if((move=="piedra")&&(chose=="piedra")){
         windows.alert(move+"vs"+chose+"Empate");
     } 
     if((move=="piedra")&&(chose=="papel")){
        windows.alert(move+"vs"+chose+"perdiste");
        lose++;
    }
     if((move=="piedra")&&(chose=="tijera")){
        windows.alert(move+"vs"+chose+"ganaste");
        win++;
    }
     if((move=="papel")&&(chose=="papel")){
        windows.alert(move+"vs"+chose+"Empate");
    }
    if((move=="papel")&&(chose=="tijera")){
        windows.alert(move+"vs"+chose+"perdiste");
        lose++;
    }
     if((move=="papel")&&(chose=="piedra")){
        windows.alert(move+"vs"+chose+"ganaste");
        win++;
    }
    if((move=="tijera")&&(chose=="tijera")){
        windows.alert(move+"vs"+chose+"Empate");
    }
    if((move=="tijera")&&(chose=="piedra")){
        windows.alert(move+"vs"+chose+"perdiste");
        lose++;
    }
    if((move=="tijera")&&(chose=="papel")){
        windows.alert(move+"vs"+chose+"ganaste");
        win++;
    }
    sets++;
     
 }
 while(move!=undefined);
 document.write("partidas jugadas"+sets+"<br>");
 document.write("partidas ganadas"+win+"<br>");
 document.write("partidas perdidas"+lose+"<br>");
 document.write("partidas empatadas"+win-lose);
}

//10.-
function diez(){
    function appiva(precio, iva){
        if(iva==undefined){
            iva=21;
        }
        iva=iva/100;
        let miva=(precio+(precio*iva));
        return miva;
    }
    let precio=Number(prompt("ingrese el precio"));
    let iva=Number(prompt("ingrese el IVA"));
    let result=0;
    if(iva!=0){
        result=appiva(precio, iva);
        document.write("el precio más el iva es: "+result);
    }else{
        result=appiva(precio);
        document.write("el precio sin el iva es: "+result);
    }
}
//11.-

//12.-
function doce(){
    reloj();
    function reloj() {

        var hoy=new Date(); var h=hoy.getHours();
        var m=hoy.getMinutes(); 
        var s=hoy.getSeconds();
    
        m = actualizarHora(m);   
        s = actualizarHora(s);
        var t = setTimeout(function(){reloj()},1000);
        document.write(h+":"+m+":"+s+"<br>");
    }
    
    
    function actualizarHora(i) {
    
        if (i<10) {i = "0" + i};  
    
        return i;
    
    }
    
}
//13.-
function trece(){
    let fecha=prompt("ingrese fecha");
    let validar_fecha=/^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(0[1-9]|1[1-9]|2[1-9])$/;
    if(validar_fecha.test(fecha)){}
    function años(fecha){
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
        
    }
}

//14.-
function catorce(){
    let palabra = prompt ("introduzca el texto");
    function count(palabra){
        const count=palabra.match(/[aeiou]/gi).length;
        const count2=palabra.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
        document.write("vocales"+count+"<br>");
        document.write("consonantes"+count2);
    }
    count(palabra)
        
}
//15.-
function quince(){
let nombre=prompt("ingrese el nombre");
function isVallidName(nombre) {
    var found = nombre.search(/^[a-zA-Z]+[\s|-]?[a-zA-Z]+[\s|-]?[a-zA-Z]+$/);
    if(found > -1) {
        document.write("valido");
    }
    else {
        document.write("invalido");
    }
}
    isVallidName(nombre);
}
//16.-
function dieciseis(){
    let arreglo = ['5', '25', '10', 's', '5', 'a', 'a'];
    function ad(arreglo){
    let result = arreglo.filter((item,index)=>{
      return arreglo.indexOf(item) === index;
    })
    document.write(result);
    }
    ad(arreglo);
}
//17.-
function diecisiete(){
    
}
//18.-
function dieciocho(){
    const carta='bici coche balón _playstation bici coche peluche';
    function listGifts(carta) {
        const arrayGifts = carta.split(' ')
        const count = {}
        
        const filterUndesired = arrayGifts
          .filter(gift => /^(?!_)/.test(gift))
          .filter(gift => gift)
        
        for (const num of filterUndesired) {
          count[num] = count[num] ? count[num] + 1 : 1
        }
        
        return count
      }
     let r=listGifts(carta);
     console.log(r);

}



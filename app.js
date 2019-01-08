"use strict";
/*function getNombre(){
    return "Fernando";
}
let nombre:string = "Juan";
let apellido:string = "Perez";
let edad:number = 32;
// let texto = "Hola " + nombre + " " + apellido + "(" + edad + ")";

let texto = `Hola,
${nombre}
${apellido}
(${edad})`;

let texto2:string = `${1+2}`;

let texto3:string = `${getNombre()}`;

console.log(texto);
console.log(texto2);
console.log(texto3);
*/
/*
function activar(quien:string, objeto:string = "batiseñal", momento?:string){
    let mensaje:string;
    if(momento){
        mensaje = `${quien} activó la ${objeto} en la ${momento}`;
    }else{
        mensaje = `${quien} activó la ${objeto}`;
    }
    console.log(mensaje);
}

activar("Gordon");
*/
/*
let miFuncion = function( a ){
    return a;
}

let miFuncionF = a => a;

console.log(miFuncion("Normal"));
console.log(miFuncionF("Flecha"));

let miFuncion2 = function(a:number,b:number){
    return a + b;
}

let miFuncion2F = (a:number, b:number) => a + b;

let miFuncion3 = function(nombre:string){
    nombre = nombre.toUpperCase();
    return nombre;
}

let miFuncion3F = (nombre:string) => {
    nombre = nombre.toUpperCase();
    return nombre;
}
*/
var hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + " smash!"); }, 1500);
    }
};
hulk.smash();
var avenger = {
    nombre: "Steve",
    clave: "Capitan America",
    poder: "Droga"
};
var nombre = avenger.nombre, clave = avenger.clave, poder = avenger.poder;
//let nombre = avenger.nombre;
//let clave = avenger.clave;
//let poder = avenger.poder;
console.log(nombre, clave, poder);
var avengers = ["Thor", "Steve", "Tony"];
var thor = avengers[0], capi = avengers[1], ironman = avengers[2];
//let [,, ironman] = avengers;
console.log(thor, capi, ironman);

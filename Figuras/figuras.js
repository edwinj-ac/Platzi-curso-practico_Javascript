//console.group("Cuadrado");
/*const  ladoCuadrado = 5;
console.log("Lados del cuadrado miden: " + ladoCuadrado + " cm");*/

function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado**2;
}

//const perimetroCuadrado = ladoCuadrado * 4;
//console.log("El perímetro del cuadrado es: " + perimetroCuadrado+ " cm");

//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");

//console.groupEnd();

//console.group("Triángulo");
/*const  ladoTriangulo_1 = 6;
const  ladoTriangulo_2 = 6;
const  baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log(
    "Lado del triángulo 1: " + ladoTriangulo_1 + " cm, \n" 
    + "Lado del triángulo 2: " + ladoTriangulo_2 + " cm, \n" 
    + "Base del triángulo: " + baseTriangulo + " cm");
console.log("Altura del triángulo: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo_1+ladoTriangulo_2+baseTriangulo;
console.log("El perímetro del triángulo es: " + perimetroTriangulo+ " cm");

const areaTriangulo = (baseTriangulo*alturaTriangulo)/2;
console.log("El área del triángulo es: " + areaTriangulo + " cm^2");*/

function perimetroTriangulo(lado1, lado2, base){
    const perimetro = lado1 + lado2 + base;
    return perimetro
}

function areaTriangulo(base, altura){
    const area = (base * altura)/2;
    return area
}
//console.groupEnd();

//console.group("Circulo");
const PI = Math.PI;

/*const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;


const perimetroCirculo = diametroCirculo * PI;
const areaCirculo = PI * (radioCirculo ** 2);

console.log("Radio del círculo es: " + radioCirculo);
console.log("Diámetro del círculo es: " + diametroCirculo);
console.log("PI: " + PI);
console.log("El perimetro del circulo es: " + perimetroCirculo);
console.log("El área del circulo es: "+areaCirculo);*/

function diametroCirculo(radio){
    const diametro = radio * 2;
    return diametro;
}
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio) * PI;
    return diametro;
}

function areaCirculo(radio){
    const area = (radio**2) * PI;
    return area;
}
//console.groupEnd();

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}
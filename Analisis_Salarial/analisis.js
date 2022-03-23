const salariosMex = mexico.map(
    function(persona){
        return persona.salary;
    }
);

const salariosMexSorted = salariosMex.sort(
    function(salaryA, salaryB){
        return salaryA - salaryB;
    }
);

function esPar(numero){
    return (numero % 2 === 0);
}
function calcularMediaAritmetica(lista) {
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;
    return promedioLista;
  }

function calcularMedianaOrdenada(lista){
    const listOrdenada = lista.sort(function(a,b){
        return a-b;
    });
    console.log("Lista ordenada: " + listOrdenada);
    const mitadLista = parseInt(listOrdenada.length/2);

    if (esPar(listOrdenada.length)) {
        const elemento1 = listOrdenada[mitadLista - 1];
        const elemento2 = listOrdenada[mitadLista];

        const promedioElemento1y2 = calcularMediaAritmetica([
          elemento1,
          elemento2,
        ]);
        
        return mediana = promedioElemento1y2;
      } else {
        return mediana = listOrdenada[mitadLista];
      }
}

function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if(esPar(lista.length)){
        const personaMitad1 = lista[mitad-1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMedianaOrdenada([personaMitad1, personaMitad2]);
        return mediana;

    }else{
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}
const spliceStart = (salariosMexSorted.length * 90)/100;
const spliceCount = salariosMex.length - spliceStart;

const salariosMExTop10 = salariosMexSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10MEx = medianaSalarios(salariosMExTop10);


console.log(
    medianaSalarios(salariosMex),
    " Top10: " + medianaTop10MEx
);
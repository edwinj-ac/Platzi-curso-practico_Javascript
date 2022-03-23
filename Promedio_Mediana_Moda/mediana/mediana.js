const lista1= [
    200,
    100,
    500,
    100000,
];

const mitadLista1 = parseInt(lista1.length/2);

function esPar(numerito){
    if(numerito%2 === 0){
        return true;
    }else{
        return false;
    }
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

let mediana;


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
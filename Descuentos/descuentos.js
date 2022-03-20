/*const precioOriginal = 120;
const descuento = 18;

const porcentajePrecioConDescuento = 100 - descuento;
const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;

console.log({
    precioOriginal, 
    descuento, 
    porcentajePrecioConDescuento,
    precioConDescuento,
});*/

const coupons = [
    "JuanDC_es_Batman",
    "pero_no_le_digas_a_nadie",
    "es_un_secreto",
];

const coupons_obj = [
    {
        name: "JuanDC_es_Batman",
        discount: 15,
    },
    {
        name: "pero_no_le_digas_a_nadie",
        discount: 30,
    },
    {
        name: "es_un_secreto",
        discount: 25,
    },
];

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
    return precioConDescuento;
}

function onClickBtnPriceDiscount(){
    const inputPrice = document.getElementById("InputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("InputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;
    if (!coupons.includes(couponValue)) {
        alert("El cupón " + couponValue + "no es válido");
    }

    switch(couponValue) {
        case coupons[0]: // "JuanDC_es_Batman"
          descuento = 15;
        break;
        case coupons[1]: // "pero_no_le_digas_a_nadie"
          descuento = 30;
        break;
        case coupons[2]: // "es_un_secreto"
          descuento = 25;
        break;
        default:
            descuento = 0;
            break;
      }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, descuento);
    const resultP = document.getElementById("PriceResponse");
    resultP.innerText = "Precio con descuento: $" + precioConDescuento;
    
}


const productoIva = (precio) => {
    const precioConIva = precio + (precio * 0.19);
    return precioConIva;
}

console.log(productoIva(1000));
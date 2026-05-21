// Ejercicio 2: Operaciones matemáticas
const numero1 = 10;
const numero2 = 3;

// Operaciones
const suma = numero1 + numero2;
const resta = numero1 - numero2;
const multiplicacion = numero1 * numero2;
const division = numero1 / numero2;
const modulo = numero1 % numero2; // Resto de la división

// Mostrar resultados
console.log(`${numero1} + ${numero2} = ${suma}`);
console.log(`${numero1} - ${numero2} = ${resta}`);
console.log(`${numero1} * ${numero2} = ${multiplicacion}`);
console.log(`${numero1} / ${numero2} = ${division}`);
console.log(`${numero1} % ${numero2} = ${modulo}`);

// Desafío: calcula el precio final con IVA
const precioProducto = 1000; // En pesos chilenos
const iva = 0.19; // 19% de IVA

const precioConIVA = precioProducto * (1 + iva);
console.log(`Precio original: $${precioProducto}`);
console.log(`Precio con IVA (19%): $${precioConIVA}`);
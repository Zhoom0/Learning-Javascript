const edad = 18;

// if/else básico
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

// Múltiples condiciones
const nota = 85;

if (nota >= 90) {
    console.log("Calificación: Excelente");
} else if (nota >= 70) {
    console.log("Calificación: Bueno");
} else if (nota >= 50) {
    console.log("Calificación: Suficiente");
} else {
    console.log("Calificación: Reprobado");
}

// Operador ternario (forma corta)
const tienePermiso = edad >= 16 ? "Puedes conducir" : "No puedes conducir";
console.log(tienePermiso);
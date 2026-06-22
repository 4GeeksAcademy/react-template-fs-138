// YO PRODUZCO EL ERROR (LANZO EL THROW)

function dividir(a, b) {
    try{

        // Código que PUEDE fallar
        console.log("Intentando dividir...");

        if(b===0){
            throw new Error ("No se puede dividir entre cero")
        }

        
        const resultado = a / b;
        console.log("Resultado:", resultado);
        return resultado;
    }catch(error){

        console.log("Ocurrio un error:",error.message )
        return null
    }finally{
           console.log("Operación finalizada");
    }
  
}

dividir(10, 2);  // Caso exitoso
console.log("---");
dividir(10, 0);  // Caso con error


// EL CODIGO ROMPE SE LANZA UN ERROR SOLO.
function procesarDatos(datos) {
    try{

        console.log("1. Empezando a procesar...");
        
        const total = datos.length;  // ❌ Si datos es null/undefined, ROMPE aquí
        
        console.log("2. Total de elementos:", total);
        console.log("3. Proceso terminado");
    }catch(error){
            console.log("⚠️ Hubo un problema, pero seguimos:", error.message);
    }
}
    


    console.log("Inicio del programa");
    procesarDatos(null);       
    console.log("Fin del programa"); 
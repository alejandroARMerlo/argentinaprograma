let num1=8,num2=3,num3=3,num4=7, sumNum1Num2, restNum4Num3,resultadoFinal;

//b. Suma las dos primeras variables y guarda el resultado en otra variable.
sumNum1Num2= num1 + num2;

//c. Resta la cuarta variable de la tercera y almacena el resultado en otra variable.
restNum4Num3= num4- num3;

//d. Multiplica los resultados de los dos últimos pasos juntos, almacenando el
//resultado en una variable llamada resultadoFinal. El producto debe ser 44. Si no lo es, 
//deberá ajustar algunos de los valores de entrada iniciales.
resultadoFinal= sumNum1Num2 * restNum4Num3;

console.log(resultadoFinal);

//e. Escribe un cálculo que verifique si resultadoFinal es un número par.
//   Almacene el resultado en una variable llamada esPar.
let esPar=  (resultadoFinal % 2) == "0"

// f. Imprima por consola un mensaje con el siguiente formato:
console.log("Mis variables iniciales fueron: " + num1 + ", " + num2 + ", " + num3 + ", "+ num4 + ". " + 
             "La respuesta a verificar si el resultado final es par es: " + esPar
             );



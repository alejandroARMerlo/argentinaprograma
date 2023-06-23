const readlineSync= require('readline-sync');

let mes = readlineSync.question('Ingrese un mes del 1 al 12: ');

let monthName= ["enero","febrero","marzo", "abril","mayo","junio","julio","agosto", "septiembre",
                "octubre", "noviembre", "diciembre"];



switch(mes){

    case "1":case "3":case "5":case "7":case "8":case "9":
    case "12":
    
        console.log("La cantidad de dias del mes de %s es 31",monthName[mes-1]);

        break;
    
    case "4":case "6":case "9":case "11":

        console.log("La cantidad de dias del mes de %s es 30",monthName[mes-1]);

        break;
    case "2":
        
        console.log("La cantidad de dias del mes de %s es 28",monthName[mes-1]);

        break;

}
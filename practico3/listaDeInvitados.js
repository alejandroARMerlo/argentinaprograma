var personas=["Jose", "Maria", "Juan", "Andres", "Lionel", "Sofia", "Leandro","Emilia"], rechazados=[],admitidos=[];


rechazados.concat(["personas[i]", "jajaja"]);

for(let i=0, j=0, k=0; i<personas.length ; i++){
    
    if(personas[i]== "Jose" || personas[i]== "Sofia"){
    rechazados.push(personas[i]);
    }
    else {
        admitidos.push(personas[i]);
    }
}

console.log("La lista de invitados admitidos es:")

for(let i=0; i<admitidos.length ; i++){
    console.log(admitidos[i]);
}

console.log("La lista de invitados rechazados es:")

for(let i=0; i<rechazados.length ; i++){
    console.log(rechazados[i]);
}

rechazados.sort();
admitidos.sort();

console.log("La lista ordenada de invitados admitidos es:")

for(let i=0; i<admitidos.length ; i++){
    console.log(admitidos[i]);
}

console.log("La lista ordenada de invitados rechazados es:")

for(let i=0; i<rechazados.length ; i++){
    console.log(rechazados[i]);
}
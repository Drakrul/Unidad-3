//noprotect
//Datos de peliculas
let n1 = "Star Wars Episodio IV: Una Nueva Esperanza";
let a1 = "1977";
let res1 = "La princesa Leia es rehén de las fuerzas malignas del Imperio Galáctico en su esfuerzo por apoderarse de la galaxia. El aventurero Luke Skywalker y el apuesto Capitán Han Solo se unen al adorable dúo robótico, R2-D2 y C-3PO, para rescatar a la bella princesa Leia y restaurar la justicia en la galaxia.";

let n2 = "El Señor de los Anillos: La Comunidad del Anillo";
let a2 = "2001";
let res2 = "Un manso Hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.";

let n3 = "Transformers UNO";
let a3 = "2024";
let res3 = "La historia no contada del origen de Optimus Prime y Megatron, más conocidos como enemigos jurados, pero que alguna vez fueron amigos unidos como hermanos que cambiaron el destino de Cybertron para siempre.";

let n4 = "Sin Lugar para los Debiles";
let a4 = "2007";
let res4 = "Mientras caza, Llewelyn Moss descubre las espantosas secuelas de un negocio de drogas. Aunque lo sabe mejor, no puede resistirse al dinero que queda y se lo lleva. El cazador se convierte en presa cuando un asesino despiadado llamado Chigurh sigue su rastro. También busca a Moss el Sheriff Bell, un anciano agente de la ley que reflexiona sobre un mundo cambiante y un oscuro secreto propio, mientras intenta encontrar y proteger a Moss.";

let n5 = "Martyrs";
let a5 = "2008";
let res5 = "Ambientada en 1986, sigue a Lucie Jurin, una joven traumatizada que busca venganza contra los individuos que la secuestraron y torturaron cuando era niña; sus acciones, con la ayuda de su amiga Anna Assaoui, también víctima de abuso, tienen consecuencias nefastas."

//entrada del usuario y loop
let seleccion =  0;

while (seleccion !==6){
  seleccion = parseInt(prompt(
    "Bienvenido a la Biblioteca, seleccione una pelicula:\n" +
    "1. " + n1 + "\n" +
    "2. " + n2 + "\n" +
    "3. " + n3 + "\n" +
    "4. " + n4 + "\n" +
    "5. " + n5 + "\n" +
    "6. Salir"
  ));
  
  if (seleccion === 1) {
    alert("Nombre: " + n1 + "\nAño: " + a1 + "\nResumen: " + res1);
  } else if (seleccion === 2){
    alert("Nombre: " + n2 + "\nAño: " + a2 + "\nResumen: " + res2);
  } else if (seleccion === 3){
    alert("Nombre: " + n3 + "\nAño: " + a3 + "\nResumen: " + res3);
  } else if (seleccion === 4){
    alert("Nombre: " + n4 + "\nAño: " + a4 + "\nResumen: " + res4);
  } else if (seleccion === 5){
    alert("Nombre: " + n5 + "\nAño: " + a5 + "\nResumen: " + res5);
  } else if (seleccion === 6){
    alert("Hasta luego!");
  } else {
    alert("Opcion no valida.")
  }
}
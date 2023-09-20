var numeros = [1,2,3,4,5];

for (let i = 0; i < numeros.length; i++) {
    numeros.push(5);
    numeros.pop();
    console.log(numeros[i]);
}

Math.pow(2,4);

var random = Math.random() * 50;
console.log(Math.round(random));

numeros.unshift(2); // Para poner al principio del array

console.log(numeros.find(val => val == 2))
//numeros.findIndex();

var sublista = numeros.slice(3,3);

numeros.forEach(function(elemento,index,array) {
    console.log(elemento, index);
})
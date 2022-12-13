/*
Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). 
Il programma stampa la somma di tutti i numeri inseriti.*/
const result = document.getElementById('result');
const number=[];
let addnumber;
let sum = 0;
//Richiesta di 10 volte per l'inserimento di numeri all'utente
for(let i = 1; i<=10;i++){
   addnumber = parseInt(prompt('Inserisci un numero').trim());
   number.push(addnumber);
}
console.log(number);
//Somma dei valori assegnati dall'utente
for(let i = 0; i<number.length; i++){
 sum += number[i];
}
console.log(sum);
result.innerText = "Il risultato Tot dei numeri digitati è: " + sum;
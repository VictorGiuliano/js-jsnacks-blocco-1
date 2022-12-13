/*
Il software deve chiedere per 10 volte all’utente di inserire un numero. (qui potete usare un prompt). 
Il programma stampa la somma di tutti i numeri inseriti.*/

let number;
//Richiesta di 10 volte per l'inserimento di numeri all'utente
for(let i = 1; i<=10;i++){
   number = parseInt(prompt('Inserisci un numero').trim());
   console.log(number);
}

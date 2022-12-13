/*In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
l’utente inserisce il suo nome tramite un input.comunicagli se può partecipare o no alla festa.*/
const nome = document.getElementById('nome');
const button = document.getElementById('button');
const result = document.getElementById('result');
const nomeInvitati = ['Nick','Daisy','Max','David'];


button.addEventListener ('click', function() {   
const name =  nome.value.trim();     

if(!name){
    result.innerText = "Non hai inserito il Nome";
}
let isOk = false;
for(let i=0; i<nomeInvitati.length; i++){
    const nomeInserito = nomeInvitati[i];

    if(nomeInserito === name){
        isOk = true;
    }
}
if(isOk){
    result.innerText = 'Sei sulla lista, puoi entrare';
}else{
    result.innerText = 'Non sei in lista';
}

});
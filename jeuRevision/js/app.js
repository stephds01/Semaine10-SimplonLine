/**
 * Created by Stéphanie on 04/03/2016.
 */

//Création d'un objet MOT
var Mot = {
    //Initialise le mot
    init: function(french, english){
        this.french = french;
        this.english = english;
    }
};
//Création du tab mots
var mots = [];

//Création des objects
var mot1 = Object.create(Mot);
mot1.init('Bonjour', 'Hello');

var mot2 = Object.create(Mot);
mot2.init('Aurevoir', 'Goodbye');

var mot3 = Object.create(Mot);
mot3.init("Dormir", "to sleep");

var mot4 = Object.create(Mot);
mot4.init("Manger", "to eat");

var mot5 = Object.create(Mot);
mot5.init("Courir", "to run");



//Tu pushes les objets ds le tab
mots.push(mot1);
mots.push(mot2);
mots.push(mot3);
mots.push(mot4);
mots.push(mot5);

/***************************
*  Déclaration de variable
 * *************************/
var motFrench = document.getElementById('motFrench');
var motEnglish = document.getElementById('motEnglish');


//Qd je clique sur le bouton "Mots", j'affiche un mot de mon tab de manière aléatoire
function aleatoireFrench() {

    mot = mots[Math.floor(Math.random()*5)];

    document.getElementById("nom").innerHTML = mot.french;
}

function aleatoireEnglish() {

    var mot = mots[Math.floor(Math.random()*5)];

    document.getElementById("nom").innerHTML = mot.english;
}






motFrench.addEventListener('click',aleatoireFrench, false );
motEnglish.addEventListener('click',aleatoireEnglish, false );








//Qd je clique sur "Valider", je lance la fonction Validate
function validate(){

    var reponse = document.getElementById('reponse');
    //reponse = reponse.toLowerCase();

//Test de recupération de mes variables
    console.log("motFrench : " + mot.french);
    console.log("motEnglish : " + mot.english);

    console.log("html nom "  + nom.innerText);
    console.log("html reponse " + reponse.value);


    var messageAlert = document.getElementById('messageAlert');
    if(reponse.value == mot.english){
        var result = document.createTextNode('Bravo ');
    } else {
        result = document.createTextNode('Perdu ');
    }
    messageAlert.appendChild(result);
}

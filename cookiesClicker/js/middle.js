/**
 * Created by Stéphanie on 11/01/2016.
 */
//  Bloc MIDDLE

//Création du contenu du Menu
function contenu() {
    //Je créer la notice du menu
    var blocMiddle = document.getElementById('blocMiddle');

    //Je créer les éléménts
    var section = document.createElement('section');
        section.id="contenu";

    var button = document.createElement('button');
    var textButton  = document.createTextNode('X');
        button.id="btnOff";
        button.className = "btnOff";
        button.setAttribute("onclick","fermeCroix()");

    var h3 = document.createElement('h3');
    var titreH3premier = document.createTextNode('Général');

    var h3Deux = document.createElement('h3');
    var titreH3Deux = document.createTextNode('Paramètre');

    var p = document.createElement('p');
    var textPSpan1 = document.createTextNode('SAVE ');

    var p1 = document.createElement('p');
    var textP2eme = document.createTextNode('Enregistrer manuellement (Le jeu s\'auto-enregistre toutes les 60 secondes)')

    var p2 = document.createElement('p');
    var span = document.createElement('span');
    var textPSpan2 = document.createTextNode('IMPORT SAVE OU EXPORT SAVE');
    var textP4eme = document.createTextNode('Vous pouvez sauvegarder votre sauvegarde ou exporter sur un autre ordinateur')
    var textP5eme = document.createTextNode('FANCY ON | PARTICLE ON | NUMBER ON');



    //J'assemble
    button.appendChild(textButton);
    blocMiddle.appendChild(button );

    h3.appendChild(titreH3premier);
    section.appendChild(h3);
    blocMiddle.appendChild(section );

    span.appendChild(textPSpan1);
    p.appendChild(span);
    section.appendChild(p);

    p.appendChild(textP2eme);

    span.appendChild(textPSpan2);
    p1.appendChild(span);
    section.appendChild(p1);

    p1.appendChild(textP4eme);
    section.appendChild(p1);

    h3Deux.appendChild(titreH3Deux);
    section.appendChild(h3Deux);

    span.appendChild(textP5eme);
    p2.appendChild(span);
    section.appendChild(p2);


    document.body.appendChild(blocMiddle);

}

//Qd je clique sur le bouton MENU mon background devient purple
function menu() {
    //Je fais apparaitre le fond prune
    document.getElementById('blocMiddle').className ='blocMiddleOn';

    //Je fais disparaitre le bloc "frise"
    var frise = document.getElementById('frise');
    frise.style.display = "none";

    ////Apparition du btn croix
    //var btnOff = document.getElementById('btnOff');
    //btnOff.style.display = "block";

    //J'ajoute le contenu
    contenu();
}


// Supprimer la couleur de fond quand tu cliques la croix.
function fermeCroix () {

    var contenu = document.getElementById('contenu');
    contenu.parentNode.removeChild(contenu);

    //Je fais disparaitre le fond prune
    document.getElementById('blocMiddle').className = 'blocMiddle';

    //Je fais apparaitre le bloc "frise"
    var frise = document.getElementById('frise');
    frise.style.display = "block";

}


//Phrase aléatoire

var phrases = ['Aujourd\'hui, tous est permis ! ', 'Devenez le meilleur Patissier ! ', 'MasterChef, c\'est pour vous !', 'Aujourd\'hui, c\'est Macaron délice!', 'Il vous manque des ingrédients ?' ];
var IntervalID;
function phraseAleatoire() {

    var nbrPhrase = 3;
    var nbrAleatoire = Math.random(0, 4);
    var numero = Math.round((nbrPhrase) * nbrAleatoire);
    console.log(numero);
    document.getElementById('titleRandom').innerHTML = phrases[numero];
}

IntervalID = setInterval(phraseAleatoire, 2000);



/**
 * Created by Stéphanie on 21/12/2015.
 */


//Bloc LEFT


//Création du modal

//Function lors du click sur la div Nom de votre macaron
function creationModal() {
    var section = document.createElement('section');
    //var section = document.querySelector('section');
    section.id="modal1Left";
    //var modal1Left = document.getElementById('modal1Left');
    section.classList.add('modal');

    /*************/
    var div1 = document.createElement('div');
    div1.classList.add('croix');
    div1.setAttribute('onclick', 'fermer()');  //voir ligne 28 effacer un des 2
    var a = document.createElement('a');
    a.href = "#";
    //a.setAttribute('onclick', 'fermer()'); //voir ligne 24 effacer un des 2

    var textA = document.createTextNode('X');
    /*************/


    var header = document.createElement('header');
    var h3 = document.createElement('h3');
    var textH3 =  document.createTextNode('Nom de votre usine à Macaron ');
    /*****************/


    var div2 = document.createElement('div');
    div2.classList.add('content');

    var p1 = document.createElement('p');
    var textP1 = document.createTextNode('Qu\'elle est le nom que vous voulez donner à votre usine');

    var input = document.createElement('input');
    input.type = "text";
    input.id = "nom";
    /********************/


    var footer = document.createElement('footer');

    var buttonValide = document.createElement('button');
    var textButtonValide = document.createTextNode('Valider');
    buttonValide.id ="btnValide";
    buttonValide.setAttribute('onclick', 'valideBtn()');  //voir ligne 28 effacer un des 2


    var buttonAleatoire = document.createElement('button');
    var textButtonAleatoire = document.createTextNode('Aleatoire');
    buttonAleatoire.id ="btnAleatoire";

    var buttonQuitter = document.createElement('button');
    var textButtonQuitter = document.createTextNode('Quitter');
    buttonQuitter.id ="btnQuitter";
    buttonQuitter.setAttribute('onclick', 'quitterBtn()');  //voir ligne 28 effacer un des 2




    a.appendChild(textA);
    div1.appendChild(a);
    section.appendChild(div1);

    h3.appendChild(textH3);
    header.appendChild(h3);
    section.appendChild(header);

    p1.appendChild(textP1);
    div2.appendChild(p1);
    div2.appendChild(input);
    section.appendChild(div2);

    buttonValide.appendChild(textButtonValide);
    footer.appendChild(buttonValide);

    buttonAleatoire.appendChild(textButtonAleatoire);
    footer.appendChild(buttonAleatoire);

    buttonQuitter.appendChild(textButtonQuitter);
    footer.appendChild(buttonQuitter);
    section.appendChild(footer);

    document.body.appendChild(section);

}








//// Fermer le modal avec la croix

function fermer() {
    var modal1Left = document.getElementById('modal1Left');
    //modal1Left.style.visibility="hidden";
    modal1Left.remove('section');
}



//Function lors du click sur la div Nom de votre macaron
    function ouvrir() {
        creationModal();
    }



//Bouton VALIDER
function valideBtn() {
    var nom = document.getElementById('nom');
    nom = nom.value;
    if(nom == "" ){
        alert('Veuillez indiquer un nom ou bien cliquer sur Aléatoire');

    } else if(nom != "") {
        var titre = document.getElementById('titre').innerHTML;
        var resultat = titre.replace(titre, nom);
        document.getElementById('titre').innerHTML = resultat;
    }

}





//
///*********************************************************/
///********************************************************/
////              FONCTION QUI FONCTIONNE PAS
///*********************************************************/
///********************************************************/
//    //Bouton Aléatoire
//
//var titres = ['Usine à Bonbon', 'Douceur sucrée', 'Fôret noire', 'Sucre d\'orge' ];
//
//var btnAleatoire = document.getElementById('btnAleatoire');
//var titre = titres[Math.floor(Math.random()*4)];
//
//    btnAleatoire.addEventListener('click', function (titre){
//        var nom = document.getElementById('nom');
//
//        console.log("titre " + titre.value);
//        //document.getElementById('nom').value.innerHTML = titre.value;
//    }, false);
//
///*********************************************************/
///********************************************************/


//Function des boutons du modal
function quitterBtn() {
    var modal1Left = document.getElementById("modal1Left");
    modal1Left.parentNode.removeChild(modal1Left);

}

//    //Interaction avec le Gros Cookies
//
//        var score = 0;
//
//        function augmenteScore() {
//        score += 1;
//
//            console.log(score);
//            document.getElementById('affichage').innerHTML += score;
//    }
//
//
//       //function multiplicateur
//        var compteur =1;
//
//    function incrementer() {
//        compteur += 2;
//        console.log(compteur);
//        document.getElementById('affichage1').innerHTML += compteur;
//    }














//  Bloc MIDDLE

function contenu() {
    //Je créer la notice du menu
    var blocMiddle = document.getElementById('blocMiddle');

    //Je créer les éléménts
    var section = document.createElement('section');
    var button = document.createElement('button');
    var h3 = document.createElement('h3');
    var h3Deux = document.createElement('h3');
    var p = document.createElement('p');
    var p1 = document.createElement('p');
    var p2 = document.createElement('p');
    var span = document.createElement('span');

    //Je crée les noeuds de texte
    var textButton  = document.createTextNode('X');
    var titreH3premier = document.createTextNode('Général');
    var titreH3Deux = document.createTextNode('Paramètre');
    var textPSpan1 = document.createTextNode('SAVE ');
    var textP2eme = document.createTextNode('Enregistrer manuellement (Le jeu s\'auto-enregistre toutes les 60 secondes)')
    var textPSpan2 = document.createTextNode('IMPORT SAVE OU EXPORT SAVE');
    var textP4eme = document.createTextNode('Vous pouvez sauvegarder votre sauvegarde ou exporter sur un autre ordinateur')
    var textP5eme = document.createTextNode('FANCY ON | PARTICLE ON | NUMBER ON');



    // j'ajoute les prop
    button.id="btnOff";
    button.className = "btnOff";
    button.setAttribute("onclick","fermeCroix()");

    section.id="contenu";



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

    //J'ajoute le contenu
    contenu();

    ////Je créer la notice du menu
    //var blocMiddle = document.getElementById('blocMiddle');
    //
    ////Je créer les éléménts
    //var section = document.createElement('section');
    //var button = document.createElement('button');
    //var h3 = document.createElement('h3');
    //var h3Deux = document.createElement('h3');
    //var p = document.createElement('p');
    //var p1 = document.createElement('p');
    //var p2 = document.createElement('p');
    //var span = document.createElement('span');
    //
    ////Je crée les noeuds de texte
    //var textButton  = document.createTextNode('X');
    //var titreH3premier = document.createTextNode('Général');
    //var titreH3Deux = document.createTextNode('Paramètre');
    //var textPSpan1 = document.createTextNode('SAVE ');
    //var textP2eme = document.createTextNode('Enregistrer manuellement (Le jeu s\'auto-enregistre toutes les 60 secondes)')
    //var textPSpan2 = document.createTextNode('IMPORT SAVE OU EXPORT SAVE');
    //var textP4eme = document.createTextNode('Vous pouvez sauvegarder votre sauvegarde ou exporter sur un autre ordinateur')
    //var textP5eme = document.createTextNode('FANCY ON | PARTICLE ON | NUMBER ON');
    //
    //
    //
    //// j'ajoute les prop
    //button.id="btnOff";
    //button.className = "btnOff";
    //button.onclick = "off()";
    //
    //section.id="contenu";
    //
    //
    //
    ////J'assemble
    //button.appendChild(textButton);
    //blocMiddle.appendChild(button );
    //
    //h3.appendChild(titreH3premier);
    //section.appendChild(h3);
    //blocMiddle.appendChild(section );
    //
    //span.appendChild(textPSpan1);
    //p.appendChild(span);
    //section.appendChild(p);
    //
    //p.appendChild(textP2eme);
    //
    //span.appendChild(textPSpan2);
    //p1.appendChild(span);
    //section.appendChild(p1);
    //
    //p1.appendChild(textP4eme);
    //section.appendChild(p1);
    //
    //h3Deux.appendChild(titreH3Deux);
    //section.appendChild(h3Deux);
    //
    //span.appendChild(textP5eme);
    //p2.appendChild(span);
    //section.appendChild(p2);
    //
    //
    //document.body.appendChild(blocMiddle);
}



// Supprimer la couleur de fond quand tu cliques la croix.

//var btnOff = document.getElementById('btnOff');
//var fermeCroix = function() {
//    var contenu = document.getElementsByName('section');
//    contenu.style.display='none';
//    //alert('Hello');
//};
//
//btnOff.addEventListener('click', fermeCroix, false);

//function fermer() {
//    var ferme = document.getElementById('modal1Left');
//    ferme.style.display="none";
//}
//function off() {
//    var ferme = document.getElementById('contenu');
//    ferme.style.color="red";
//}

























//BLOC MIDDLE

//function menu() {
//    //var div = document.createElement('div');
//    //var p = document.createElement('p');
//    //var span = document.createElement('span');
//    //
//    //var save = document.createTextNode('SAVE');
//    //var importSave = document.createTextNode('IMPORT SAVE');
//    //var exportSave = document.createTextNode('EXPORT SAVE');
//    //
//    //var textP = document.createTextNode("Enregistrer manuellement (Le jeu s'auto-enregistre toutes les 60 secondes)")
//    //var textP1 = document.createTextNode("Vous pouvez sauvegarder votre sauvegarde ou exporter sur un autre ordinateur")
//    //
//    //div.id = "messageMenu";
//    //
//    //p.appendChild(save + textP);
//    //p.appendChild(importSave + exportSave + textP1);
//    //div.appendChild(p);
//    //
//    //document.getElementById('afficheMenu').appendChild(div);
//    var bloc2ContainerContent = document.getElementById('bloc2-container-content');
//    bloc2ContainerContent.style.backgroundColor="yellow";
//}
//
function btnOff() {
    var afficheMenu = document.getElementById('afficheMenu');
    afficheMenu.style.display='none'.innerHTML;

//}
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


    var footer = document.createElement('div');
        footer.classList.add('footer');

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

// Fermer le modal avec la croix
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

//Function des boutons du modal
function quitterBtn() {
    var modal1Left = document.getElementById("modal1Left");
    modal1Left.parentNode.removeChild(modal1Left);
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







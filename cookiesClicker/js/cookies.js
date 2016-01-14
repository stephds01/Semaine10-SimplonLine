/**
 * Created by Stéphanie on 12/01/2016.
 */

/******************************************************/
//
//Interaction avec le Gros Cookies
//
/******************************************************/
//( function(){


    //Variable bouton Cookies
    bouton= document.getElementById('bouton');

    //Variable multiplicateur Compteur
    multiplicateur = document.getElementById('multiplicateur');

    //Variable de l'affichage du score
    var affichage = document.getElementById('affichage');

    //Variable affichage score
    afficheScore = document.getElementById('afficheScore');
    afficheCompteur = document.getElementById('afficheCompteur');

    /****** Variable initialisée  ********/
    var score = 0;
    var compteur = 1;


    /********   Function du compteur    *******/
    function nbreCompteur() {

        console.log(score);
        console.log("compteur " +compteur);
        console.log("prix " + prix());




            if(score > 0 && score >= 20 ){

                if(score < 0) {
                    alert( 'Oups, il vous faut ' + prix() + ' points pour pouvoir acheter . Il vous manque ' + res  + " points. Votre futur achat s'élèvera à " + price() + "v points ." );

                } else {
                    score = score - prix();
                    compteur = compteur + 1;

                    console.log(prix());
                    multiplicateur.innerHTML = "Multiplicateur : x " + compteur;
                    affichage.innerHTML = score;

                }


            } else if (score <= 0){

                alert('Désolé on ne fait pas crédit ! ');

            } else {
                var res = prix() - score;
                alert( 'Oups, il vous faut ' + prix() + ' points pour pouvoir acheter . Il vous manque ' + res  + " points. Votre futur achat s'élèvera à " + price() + " points ." );
            }

    }

    /***************Affichage lors du click **************/
    function click() {
        score = score + compteur;
        affichage.innerHTML = score;
    }

    /****** somme du prix - le compteur  *******/
    //prix
    function prix() {

        var prix = 20 * compteur;
        return prix;
    }


    //prix du futur achat
    function price() {

        price = 20 * compteur * compteur;
        return price;
    }

    /***********    Fonction de l'autoClicher dès 200points   ******/
    function autoclick (){
        var intervalID;

        if(score >= 50){
            IntervalID = setInterval(click, 2000);
        }
    }

    /********   Chiffre ds le cookie    ******/

    function mDown(obj) {
        obj.style.paddingTop = "150px";
        obj.style.fontWeight = "bold";
        obj.innerHTML = "+1";
    }

    function mUp(obj) {
        obj.innerHTML="";
    }



    /***********   Les appels     ******/
    bouton.addEventListener('click', click, false);
    multiplicateur.addEventListener('click', nbreCompteur, false);

    bouton.addEventListener('click', autoclick, false);














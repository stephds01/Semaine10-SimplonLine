
//tableaux des mots anglais => français
var mots = [
    {
        french:'Bonjour',
        english: 'Hello'
    },
    {
        french:'Aurevoir',
        english: 'GoodBye'
    },
    {
        french:'manger',
        english: '(to) eat'
    },
    {
        french: 'dormir',
        english: '(to) sleep'
    },
    {
        french: 'tout le monde',
        english: 'everybody'
    },
    {
        french: 'fier',
        english: 'proud'
    },
    {
        french: 'et voici',
        english: 'here you are'
    },
    {
        french: 'une matière',
        english: 'a subject'
    },
    {
        french: 'interessé',
        english: 'interested'
    },
    {
        french: 'énervé, irrité',
        english: 'annoyed'
    },
    {
        french: 'jaloux de ',
        english: 'jealous of'
    },
    {
        french: 'intelligent, doué',
        english: 'bright'
    },
    {
        french: 'un glacier',
        english: 'an ice-cream parlour'
    },
    {
        french: 'un cône',
        english: 'a cornet'
    },
    {
        french: 'une fraise',
        english: 'a strawberry'
    },
    {
        french: 'jambon',
        english: 'ham'
    },
    {
        french: 'fromage',
        english: 'cheese'
    },
    {
        french: 'riz',
        english: 'rice'
    },
    {
        french: 'pâtes',
        english: 'pasta'
    },
    {
        french: 'petits pois',
        english: 'peas'
    },
    {
        french: 'haricots verts',
        english: 'green beans'
    },
    {
        french: 'pomme',
        english: 'apple'
    },
    {
        french: 'poulet',
        english: 'chicken'
    },
    {
        french: 'lait',
        english: 'milk'
    },
    {
        french: 'les devoirs',
        english: 'homework'
    },
    {
        french: 'chez soi',
        english: 'home'
    },
    {
        french: 'ce soir',
        english: 'tonight'
    },
    {
        french: 'ce week-end',
        english: 'this weekend'
    },
    {
        french: 'demain',
        english: 'tomorrow'
    },
    {
        french: 'mots croisés',
        english: 'crosswords'
    },
    {
        french: 'calme',
        english: 'quiet'
    },
    {
        french: 'église',
        english: 'church'
    },
    {
        french: 'piscine',
        english: 'swimming pool'
    },
    {
        french: 'bar',
        english: 'pub'
    },
    {
        french: 'hôpital',
        english: 'hopital'
    },
    {
        french: 'supermarché',
        english: 'supermarket'
    },
    {
        french: 'bibliothèque',
        english: 'library'
    },
    {
        french: 'parc',
        english: 'park'
    },
    {
        french: 'le dessus des cuisse',
        english: 'the lap'
    },
    {
        french: 'un livre de recette',
        english: 'a recipe book'
    },
    {
        french: 'oeuf',
        english: 'egg'
    },
    {
        french: 'farine',
        english: 'flour'
    },
    {
        french: 'poivre',
        english: 'pepper'
    },
    {
        french: 'sel',
        english: 'salt'
    },
    {
        french: 'une cannette de bière',
        english: 'a can of beer'
    },
    {
        french: 'jus d\'orange',
        english: 'orange juice'
    },
    {
        french: 'un sèche cheveux',
        english: 'a hairdryer'
    },
    {
        french: 'pantoufle',
        english: 'slipper'
    },
    {
        french: 'une serviette',
        english: 'a towel'
    },
    {
        french: 'rien',
        english: 'nothing'
    },
    {
        french: 'en colère',
        english: 'furious / angry'
    },
    {
        french: 'en fait',
        english: 'in fact'
    },
    {
        french: 'une fête',
        english: 'a party'
    },
    {
        french: 'une paille',
        english: 'a straw'
    },
    {
        french: 'un toboggan',
        english: 'a slide'
    }
];


/***************************
*  Déclaration de variable
 * *************************/
var motFrench = document.getElementById('motFrench');
var motEnglish = document.getElementById('motEnglish');
var response = document.getElementById('response');
var note = document.getElementById('note');
var valider = document.getElementById('valider');

var tour = 0;
var point = 0;






//Qd je clique sur le bouton "Mots French", j'affiche un mot de mon tab de manière aléatoire en français
function aleatoireFrench() {
    tour= tour + 1;
    note.innerHTML = point + ' / ' + tour;

    mot = mots[Math.floor(Math.random()*mots.length)];
    document.getElementById("nom").innerHTML = mot.french;
    response.value="";
}

//Qd je clique sur le bouton "Mots English", j'affiche un mot de mon tab de manière aléatoire en english
function aleatoireEnglish() {
    tour= tour + 1;
    note.innerHTML = point + ' / ' + tour;

    mot = mots[Math.floor(Math.random()*mots.length)];
    document.getElementById("nom").innerHTML = mot.english;
    response.value="";

}


//Qd je clique sur "Valider", je lance la fonction Validate
function validate(){
    var nom = document.getElementById('nom');
    var response = document.getElementById('response');

    var messageAlert = document.getElementById('messageAlert');



        if(nom.innerHTML && response.value) {

            if(nom.innerHTML === mot.french) {

                if (nom.innerHTML == mot.french && response.value == mot.english) {
                    messageAlert.innerHTML = 'Bravo "' + mot.french + '" s\'écrit en anglais "' + mot.english + ' "';

                    point= point+0.5;
                    note.innerHTML = point + ' / ' + tour;

                } else {
                    messageAlert.innerHTML = 'Oups, il y a une faute dans ton mot en Anglais. "' + mot.french + '" s\'écrit en anglais "' + mot.english + ' "';
                    point= point+0;

                }
            } else if(nom.innerHTML === mot.english) {

                if (nom.innerHTML === mot.english && response.value === mot.french) {
                    messageAlert.innerHTML = 'Bravo "' + mot.english + '" s\'écrit en français "' + mot.french + ' "';
                    point= point+0.5;
                    note.innerHTML = point + ' / ' + tour;

                } else {
                    messageAlert.innerHTML = 'Oups, il y a une faute dans ton mot en Français. "' + mot.english + '" s\'écrit en Français "' + mot.french + ' "';
                    point= point+0;
                }
            } else {
                messageAlert.innerHTML = 'Oups, Il y a aucune correspondance! "' + mot.english + '" s\'écrit en Français "' + mot.french + ' "';
                point= point+0;
            }

        } else  {
            messageAlert.innerHTML = "votre champs n'est pas rempli !";
            point= point+0;

        }

}





motFrench.addEventListener('click',aleatoireFrench, false );
motEnglish.addEventListener('click',aleatoireEnglish, false );
valider.addEventListener('click', validate, false);



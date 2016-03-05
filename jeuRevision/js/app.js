
//tableaux des mots anglais => français
var mots1 = [
    {
        french:'bonjour',
        english: 'hello'
    },
    {
        french:'aurevoir',
        english: 'Goodbye'
    },
    {
        french:'manger',
        english: 'to eat'
    },
    {
        french: 'dormir',
        english: 'to sleep'
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
    },
    {
        french: 'un filet',
        english: 'a net'
    },
    {
        french: 'en bas',
        english: 'down'
    },
    {
        french: 'surpris',
        english: 'surprised'
    },
    {
        french: 'un réveil',
        english: 'an alarm clock'
    },
    {
        french: 'un coussin',
        english: 'a cushion'
    },
    {
        french: 'un tableau',
        english: 'a painting'
    },
    {
        french: 'une table de nuit',
        english: 'a bedside table'
    },
    {
        french: 'beautiful',
        english: 'beau'
    },
    {
        french: "s'il vous plait",
        english: 'please'
    },
    {
        french: 'd\'accord',
        english: 'all right'
    },
    {
        french: 'tard',
        english: 'late'
    },
    {
        french: 'une publicité',
        english: 'a commercial'
    },
    {
        french: 'un frigo',
        english: 'a fridge'
    },
    {
        french: 'affamé',
        english: 'hungry'
    },
    {
        french: 'assoiffé',
        english: 'thirsty'
    },
    {
        french: 'délicieux',
        english: 'délicious'
    },
    {
        french: 'bonne idée',
        english: 'good idea'
    },
    {
        french: 'femme, épouse',
        english: 'wife'
    },
    {
        french: 'mari',
        english: 'husband'
    },
    {
        french: 'avec',
        english: 'with'
    },
    {
        french: 'malade',
        english: 'ill'
    },
    {
        french: 'douleur',
        english: 'ache'
    },
    {
        french: 'un mal de tête',
        english: 'a headache'
    },
    {
        french: 'des jumelles',
        english: 'binoclars'
    },
    {
        french: 'trop',
        english: 'too + adjectif'
    },
    {
        french: 'qu\'est ce qui ne va pas ?',
        english: 'what\'s wrong ?'
    },
    {
        french: 'monsieur',
        english: 'sir'
    },
    {
        french: 'faux',
        english: 'wrong'
    },
    {
        french: 'court, petit',
        english: 'short'
    },
    {
        french: 'long',
        english: 'long'
    },
    {
        french: 'petit',
        english: 'small'
    },
    {
        french: 'un dessin',
        english: 'a drawing'
    },
    {
        french: 'drôle',
        english: 'funny'
    },
    {
        french: 'tête',
        english: 'head'
    },
    {
        french: 'les dents',
        english: 'the teeth'
    },
    {
        french: 'les oreilles',
        english: 'the ears'
    },
    {
        french: 'les yeux',
        english: 'the eyes'
    },
    {
        french: 'le nez',
        english: 'the nose'
    },
    {
        french: 'les jambes',
        english: 'the legs'
    },
    {
        french: 'les genoux',
        english: 'the knees'
    },
    {
        french: 'les pieds',
        english: 'the feet'
    },
    {
        french: 'les gras',
        english: 'the arms'
    },
    {
        french: 'les mains',
        english: 'the hands'
    },
    {
        french: 'les doigts',
        english: 'the fingers'
    },
    {
        french: 'la tête',
        english: 'the head'
    },
    {
        french: 'un professeur',
        english: 'a teacher'
    },
    {
        french: 'un élève',
        english: 'a pupil'
    },
    {
        french: 'une robe',
        english: 'a dress'
    },
    {
        french: 'escalier',
        english: 'stairs'
    },
    {
        french: 'à l\'étage',
        english: 'upstairs'
    },
    {
        french: 'en bas',
        english: 'downstairs'
    },
    {
        french: 'une bouée',
        english: 'a rubber ring'
    },
    {
        french: 'une clôture',
        english: 'a fence'
    },
    {
        french: 'un arbre généalogique',
        english: 'a family tree'
    },
    {
        french: 'un père',
        english: 'a father'
    },
    {
        french: 'un mère',
        english: 'a mother'
    },
    {
        french: 'un fils',
        english: 'a son'
    },
    {
        french: 'une fille',
        english: 'a daughter'
    },
    {
        french: 'les enfants',
        english: 'the children'
    },
    {
        french: 'un enfant',
        english: 'a child'
    },
    {
        french: 'quand',
        english: 'when'
    },
    {
        french: 'qui',
        english: 'who'
    },
    {
        french: 'qu\'est ce que, quel, que',
        english: 'what'
    },
    {
        french: 'quel âge',
        english: 'how old'
    },
    {
        french: 'comment',
        english: 'how'
    },
    {
        french: 'à qui appartient',
        english: 'whose'
    },
    {
        french: 'pourquoi',
        english: 'why'
    },
    {
        french: 'où',
        english: 'where'
    },
    {
        french: 'une cuisine',
        english: 'a kitchen'
    },
    {
        french: 'le salon',
        english: 'the living room'
    },
    {
        french: 'la salle à manger',
        english: 'the dining room'
    },
    {
        french: 'une chambre',
        english: 'a bedroom'
    },
    {
        french: 'peut-être',
        english: 'maybe'
    },
    {
        french: 'devant',
        english: 'in front of'
    },
    {
        french: 'dessus',
        english: 'on'
    },
    {
        french: 'dedans',
        english: 'in'
    },
    {
        french: 'derrière',
        english: 'behind'
    },
    {
        french: 'sous',
        english: 'under'
    },
    {
        french: 'un journal',
        english: 'a newspaper'
    },
    {
        french: 'une voiture',
        english: 'a car'
    },
    {
        french: 'un sac',
        english: 'a bag'
    },
    {
        french: 'les chaussures',
        english: 'the shoes'
    },
    {
        french: 'mignon',
        english: 'cute'
    },
    {
        french: 'fou',
        english: 'crazy'
    },
    {
        french: 'timide, réservé',
        english: 'shy'
    },
    {
        french: 'bruyant',
        english: 'noisy'
    },
    {
        french: 'paresseux',
        english: 'lazy'
    },
    {
        french: 'petit',
        english: 'little'
    },
    {
        french: 'vouloir',
        english: 'to want'
    },
    {
        french: 'prendre',
        english: 'to take'
    },
    {
        french: 'ouvrir',
        english: 'to open'
    },
    {
        french: 'espionner',
        english: 'to spy on'
    },
    {
        french: 'jardiner',
        english: 'to garden'
    },
    {
        french: 'se passer scène',
        english: 'to take place'
    },
    {
        french: 'chercher',
        english: 'to look for'
    },
    {
        french: 'se réveiller',
        english: 'to wake up'
    },
    {
        french: 'regarder',
        english: 'to look at'
    },
    {
        french: 'dormir',
        english: 'to sleep'
    },
    {
        french: 'aller',
        english: 'to go'
    },
    {
        french: 'descendre',
        english: 'to go down'
    },
    {
        french: 'crier',
        english: 'to shout'
    },
    {
        french: 'appeler',
        english: 'to call'
    },
    {
        french: 'chanter',
        english: 'to sing'
    },
    {
        french: 'réparer',
        english: 'to repair'
    },
    {
        french: 'réparer',
        english: 'to mend'
    },
    {
        french: 'sécher',
        english: 'to dry'
    },
    {
        french: 'rire',
        english: 'to laugh'
    },
    {
        french: 'être assis',
        english: 'to sit'
    },
    {
        french: 'écrire',
        english: 'to write'
    },
    {
        french: 'dessiner',
        english: 'to draw'
    },
    {
        french: 'lire',
        english: 'to read'
    },
    {
        french: 'être',
        english: 'to be'
    },
    {
        french: 'faire',
        english: 'to do'
    },
    {
        french: 'boire',
        english: 'to drink'
    },
    {
        french: 'manger',
        english: 'to eat'
    },
    {
        french: 'faire, fabriquer',
        english: 'to make'
    },
    {
        french: 'téléphoner',
        english: 'to phone'
    },
    {
        french: 'regarder',
        english: 'to watch'
    },
    {
        french: 'se battre',
        english: 'to fight'
    },
    {
        french: 'rester',
        english: 'to stay'
    },
    {
        french: 'frapper',
        english: 'to hit'
    },
    {
        french: 'tuer',
        english: 'to kill'
    },
    {
        french: 'pleurer',
        english: 'to cry'
    },
    {
        french: 'ranger',
        english: 'to tidy'
    },
    {
        french: 'se cacher',
        english: 'to hide'
    },
    {
        french: 'gronder',
        english: 'to tell off'
    },
    {
        french: 'savoir, connaitre',
        english: 'to know'
    },
    {
        french: 'partir',
        english: 'to leave'
    },
    {
        french: 'mentir',
        english: 'to lie'
    },
    {
        french: 'se passer, se produire',
        english: 'to happen'
    },
    {
        french: 'dire',
        english: 'to say'
    },
    {
        french: 'attraper',
        english: 'to catch'
    },
    {
        french: 'parler',
        english: 'to talk'
    },
    {
        french: 'parler',
        english: 'to speak'
    },
    {
        french: 'habiter',
        english: 'to live in'
    },
    {
        french: 'voir',
        english: 'to see'
    },
    {
        french: 'avoir',
        english: 'to have got'
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

    mot = mots1[Math.floor(Math.random()*mots1.length)];
    document.getElementById("nom").innerHTML = mot.french;
    response.value="";
}

//Qd je clique sur le bouton "Mots English", j'affiche un mot de mon tab de manière aléatoire en english
function aleatoireEnglish() {
    tour= tour + 1;
    note.innerHTML = point + ' / ' + tour;

    mot = mots1[Math.floor(Math.random()*mots1.length)];
    document.getElementById("nom").innerHTML = mot.english;
    response.value="";

}


//Qd je clique sur "Valider", je lance la fonction Validate
function validate(){
    var nom = document.getElementById('nom');
    var response = document.getElementById('response');

    var messageAlert = document.getElementById('messageAlert');

    response.value = response.value.toLowerCase();

        if(nom.innerHTML && response.value) {

            if(nom.innerHTML === mot.french) {

                if (nom.innerHTML == mot.french && response.value == mot.english) {
                    messageAlert.innerHTML = 'BRAVO <span class="val"> "' + mot.french + '"</span> s\'écrit en anglais <span class="val">"' + mot.english + ' "</span>';

                    point= point+0.5;
                    note.innerHTML = point + ' / ' + tour;

                } else {
                    messageAlert.innerHTML = 'Oups, il y a une faute dans ton mot en Anglais. <span class="val">"' + mot.french + '"</span> s\'écrit en anglais <span class="val">"' + mot.english + ' "</span>';
                    point= point+0;

                }
            } else if(nom.innerHTML === mot.english) {

                if (nom.innerHTML === mot.english && response.value === mot.french) {
                    messageAlert.innerHTML = 'BRAVO <span class="val">"' + mot.english + '"</span> s\'écrit en français <span class="val">"' + mot.french + ' "</span>';
                    point= point+0.5;
                    note.innerHTML = point + ' / ' + tour;

                } else {
                    messageAlert.innerHTML = 'Oups, il y a une faute dans ton mot en Français. <span class="val">"' + mot.english + '"</span> s\'écrit en Français <span class="val">"' + mot.french + ' "</span>';
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



/**
 * Created by Stéphanie on 11/01/2016.
 */
var lait =  document.getElementById('lait');
var farine =  document.getElementById('farine');
var beurre =  document.getElementById('beurre');
var chocolat =  document.getElementById('chocolat');
var surprise =  document.getElementById('surprise');
var blocRight =  document.getElementById('blocRight');

function acheteLait(){
    if(score >= 300){
        lait.classList.remove('lait');
        lait.classList.add('achetLait');
    } else {
        alert("Désolé, vous n'avez pas assez de points" );
    }
}

function laitOver() {
    var div = document.createElement('div');
    div.id='laitOver';
    var textDiv = document.createTextNode('Il vous faut 300 points');
        div.classList.add('over');

    div.appendChild(textDiv);
    lait.appendChild(div);
}
function surpriseOutLait() {
    var div = document.getElementById('laitOver');
    div.parentNode.removeChild(div);
}









function acheteFarine(){
    if(score >= 400){

        farine.classList.remove('farine');
        farine.classList.add('acheteFarine');

    } else {
        alert("Désolé, vous n'avez pas assez de points" );
    }
}

function farineOver() {
    var div = document.createElement('div');
    div.id='farineOver';
    var textDiv = document.createTextNode('Il vous faut 400 points');
    div.classList.add('over');

    div.appendChild(textDiv);
    farine.appendChild(div);
}
function surpriseOutFarine() {
    var div = document.getElementById('farineOver');
    div.parentNode.removeChild(div);
}








function acheteBeurre(){
    if(score >= 500){
        beurre.classList.remove('beurre');
        beurre.classList.add('acheteBeurre');
    } else {
        alert("Désolé, vous n'avez pas assez de points" );
    }
}

function beurreOver() {
    var div = document.createElement('div');
        div.id='beurreOver';
    var textDiv = document.createTextNode('Il vous faut 500 points');
    div.classList.add('over');

    div.appendChild(textDiv);
    beurre.appendChild(div);
}
function surpriseOutBeurre() {
    var div = document.getElementById('beurreOver');
    div.parentNode.removeChild(div);
}







function acheteChocolat(){
    if(score >= 600){
        chocolat.classList.remove('chocolat');
        chocolat.classList.add('acheteChocolat');
    } else {
        alert("Désolé, vous n'avez pas assez de points" );
    }
}
function chocolatOver() {
    var div = document.createElement('div');
    div.id='chocolatOver';
    var textDiv = document.createTextNode('Il vous faut 600 points');
    div.classList.add('over');

    div.appendChild(textDiv);
    chocolat.appendChild(div);
}

function surpriseOutChocolat() {
    var div = document.getElementById('chocolatOver');
    div.parentNode.removeChild(div);
}





function acheteSurprise(){
    if(score >= 1000){
        surprise.classList.remove('surprise');
        surprise.classList.add('acheteSurprise');
    } else {
        alert("Désolé, vous n'avez pas assez de points" );
    }
}

function surpriseOver() {
    var div = document.createElement('div');
        div.id='surpriseOver';
    var textDiv = document.createTextNode('Il vous faut 1000 points');
    div.classList.add('over');

    div.appendChild(textDiv);
    surprise.appendChild(div);
}

function surpriseOutSupprise() {
    var div = document.getElementById('surpriseOver');
    div.parentNode.removeChild(div);
}




lait.addEventListener("mouseover", laitOver, false);
lait.addEventListener("mouseout", surpriseOutLait, false);
lait.addEventListener('click', acheteLait, false);

farine.addEventListener("mouseover", farineOver, false);
farine.addEventListener("mouseout", surpriseOutFarine, false);
farine.addEventListener('click', acheteFarine, false);

beurre.addEventListener("mouseover", beurreOver, false);
beurre.addEventListener("mouseout", surpriseOutBeurre, false);
beurre.addEventListener('click', acheteBeurre, false);

chocolat.addEventListener("mouseover", chocolatOver, false);
chocolat.addEventListener("mouseout", surpriseOutChocolat, false);
chocolat.addEventListener('click', acheteChocolat, false);

surprise.addEventListener("mouseover", surpriseOver, false);
surprise.addEventListener("mouseout", surpriseOutSupprise, false);
surprise.addEventListener('click', acheteSurprise, false);

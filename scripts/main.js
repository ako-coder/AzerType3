/*********************************************************************************
 * 
 * Point d'entrée, c'est lui qui intialise le jeu et lance la boucle de jeu. 
 * 
 *********************************************************************************/

let imputEcriture = document.getElementById("inputEcriture")
console.log(imputEcriture)

let boutonValider = document.getElementById("btnValiderMot")
console.log(btnValiderMot)


let zoneProposition = document.querySelector(".zoneProposition")
console.log(zoneProposition)

let zoneScore = document.querySelector(".zoneScore")
console.log(zoneScore)


let boutonsRadio = document.querySelectorAll(".optionSource input")
console.log(boutonsRadio)



lancerJeu()
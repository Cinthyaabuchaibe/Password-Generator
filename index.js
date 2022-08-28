// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"]; //

const characters =  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLenght = 15
const passOneEl = document.getElementById("passOne-El")
let passTwoEl = document.getElementById("passTwo-El")
let genPassBtn = document.getElementById("genPassBtn")
const numberLenght = document.getElementById("numberLenght")


function generatePasswordsOne () {
   let passOneEl = '';
   for (let i = 0; i < passwordLenght; i++){
        const randomIndex = Math.floor(Math.random()*characters.length)
        passOneEl += characters[randomIndex];
   }
   return passOneEl;
}

let password = generatePasswordsOne ()

genPassBtn.addEventListener("click", function() {
passOneEl.innerHTML = `<input type="text" value=${generatePasswordsOne()}>`
})

function generatePasswordsTwo () {
   let passTwoEl = '';
   for (let i = 0; i < passwordLenght; i++){
        const randomIndex = Math.floor(Math.random()*characters.length)
        passTwoEl += characters[randomIndex];
   }
   return passTwoEl;
}

let passwordTwo = generatePasswordsTwo ()

genPassBtn.addEventListener("click", function() {
passTwoEl.innerHTML = `<input type="text" value=${generatePasswordsTwo()}>`    
})

numberLenght.addEventListener("input", function() {
    passwordLenght = numberLenght.value;
})

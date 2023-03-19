const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 15

let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")
let changePasswordLength = document.getElementById("change-Password-Length")

function adjustPasswordLengthDown(){
      if (passwordLength > 0) {
    passwordLength--;
    changePasswordLength.textContent = passwordLength;

  }     
}

function adjustPasswordLengthUp(){
    if (passwordLength <= 90){
        passwordLength++;
        changePasswordLength.textContent = passwordLength;
    }
}


function getRandomCharacter(){
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword(length){
    let randomPassword = ""
    for (let i = 0 ; i < length ; i++){
        randomPassword += getRandomCharacter()
    }
    return randomPassword
}
    


let clickCount = 0

function generatePassword(){
   clickCount++
    if (clickCount % 2 !== 0){
        password1.textContent = generateRandomPassword(passwordLength)
    } 
    else if (clickCount % 2 === 0){
        password2.textContent = generateRandomPassword(passwordLength)
    }   
}
     

    
    

//console.log("Here is a random password: ", generatedPasswordOne)

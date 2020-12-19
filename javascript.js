var caseArray=[];
let lowerCaseChar=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let upperCaseChar=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
let digitsChar=["1","2","3","4","5","6","7","8","9","0"];
let specialChar=["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];



document.getElementById("password_generator_btn").addEventListener("click", collectPassCriteria);
function collectPassCriteria(){
    var hasDigits =  confirm("Do you want digits in your password ?");
    var hasSpecialChars = confirm("Do you want special characters in your password ?");
    var hasUppercase = confirm("Do you want to use Uppercase characters ?");
    var hasLowercase = confirm("Do you want to use Lowercase characters ?"); 
    var numberOfChars = promptForPasswordLength();
    checkPasswordCriteria(hasDigits, hasSpecialChars, hasUppercase, hasLowercase);
    generatePass(numberOfChars);
    

}

function promptForPasswordLength(){
  var numberOfChars = prompt("How many characters would you like?");
    if (numberOfChars >=8 && numberOfChars <=128){
        return numberOfChars        
    } else {
     var retryPasswordLength = confirm("Not valid characters number. Please insert a number from 8 to 128." )
     if (retryPasswordLength == true){
       return promptForPasswordLength()
        
     } else {
         alert("Your password can't be created. Please refresh your page and try again.")
     }
    }   
}

function checkPasswordCriteria(hasDigits, hasSpecialChars, hasUppercase, hasLowercase) {
    if(hasDigits == true || hasSpecialChars == true || hasUppercase == true || hasLowercase == true){
        prepareCharacters(hasDigits, hasSpecialChars, hasUppercase, hasLowercase)
        
    } else {
        var reconfirmPassCriteria = confirm("No password criteria was selected. Choose at least one.")
        if (reconfirmPassCriteria == true){
            collectPassCriteria()
              
        
        } else {
            alert("No criteria was selected. Please refresh your page and try again.")
        }
    }
}

function prepareCharacters(hasDigits, hasSpecialChars, hasUppercase, hasLowercase){
   
    if(hasDigits == true){
        caseArray.push.apply(caseArray, digitsChar)
    }
    if (hasSpecialChars == true){
        caseArray.push.apply(caseArray, specialChar)
    }
    if (hasUppercase == true){
        caseArray.push.apply(caseArray, upperCaseChar)
    }
    if (hasLowercase == true){
        caseArray.push.apply(caseArray, lowerCaseChar)
    }
}

function generatePass(numberOfChars){

    var password = ""

    for (var i = 0; i < numberOfChars; i++) {
    var randomIndex = Math.floor(Math.random() * (caseArray.length));
    password += caseArray[randomIndex]
    }

    document.getElementById("generated_password").innerHTML = password;
    
    
}


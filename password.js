const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


reader.question("Welcome to the password validator. What is your password:", function(input){
  password = input
  
    
    if(password.length >= 10){
        console.log('Password complete')
    } else {
        console.log('Password Failure ')
    }

    reader.close()

});
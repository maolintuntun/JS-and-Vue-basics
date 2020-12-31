console.log("HELLO FROM THE FIRST FILE");
console.log("goodBye!!!")

const age = 2;
if(age < 5){
    console.log("you are a baby")
}else if(age < 10){
    console.log("you are an adult")
}else{
    console.log("you are an idiot")
}

let random = Math.random();
if(random < 0.5){
    console.log("Today is sATURDAY")
}

const password = prompt("please enter a new password");
if(password.length >= 6){
    if(password.indexOf(' ') === -1){
        console.log("Good job! No space")
    }else{
        console.log("Password cannot contain spaces!")
    }
}else{
    console.log("PASSWORD TOO SHORT!MUST BE 6+ chars");
}



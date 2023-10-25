//Variables for changing text, input, and submit input
let userInputNum = document.getElementById("numInput");
let sumbmitInput = document.getElementById("submit");
let changeText = document.getElementById("textChanges");

//checks the number and puts it into the "The number you entered is:"
function beep(){
    //let userSubmit = parseInt(userInputNum.value);
    document.getElementById("textChanges").innerHTML = document.getElementById('numInput').value
    //changeText.innerText = "The number you entered is: ", userSubmit
}



// function numberCheck(){
//     //checks if there is a valid input (Number vs empty)
//     if (userInputNum === )
// }
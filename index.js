

const tampilan = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function kalkulasi(){
    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "ERROR";
    }
}
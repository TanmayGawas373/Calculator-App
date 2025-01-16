let total;
const displayOutput=document.getElementById('display');
function appendToDisplay(input){
    displayOutput.value+=input;
}
function clearDisplay(){
    displayOutput.value="";
}
function calculate(){
    try{
        total=eval(displayOutput.value);
        clearDisplay();
        displayOutput.value+=total;
    }
    catch(error){
        clearDisplay();
        displayOutput.value+="Error";
    }
}
function Back(){
    let newOutput=displayOutput.value;
    displayOutput.value="";
    displayOutput.value=newOutput.substr(0,(newOutput.length-1));
}
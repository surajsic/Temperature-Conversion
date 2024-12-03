const celToFar = document.getElementById("cel");
const farToCel = document.getElementById("far");
const textbox = document.getElementById("textBox");
const result = document.getElementById("result");
let temp;

function convert(){
    if(celToFar.checked){
        temp = Number(textbox.value);
        temp = temp * 9/ 5 +32;
        result.textContent = temp.toFixed(1);
    }
    else if (farToCel.checked) {
        temp = Number(textbox.value);
        temp = (temp-32) * (5/9);
        result.textContent = temp.toFixed(1);
    }
    else{
        result.textContent ="Select a unit";
    }

}
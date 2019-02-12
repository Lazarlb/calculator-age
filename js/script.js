var elements = {
    p: document.getElementsByTagName('p')[0],
    input1: document.getElementsByName('age')[0],
    input2: document.getElementsByName('age-left')[0],
    button: document.getElementsByTagName('button')[0]
}
var value = elements.input1.value;
elements.input1.onchange = function () {
    value = elements.input1.value;

    elements.button.onclick = function () {
        if(value >= 18 && value<=65){
            elements.input2.value=65 - value;
            elements.p.innerHTML="Nastavite sa radom";
        }else if(value<18){
            elements.input2.value="";
            elements.p.innerHTML="Morate imati 18 godina!";
        }else{
            elements.input2.value="";
            elements.p.innerHTML="Presli ste starosnu granicu!";
        }

}
}
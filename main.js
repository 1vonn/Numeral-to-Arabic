const number = document.getElementById("number")
const error = document.getElementById("error")
const  convertBtn = document.getElementById("convert-button")
const output = document.getElementById("output")

function intToRoman(num) {
    const symbolsList = [
        ["I", 1],
        ["IV", 4],
        ["V", 5],
        ["IX", 9],
        ["X", 10],
        ["XL", 40],
        ["L", 50],
        ["XC", 90],
        ["C", 100],
        ["CD", 400],
        ["D", 500],
        ["CM", 900],
        ["M", 1000],
        ['V\u0305', 5000],
        ['X\u0305', 10000],
        ['L\u0305', 50000],
        ['C\u0305', 100000],
        ['D\u0305', 500000],
        ['M\u0305', 1000000],
    ];
  
    let i = symbolsList.length - 1;
    let roman = "";
    while (num > 0) {
        const currentDivider = symbolsList[i][1];
        const currentSymbol = symbolsList[i][0];
        
        const result = Math.floor(num / currentDivider);
        if (result > 0) {
            let temp = "";
            for (let j = 0; j < result; j++) {
                temp += currentSymbol;
            }
            roman += temp;
            num %= currentDivider;
        }
        i -= 1;
    }
    return roman;
  }
  

function resetInterpratation(){
    output.textContent = "Your output will be displayed here"
}
function conversion (){
    const inputNumber = number.value;
    if (inputNumber === ""){
        error.textContent = "please input a value";
        resetInterpratation();
        return
    }
    if (inputNumber <= 0 || inputNumber >= 4000000){
        error.textContent = "number should be between 4000000 and 1";
        resetInterpratation();
        return;
    }
    else{
        error.textContent= ""
const roman = intToRoman(inputNumber);
output.innerHTML= `${inputNumber} : ${roman}`;
    }
}

convertBtn.addEventListener("click", function(){
    console.log("clicked")
conversion();
});

console.log("HH")
// https://www.calculateme.com/roman-numerals/to-roman/

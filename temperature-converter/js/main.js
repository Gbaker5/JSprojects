//Write your pseduo code first! 

//make an event listener for button
document.querySelector('#F-Convert').addEventListener('click', FtoC)

//create function
function FtoC(){

//take value from input
initialD = Number(document.querySelector('#F-input').value)
console.log(initialD)
//convert number using formula and hold in variable
convertedNum = (9*initialD)/5 +32
console.log(convertedNum)
//display new conversion in dom 
document.querySelector('#Celsius').innerText = `${convertedNum}+ &degree;C`
}
 
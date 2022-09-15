//Write your pseduo code first! 

//C TO F CONVERSION

//make an event listener for button
document.querySelector('#C-Convert').addEventListener('click', CtoF)

//create function
function CtoF(){

//take value from input
initialD = Number(document.querySelector('#C-input').value)
console.log(initialD)
//convert number using formula and hold in variable
convertedNum = (9*initialD)/5 +32
console.log(convertedNum)
oneDecimal = Number(convertedNum.toFixed(1))
console.log(oneDecimal)
//display new conversion in dom 
document.querySelector('#Fahrenheit').innerText = `${oneDecimal}\u00B0F`
}
 
//F TO C CONVERSION

//make an event listener for button
document.querySelector('#F-Convert').addEventListener('click', FtoC)

//create function
function FtoC(){

//take value from input
initialD = Number(document.querySelector('#F-input').value)
console.log(initialD)

//convert number using formula and hold in variable
convertedNum = (initialD-32)*5/9
console.log(convertedNum)
oneDecimal = Number(convertedNum.toFixed(1))
console.log(oneDecimal)
//display new conversion in dom 
document.querySelector('#Celsius').innerText = `${oneDecimal}\u00B0C`
}
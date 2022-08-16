document.querySelector('#yell').addEventListener('click', run)

function run() {
  const fName = document.querySelector('#firstName').value
  const fMidName = document.querySelector('#firstMiddle').value
  const lMidName = document.querySelector('#lastMiddle').value
  const lName = document.querySelector('#lastName').value

  // document.querySelector('#placeToYell').innerText = fName + ' ' + fMidName + ' ' + ' ' + lMidName + ' ' + lName

  //Add what you should be doing - conditionals go here

//have color of name be random 
//document.querySelector('#placeToYell').innerText.color = //variable for random color
  num = Math.random()
  console.log(num)


if(num < 0.2){
  document.querySelector('#placeToYell').style.color = 'red'
}else if(num < 0.4){
  document.querySelector('#placeToYell').style.color = 'blue'
}else if(num < 0.6){
  document.querySelector('#placeToYell').style.color = 'yellow'
}else if(num < 0.8){
  document.querySelector('#placeToYell').style.color = 'green'
}else{
  document.querySelector('#placeToYell').style.color = 'purple'
}

  document.querySelector('#placeToYell').innerText = `${fName} ${fMidName} ${lMidName} ${lName}`
}

// const synth = window.speechSynthesis;
// document.querySelector('#yell').addEventListener('click', run)
//
// function run() {
//   const fName = document.querySelector('#firstName').value
//   const fMidName = document.querySelector('#firstMiddle').value
//   const lMidName = document.querySelector('#lastMiddle').value
//   const lName = document.querySelector('#lastName').value
//
//   const yellText =  `${fName} ${fMidName} ${lMidName} ${lName}`
//
//   document.querySelector('#placeToYell').innerText = yellText
//
//   let yellThis = new SpeechSynthesisUtterance(yellText);
//
//   synth.speak(yellThis);
// }

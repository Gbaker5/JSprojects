//Create a conditonal that checks their age
//If under 16, tell them they can not drive
//If under 18, tell them they can't hate from outside the club, because they can't even get in
//If under 21, tell them they can not drink
//If under 25, tell them they can not rent cars affordably
//If under 30, tell them they can not rent fancy cars affordably
//If under over 30, tell them there is nothing left to look forward too






//--- Harder
//On click of the h1
//Take the value from the input
//Place the result of the conditional in the paragraph

let h1Holder = document.querySelector('button')

h1Holder.addEventListener('click', ageChecker)

function ageChecker(){
    let age = document.querySelector('#danceDanceRevolution').value
    
    if(age < 16){
        document.querySelector('p').innerText = 'You can not drive'
        document.querySelector('.pic1').src = 'img/drive-fast.gif'
        document.querySelector('.pic2').src = 'img/almost-there.gif'
        document.querySelector('.pic3').src = 'img/myneckmyback.gif'
        document.querySelector('.pic4').src = 'img/stillcantdrive.gif'
    }else if(age < 18){
        document.querySelector('p').innerText = 'You can\'t hate from outside of the club, because you cant get in'
        document.querySelector('.pic1').src = 'img/dancingoutside.gif'
        document.querySelector('.pic2').src = 'img/let-me-in.gif'
        document.querySelector('.pic3').src = 'img/conanwindow.gif'
        document.querySelector('.pic4').src = 'img/stuck-behind-bar.gif'   
    }else if(age < 21){
        document.querySelector('p').innerText = 'You can not drink'
        document.querySelector('.pic1').src = ''
        document.querySelector('.pic2').src = ''
        document.querySelector('.pic3').src = ''
        document.querySelector('.pic4').src = ''
    }else if (age < 25){
        document.querySelector('p').innerText = 'You can not rent cars affordably'
        document.querySelector('.pic1').src = ''
        document.querySelector('.pic2').src = ''
        document.querySelector('.pic3').src = ''
        document.querySelector('.pic4').src = ''
    }else if(age < 30){
        document.querySelector('p').innerText = 'You can not rent fancy cards affordably'
        document.querySelector('.pic1').src = ''
        document.querySelector('.pic2').src = ''
        document.querySelector('.pic3').src = ''
        document.querySelector('.pic4').src = ''
    }else{
        document.querySelector('p').innerText = 'There is nothing left to look forward to'
        document.querySelector('.pic1').src = ''
        document.querySelector('.pic2').src = ''
        document.querySelector('.pic3').src = ''
        document.querySelector('.pic4').src = ''
    }

    
}
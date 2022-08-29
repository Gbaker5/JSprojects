//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function savage21(){
    for(let i = 1; i < 22; i++){
    document.querySelector('#savageSays').innerText += " 21"
    }
}
savage21()

const savageSays2 = document.querySelectorAll('.savageSays2')

Array.from(savageSays2).forEach(element => element.addEventListener('click', aLot))
//document.querySelector('button').addEventListener('click', aLot)

function aLot(){
    document.querySelectorAll('.savageSays2').innerText = 'A Lot'
}
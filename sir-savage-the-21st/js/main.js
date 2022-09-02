//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function savage21(){
    for(let i = 1; i < 22; i++){
    document.querySelector('#savageSays').innerText += " 21"
    }
}
savage21()

//Adding a button that inserts texts in multiple locations
document.querySelector('button').addEventListener('click', aLot)

//make an array from text classes
//const savageSays2Holder = Array.from.document.querySelector('.savageSays2')

//or insert a paragraph/li with text

//Array.from(savageSays2).forEach(element => element.addEventListener('click', aLot))


function aLot(){
   // savageSays2Holder.forEach()
    //const spanny = document.createElement('span')
    //spanny.textContent = 'A lot' 
    let para = Array.from(document.getElementsByClassName('savageSays2'))
    let text = 'a lot'
    console.log(para)
    
    para.forEach( obj => {
        obj.innerText= text
    })
    
    
    //para.appendChild(spanny)
    //
   

    //console.log(para)
    //document.querySelector('.savageSays2').innerText = 'A Lot'
    console.log('A lot')
    //console.log(savageSays2Holder)
}
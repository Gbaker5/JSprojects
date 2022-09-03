//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function savage21(){
    for(let i = 1; i < 22; i++){
    document.querySelector('#savageSays').innerText += " 21"
    }
}
savage21()


//Adding a button that will insert texts in multiple locations
document.querySelector('button').addEventListener('click', aLot)

function aLot(){
   //make an array from text classes
    let para = Array.from(document.getElementsByClassName('savageSays2'))
    console.log(para)
    
    //declare variable for insert text
    let text = 'A lot'
    
    //iterate through each item in array and insert text
    para.forEach( obj => {
        obj.innerText= text
    })
    
    console.log('A lot')

}
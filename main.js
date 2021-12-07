

// declaro as variáveis
const addToDobutton = document.getElementById('addToDo')
const ToDowrapper = document.getElementById ('ToDowrapper')
const inputField = document.getElementById('inputField')
const toDos = document.getElementsByClassName('toDos')
const inputTask_keypress =

// Input the new To DO

addToDobutton.addEventListener('click',function(){ //add the new event
    var paragraph = document.createElement('p')  //include the new paragraph
    paragraph.innerText = inputField.value // the valeu include
    paragraph.classList.add('paragraph-styling')
    ToDowrapper.appendChild(paragraph)
    inputField.value="" // whwn input the to do, clear de input 

    
    paragraph.addEventListener('click', function(){ //add the new event
        paragraph.style.textDecoration ="line-through"
      
                    
    })

    li.addEventListener('click',function(){
      dot.style.textDecoration = "line-through"

    })
    
  paragraph.addEventListener('dblclick',function(){ //add the new event
    ToDowrapper.removeChild(paragraph) // remove the paragraph
  })


     
  
})
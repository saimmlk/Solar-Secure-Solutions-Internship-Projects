function addtolist()
{
    let EnterTask=document.getElementById("task").value ;
    let myTask=document.getElementById('mytask')

    let div=document.createElement('div');
      let addedTask=document.createElement('li')
      addedTask.innerHTML=EnterTask;
      let dltBut = document.createElement('i')
      dltBut.classList.add('fa-solid')
      dltBut.classList.add('fa-trash')

      div.appendChild(addedTask)
      div.appendChild(dltBut)
    
    myTask.appendChild(div)
}

// **Important
let todoDiv=document.getElementById('mytask')
todoDiv.addEventListener('click', dltTask)
function dltTask(e){
    const eventElem=e.target
    if(eventElem.classList[0]=="fa-solid")
    {
        eventElem.parentElement.remove()
    }

}
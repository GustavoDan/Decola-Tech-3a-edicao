let button = document.querySelector("#add")
let input = document.querySelector("#task-input")
let list = document.querySelector("#tasks")

function addToList(){
    let container = document.createElement("div")
    container.classList.add("task-item")
    
    let checkBox = document.createElement("input")
    checkBox.type = "checkbox"
    
    let newTask = document.createElement("label")
    newTask.classList.add("text")
    
    let text = document.createElement("span")
    text.innerText = input.value
    
    newTask.append(checkBox)
    newTask.append(text)

    container.append(newTask)
    
    list.append(container)
}

button.addEventListener("click", addToList)
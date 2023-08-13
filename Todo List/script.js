const inputBox = document.getElementById("input-box");
// list contianer hold todo tasks
const listContainer = document.getElementById("list-container");

// Function to add task todo list
function addTask() {
    // if someone do not write anything in input box and press add btn
    if(inputBox.value === '') {
        alert("Write Something")
    } else {
        // If someone addTask
        // create element li  dynamically
        let li = document.createElement("li");
        // setting li conttent == inbut box content
        li.innerHTML = inputBox.value;
        // adding child to list container
        listContainer.append(li);

        // delete todo icon in forward to todo task
        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    // After adding the task to list container, by pressing add 
    // empty the input box
    inputBox.value = "";
    saveData(); // save data in localstorage
}



// Enter key event to add task
inputBox.addEventListener("keydown",(event)=>{
    if(event.key == "Enter") {
        addTask();
    }
})

// adding event on list items
listContainer.addEventListener("click",(e)=> {
    // tagname should be in capital
    if(e.target.tagName === "LI") {
        // toggle class checked
        e.target.classList.toggle("checked");
        saveData(); // savedata after checked the todo
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); // savedata after remove the todo
    }
});

// Function to saveData
const saveData = () => {
    localStorage.setItem("data",listContainer.innerHTML);
}
// Function to showdata
const showList = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
// showing list item after opening browser or refreshing browser
showList();

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("Write Something")
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.append(li);

        let span = document.createElement("span"); 
        span.innerHTML = "\u00d7";
        li.append(span);
    }
    inputBox.value = "";
    saveData();
}


inputBox.addEventListener("keydown",(event)=>{
    if(event.key == "Enter") {
        addTask();
    }
})

listContainer.addEventListener("click",(e)=> {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});

const saveData = () => {
    localStorage.setItem("data",listContainer.innerHTML);
}
const showList = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showList();

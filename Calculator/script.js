let input = document.getElementsByClassName('inputBox')[0];
let buttons = document.querySelectorAll('button');

let result = "";

Array.from(buttons).forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        // To print event is occured by which device
        // console.log(e.pointerType);
        if(e.target.innerHTML === "=") {
            result = eval(result);
            input.value = result;
        } else if(e.target.innerHTML == 'AC') {
            result = "";
            input.value = result;
        } else if(e.target.innerHTML == 'DEL') {
            result = result.slice(0,result.length-1);
            input.value = result;
        } else {
            result += e.target.innerHTML;
            input.value = result;
        }  
    })
});
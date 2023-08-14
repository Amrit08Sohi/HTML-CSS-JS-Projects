// Setting passwrod length slider
const sliderValue = document.getElementById('sliderValue');
const rangeSlider = document.getElementById('rangeSlider');
sliderValue.innerText = rangeSlider.value;
// Add input eventListener to slider
rangeSlider.addEventListener('input', () => {
    sliderValue.innerText = rangeSlider.value;
});

// Password generate code

const genBtn = document.getElementById('genBtn');
const pass_box = document.getElementById('pass-box');
// Add click eventListener to btn

genBtn.addEventListener('click', ()=>{
    pass_box.value = generatePassword();
});

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();
let digits = "0123456789";
let symbols = "@`~!#$%^&";
const upper_case = document.getElementById('upperCase');
const lower_case = document.getElementById('lowerCase');
const _digits = document.getElementById('digits');
const _symbols = document.getElementById('symbols');

let generatePassword = () => {
    let password = "";
    let currChars = "";

    currChars += upper_case.checked ? upperCase : ""; 
    currChars += lower_case.checked ? lowerCase : ""; 
    currChars += _digits.checked ? digits : "";
    currChars += _symbols.checked ? symbols : ""; 

    let pass_length = parseInt(rangeSlider.value);
    let currChars_length = currChars.length;
    if(currChars_length != 0) {
        for(let i = 1; i <= pass_length; i++) {
            password += currChars[Math.floor(Math.random() * currChars_length)];
        }
    }    
    return password;
}

const copyIcon = document.getElementById('copyIcon');
copyIcon.addEventListener('click',()=>{
    if(pass_box.value != "" || pass_box.value.length != 0) {
        navigator.clipboard.writeText(pass_box.value);
        copyIcon.title = 'Password copied'
        copyIcon.innerHTML = "check";
        
        setTimeout(()=> {
            copyIcon.title = "";
            copyIcon.innerHTML = "content_copy";
        },2000);
    }
})



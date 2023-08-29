const show_pass = $('#show-pass'); 
const password = $('#password')
show_pass.click(function(){
    // console.log($('#show-pass').text());
    let text = $('#show-pass').text();
    if(text == 'visibility') {
        show_pass.text('visibility_off');
        password.attr('type', 'password');
    } else {
        show_pass.text('visibility');
        password.attr('type', 'text');
    }  
})


const show_pass_signup = $('#show-pass-signup'); 
const password_signup = $('#passWord')
show_pass_signup.click(function(){
    let text = $('#show-pass-signup').text();
    if(text == 'visibility') {
        show_pass_signup.text('visibility_off');
        password_signup.attr('type', 'password');
    } else {
        show_pass_signup.text('visibility');
        password_signup.attr('type', 'text');
    }
})

let c = 1;
const front = $('#front');
const back = $('#back');

function signUp() {
    if(c%2!=0) {
        front.css("transform" , "rotatey(-180deg)");
        back.css("transform" , "rotatey(0deg)");
        back.css('height','115%');
        back.css('width','105%');
        c++;
    } else {
        front.css("transform" , "rotatey(0deg)");
        back.css("transform" , "rotatey(180deg)");
        back.css('height','100%');
        back.css('width','100%');
        c++;
    }
}




/* <script>
        // Flip Logic
        let c=1;
        const f= document.querySelector('#front');
        const b=document.querySelector('#back');
        function sign_up(){
            if(c%2!=0){
                f.style.transform =" rotatey(-180deg)";
                b.style.transform=" rotatey(0deg)";
                c++;
            }
            else{
                f.style.transform =" rotatey(0deg)";
                b.style.transform=" rotatey(180deg)";
                c++;
            }
        }


        // Password type change logic
        const show_pass = document.querySelector('.show-pass');
        const loginPass = document.getElementById('password');
        show_pass.addEventListener('click',changeType)

        function changeType ()  {
            let text = this.innerText;
            //console.log(text);
            // this refer to show_pass
            if(text==="visibility_off") {
                this.innerText = 'visibility';
                loginPass.type = 'text'
            } else {
                this.innerText = 'visibility_off';
                loginPass.type = 'password' 
            }
        }
        const signUpPass = document.getElementById('passWord');
        const show_pass2 = document.querySelector('.show-pass2');

        show_pass2.addEventListener('click',changeType2)

        function changeType2 ()  {
            let text = this.innerText;
            // this refer to show_pass2
            if(text==="visibility_off") {
                this.innerText = 'visibility';
                signUpPass.type = 'text'
            } else {
                this.innerText = 'visibility_off';
                signUpPass.type = 'password' 
            }
        }

    </script> */

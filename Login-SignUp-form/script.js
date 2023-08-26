const show_pass = $('#show-pass'); 
const password = $('#pass-field')
console.log(password);
show_pass.click(function(){
    // console.log($('#show-pass').text());
    let text = $('#show-pass').text();
    if(text == 'visibility') {
        $('#show-pass').text('visibility_off');
        // console.log(text);
        $('#pass-field').attr('type', 'password');
    } else {
        $('#show-pass').text('visibility');
        $('#pass-field').attr('type', 'text');

    }
})

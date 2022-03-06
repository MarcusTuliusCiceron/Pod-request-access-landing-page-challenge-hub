
function validateEmail(email) 
{
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

document.querySelector('.button_real').addEventListener('click', event => {
    console.log('click');
    if (validateEmail(document.querySelector('#input-email').value)){
        console.log('email valid')
        document.querySelector('.confirmation').classList = 'confirmation visible valid';
        onsole.log(document.querySelector('.confirmation').classList);
        document.querySelector('.confirmation').textContent = 'Email sent';

    }
    else{
        console.log('email invalid')
        document.querySelector('.confirmation').classList = 'confirmation visible invalid';
        onsole.log(document.querySelector('.confirmation').classList);
        //document.querySelector('.confirmation').textContent = 'Email sent';
    }
    document.querySelector('.confirmation').classList.remove('visible');
})
document.querySelector('#input-email').addEventListener('change', function(){
    console.log('it worked')
    
})



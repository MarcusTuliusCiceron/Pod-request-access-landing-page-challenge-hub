document.querySelector('.button_real').addEventListener('click', event => {
    console.log('click');
    document.querySelector('.error').classList.remove('visible');
})
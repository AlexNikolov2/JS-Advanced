function toggle() {
    let button = document.querySelector('.button');

    let extra = document.querySelector('#extra');

    console.log(extra.style.display)


    extra.style.display = extra.style.display == 'none' 
    || extra.style.display == '' 
    ? 'block' : 'none';
    button.textContent = button.textContent == 'More' ? 'Less' : 'More'
}
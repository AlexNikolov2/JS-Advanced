function solve() {
    let inputElements = document.querySelectorAll('#container > input')
    let [nameElement, hallElement, priceElement] = Array.from(inputElements);
 
    let buttonElement = document.querySelector('#container > button')
    let moviesUlEl = document.querySelector('#movies > ul')
    let archiveUlEl = document.querySelector('#archive > ul')
    let clearEl = document.querySelector('#archive > button')
 
    buttonElement.addEventListener('click', (e) => {
        e.preventDefault()
 
        if (nameElement.value == '' || hallElement.value == '' || priceElement.value == '' || isNaN(Number(priceElement.value))) {
            return;
        }
 
        let liEl = document.createElement('li')
        let spanEl = document.createElement('span')
        spanEl.textContent = nameElement.value;
 
        let hallStrongEl = document.createElement('strong')
        hallStrongEl.textContent = `Hall: ${hallElement.value}`
 
        liEl.appendChild(spanEl)
        liEl.appendChild(hallStrongEl)
 
        let divEl = document.createElement('div')
        let priceStrongEl = document.createElement('strong')
        priceStrongEl.textContent = priceElement.value;
 
        let inputEl = document.createElement('input')
        inputEl.setAttribute('placeholder', 'Tickets Sold')
 
        let archiveButtonElement = document.createElement('button')
        archiveButtonElement.textContent = 'Archive'
 
        divEl.appendChild(priceStrongEl)
        divEl.appendChild(inputEl)
        divEl.appendChild(archiveButtonElement)
        liEl.appendChild(divEl)
 
        moviesUlEl.appendChild(liEl);
 
        let price = priceElement.value;
 
        nameElement.value = ''
        hallEl.value = ''
        priceElement.value = ''
        
 
        archiveButtonElement.addEventListener('click', e => {
            if (inputEl.value == '' || isNaN(Number(inputEl.value))) {
                return;
            }
 
            hallStrongEl.remove()
            divEl.remove()
            
            let profitStrongEl = document.createElement('strong')
            profitStrongEl.textContent = `Total amount: ${(Number(price) * Number(inputEl.value)).toFixed(2)}`
 
            let deleteButton = document.createElement('button')
            deleteButton.textContent = 'Delete'
            
 
            liEl.appendChild(profitStrongEl)
            liEl.appendChild(deleteButton)
            
            archiveUlEl.appendChild(liEl)
            
            deleteButton.addEventListener('click', e => {
                liEl.remove();
            });
        })
    })
 
    clearEl.addEventListener('click', e => {
        archiveUlEl.innerHTML = '';
    })
}
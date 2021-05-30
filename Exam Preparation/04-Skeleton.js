function solve(){
    //add buttons
    const taskElement = document.getElementById('task');
    const descriptionElement = document.getElementById('description');
    const dateElement = document.getElementById('date');
    const addElement = document.getElementById('add');

    //define other buttons
    const sections = document.querySelectorAll('section');
    const openElement = sections.item(1).querySelectorAll('div').item(1);
    const progressElement = sections.item(2).querySelectorAll('div').item(1);
    const completeElement = sections.item(3).querySelectorAll('div').item(1);

    //event listeners
    addElement.addEventListener('click', events);
        
    //the function
    function events(){
        events.preventDefault()
        if (!taskElement.value || !descriptionElement.value || !dateElement.value) {
            return;
        }

        const articleElement = document.createElement('article');
        const h3Element = document.createElement('h3');
        h3Element.textContent = taskElement.value;

        const p1Element = document.createElement('p');
        p1Element.textContent = `Description: ${descriptionElement.value}`
        const p2Element = document.createElement('p')
        p2Element.textContent = `Due Date: ${dateElement.value}`
        const flexElement = document.createElement('div');
        flexElement.classList.add('flex');
        const firstButton = document.createElement('button');
        firstButton.classList.add('green');
        firstButton.textContent = 'Start'

        const secondButton = document.createElement('button')
        secondButton.classList.add('red');
        secondButton.textContent = 'Delete';

        flexElement.appendChild(firstButton);
        flexElement.appendChild(secondButton);
 
        articleElement.appendChild(h3Element);
        articleElement.appendChild(p1Element);
        articleElement.appendChild(p2Element);
        articleElement.appendChild(flexElement);
 
        openElement.appendChild(articleElement);

        secondButton.addEventListener('click', () => {
            articleElement.remove();
        })
        firstButton.addEventListener('click', () => {
            firstButton.classList.remove('green');
            firstButton.classList.add('red');
            firstButton.textContent = 'Delete';
    
            secondButton.classList.remove('red');
            secondButton.classList.add('orange');
            secondButton.textContent = 'Finish';
    
            progressElement.appendChild(articleElement);
        })
        firstButton.addEventListener('click', () => {
            articleElement.remove();
        })
    
        secondButton.addEventListener('click', () => {
            flexElement.remove();
            completeElement.appendChild(articleElement);
        })
    }

    


    



}
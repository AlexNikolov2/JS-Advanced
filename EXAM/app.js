function solve(){
   const author = document.getElementById('creator');
   const title = document.getElementById('title');
   const category = document.getElementById('category');
   const content = document.getElementById('content');
   const sectionElement = document.getElementsByTagName('section')[1];
   const archive = document.getElementsByClassName('ol')[0]
   const createButton = document.getElementsByClassName('btn create')[0];

   createButton.addEventListener('click', x => {
      x.preventDefault();
      const articleElement = document.createElement('article');
      const h1Element = document.createElement('h1');
      h1Element.textContent = title.value;
      const p1Element = document.createElement('p'); 
      p1Element.textContent = `Category:<strong>${category.value}</strong>`;
     
      const p2Element = document.createElement('p');
      p2Element.textContent = `Creator:<strong><${author.value}</strong>`;
      
      const p3Element = document.createElement('p');
      p3Element.textContent = content.value;
      const divElement = document.createElement('div');
      divElement.classList.add('buttons');
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('btn');
      deleteButton.classList.add('delete');
      deleteButton.textContent = 'Delete'
      deleteButton.addEventListener('click', e =>{
         articleElement.remove()
      });

      sectionElement.appendChild(articleElement);
      articleElement.appendChild(h1Element);
      articleElement.appendChild(p1Element);
      articleElement.appendChild(p2Element);
      articleElement.appendChild(p3Element);
      articleElement.appendChild(divElement);
      articleElement.appendChild(deleteButton);
      const archiveButton = document.createElement('button');
      archiveButton.classList.add('btn');
      archiveButton.classList.add('archive');
      archiveButton.textContent = 'Archive'
      archiveButton.addEventListener('click', y =>{
         const olElement = document.getElementsByTagName('ol')[0]
         const liElement = document.createElement('li');
         liElement.textContent = title.value;
         olElement.appendChild(liElement);
         Array.from(liElement)
         .sort((a,b) => a.textContent.localeCompare(b.textContent))
         .forEach(m => olElement.appendChild(m))
         articleElement.remove(archive)
         
      })
   })
}

function create(words) {
   for (const word of words) {
      const division = document.createElement('div');
      const p = document.createElement('p');
      p.textContent = word;
      p.style.display = 'none';
      division.appendChild(p)
      division.addEventListener('click', function() {
      p.style.display = 'block';
     });
     let content = document.getElementById('content');
      content.appendChild(division);
   }
}
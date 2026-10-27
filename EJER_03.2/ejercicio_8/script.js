function ordenarLista() {
    const ul = document.getElementById('lista-ordenar');
    const itemsNodeList = ul.querySelectorAll('li');
    const itemsArray = Array.from(itemsNodeList);
    
    itemsArray.sort((a, b) => a.textContent.localeCompare(b.textContent));
    ul.innerHTML = '';
    itemsArray.forEach(li => ul.appendChild(li));
}
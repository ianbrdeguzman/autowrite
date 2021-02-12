let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, repellendus!'
let index = 0;


setInterval(() => {
    const container = document.querySelector('.app-container');
    const array = text.split('');

    container.innerHTML += array[index];
    
    
    if(index > array.length - 1) {
        index = 0;

        container.innerHTML = '';

        return;
    }
    index++;

}, 200);

const draggable_items = document.querySelectorAll('.draggable_items');
const container = document.querySelector('.container');
const text = document.querySelector('.text');

draggable_items.forEach(draggable => {
    draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging')
    })

    draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging')
    })
})

container.addEventListener('dragover', (e) => {
    container.style.height = '100%';
    text.style.display = 'none';
    e.preventDefault()
    const current_draggable_item = document.querySelector('.dragging');
    container.append(current_draggable_item)
})  
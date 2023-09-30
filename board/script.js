let zIndexCounter = 0;

function createNote(x, y) {
    const note = document.createElement('div');
    note.className = 'note';
    note.style.left = x + 'px';
    note.style.top = y + 'px';
    note.style.zIndex = zIndexCounter++;

    const titleInput = document.createElement('input');
    titleInput.className = 'title-input';
    titleInput.placeholder = 'Title';

    const textInput = document.createElement('textarea');
    textInput.className = 'text-input';
    textInput.placeholder = 'Text';

    const deleteBtn = document.createElement('div');
    deleteBtn.className = 'delete-btn';
    deleteBtn.innerHTML = 'X';
    deleteBtn.onclick = function () {
        note.remove();
    };

    note.appendChild(titleInput);
    note.appendChild(textInput);
    note.appendChild(deleteBtn);

    document.getElementById('board').appendChild(note);

    makeDraggable(note);
}

function makeDraggable(element) {
    let offsetX, offsetY, isDragging = false;

    element.addEventListener('mousedown', function (e) {
        isDragging = true;
        offsetX = e.clientX - element.getBoundingClientRect().left;
        offsetY = e.clientY - element.getBoundingClientRect().top;
    });

    document.addEventListener('mousemove', function (e) {
        if (!isDragging) return;
        element.style.left = e.clientX - offsetX + 'px';
        element.style.top = e.clientY - offsetY + 'px';
    });

    document.addEventListener('mouseup', function () {
        isDragging = false;
    });
}

document.getElementById('board').addEventListener('contextmenu', function (e) {
    e.preventDefault();
    createNote(e.pageX, e.pageY);
});

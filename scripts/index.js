
const createButton = document.querySelector('.create-button');
const createpostModal = document.getElementById('createpost-modal');
const createpostCloseButton = createpostModal.querySelector('.close');
const createpostModalButton = document.getElementById('createpost-modal-button');

createButton.addEventListener('click', () => {
    createpostModal.style.display = 'block';
});

createpostCloseButton.addEventListener('click', () => {
    createpostModal.style.display = 'none';
});

createpostModalButton.addEventListener('click', (event) => {
    event.preventDefault();
    createpostModal.style.display = 'none';
});




const input = document.querySelector('input');
const add = document.querySelector('.add');
const list=document.querySelector('.list')

add.addEventListener('click', function () {
    let inputValue = input.value.trim();
    if (!inputValue) return alert('Write something!');

    let li = document.createElement('li');
    li.innerHTML = `${inputValue} 
        <button class="edit"><i class="fa-solid fa-pen"></i></button> 
        <button class="delete-button"><i class="fa-solid fa-trash"></i></button>`;

    let deleteButton = li.querySelector('.delete-button');
    deleteButton.addEventListener('click', () => li.remove());

    let updateButton = li.querySelector('.edit');
    updateButton.addEventListener('click', function () {
        let updateInput = document.createElement('input');
        updateInput.value = li.firstChild.textContent.trim();
        let saveButton = document.createElement('button');
        saveButton.innerHTML = '<i class="fa-solid fa-check"></i>';

        li.innerHTML = '';
        li.append(updateInput, saveButton);

        saveButton.addEventListener('click', function () {
            if (updateInput.value.trim()) {
                li.innerHTML = `${updateInput.value} 
                    <button class="edit"><i class="fa-solid fa-pen"></i></button> 
                    <button class="delete-button"><i class="fa-solid fa-trash"></i></button>`;

                li.querySelector('.delete-button').addEventListener('click', () => li.remove());
                li.querySelector('.edit').addEventListener('click', () => updateButton.click());
            }
        });
    });

    list.appendChild(li);
    input.value = '';
});

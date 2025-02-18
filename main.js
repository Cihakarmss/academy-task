const input = document.querySelector('input');
const add = document.querySelector('.add');
const list=document.querySelector('.list')

add.addEventListener('click',function () {
    let li = document.createElement('li');
    let inputValue=input.value
    if (inputValue.trim()!=='') {
        li.innerHTML = `${inputValue} <button class="delete-button"><i class="fa-solid fa-trash"></i></button>`; 

        let deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            li.remove(); 
        });

        list.appendChild(li);
        input.value = ''
    }
    else{
        alert('Write something!')
    }
})



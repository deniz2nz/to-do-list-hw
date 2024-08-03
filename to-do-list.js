

// document.getElementById('add-btn').addEventListener('click', function() {

   
//     const input = document.getElementById('todo-input');
//     const inputValue = input.value.trim();

//     if (inputValue === '') {
//         showToast('Bir şeyler yazin!',"error");
//     } else {
//         addTodoItem(inputValue);
//         input.value = '';
//         showToast('Eklendi!',"success");
//     }
// });

document.getElementById('add-btn').addEventListener('click', clicker);
 function clicker() {

    const input = document.getElementById('todo-input');
    const inputValue = input.value.trim();

    if (inputValue === '') {
        showToast('Bir şeyler yazin!',"error");
    } else {
        addTodoItem(inputValue);
        input.value = '';
        showToast('Eklendi!',"success");
    }
}


document.getElementById('todo-input').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
       clicker() ;
    }
});

function addTodoItem(text) {
    const li = document.createElement('li');
    li.textContent = text;

    li.addEventListener('click', function() {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Sil';
    deleteBtn.addEventListener('click', function() {
        li.remove();
        showToast('Silindi!','success');
    });

    li.appendChild(deleteBtn);
    document.getElementById('todo-list').appendChild(li);
}

function showToast(message, type) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = "toast show";

    if (type === "error") {
        toast.style.backgroundColor = "#d90734";
      } else if (type === "success") {
        toast.style.backgroundColor = "green";
      }

    setTimeout(() => {
      toast.className = toast.className.replace("show", "");
    }, 3000);
  }
  
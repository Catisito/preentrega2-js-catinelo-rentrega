window.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input');
  const addBtn = document.querySelector('.btn-add');
  const ul = document.querySelector("ul");
  const empty = document.querySelector('.empty')

  // Array para almacenar las tareas
  let tasks = [];

  addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let text = input.value;

    if (text !== '') {
      let task = {
        text: text,
        completed: false
      };

      tasks.push(task);

      renderTasks();

      input.value = "";
      empty.style.display = "none";
    } else {
      alert('Ingrese una tarea :)');
    }
  });

  function renderTasks() {
    ul.innerHTML = "";

    tasks.forEach((task, index) => {
      let li = document.createElement('li');
      li.innerHTML = `
        <p>${task.text}</p>
        <button class="btn-delete">X</button>
      `;

      if (task.completed) {
        li.classList.add('completed');
      }

      ul.appendChild(li);
    });

    if (tasks.length === 0) {
      empty.style.display = "block";
    }
  }

  ul.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-delete')) {
      let li = e.target.parentElement;
      let index = Array.from(li.parentElement.children).indexOf(li);
      tasks.splice(index, 1);
      renderTasks();
    }
  });
});
const todoForm = document.getElementById('todo-form');
const taskInput = document.getElementById('task-input');
const todoList = document.getElementById('todo-list');

function createTodoItem(text) {
  const listItem = document.createElement('li');
  listItem.className = 'todo-item';

  const left = document.createElement('div');
  left.className = 'todo-left';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  checkbox.addEventListener('change', () => {
    listItem.classList.toggle('done', checkbox.checked);
  });

  const deleteButton = document.createElement('button');
  deleteButton.className = 'delete-btn';
  deleteButton.textContent = '🗑';

  deleteButton.addEventListener('click', () => {
    todoList.removeChild(listItem);
  });

  left.appendChild(checkbox);
  left.appendChild(span);

  listItem.appendChild(left);
  listItem.appendChild(deleteButton);

  return listItem;
}

todoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const value = taskInput.value.trim();
  if (!value) return;

  const item = createTodoItem(value);
  todoList.appendChild(item);

  taskInput.value = '';
});
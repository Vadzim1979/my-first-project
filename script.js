// Функция для добавления задачи в список
function addTodo(text) {
  const list = document.getElementById('todo-list');
  const li = document.createElement('li');
  li.textContent = text;

  const btn = document.createElement('button');
  btn.textContent = 'Удалить';
  btn.addEventListener('click', () => li.remove());

  li.appendChild(btn);
  list.appendChild(li);
}

// Обработчик нажатия Enter в поле ввода
document.getElementById('todo-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && this.value.trim() !== '') {
    addTodo(this.value.trim());
    this.value = '';
  }
});

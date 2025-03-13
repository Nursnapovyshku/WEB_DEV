const todoForm = document.querySelector('.add');
const todoInput = document.querySelector('.inputText');
const todoItemsList = document.querySelector('.todo-items');
const clearAllButton = document.querySelector('.clear-all'); // добавляем кнопку "Удалить все"

let todos = [];

// Добавление задачи
todoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (!todoInput.value.trim()) return alert("Введите текст");

    addTodo(todoInput.value);
});

// Функция добавления задачи
function addTodo(item) {
    const todo = {
        id: Date.now(),
        name: item,
        completed: false
    };

    todos.push(todo);
    addToLocalStorage(todos);
    todoInput.value = '';
}

// Рендеринг списка задач
function renderTodos(todos) {
    todoItemsList.innerHTML = ''; 

    todos.forEach(function(item) {
        const checked = item.completed ? 'checked' : '';
        const li = document.createElement('li');

        li.setAttribute('class', 'item');
        li.setAttribute('data-key', item.id);

        if (item.completed) {
            li.classList.add('checked');
        }

        li.innerHTML = `
            <input type="checkbox" class="checkbox" ${checked}>
            ${item.name}
            <button class="delete-button"><i class="fas fa-trash fa-2x" id="trash"></i></button>
        `;

        todoItemsList.append(li);
    });
}

// Сохранение в localStorage
function addToLocalStorage(todos) {
    localStorage.setItem('todos', JSON.stringify(todos));
    renderTodos(todos);
}

// Получение из localStorage
function getFromLocalStorage() {
    const reference = localStorage.getItem('todos');
    if (reference) {
        todos = JSON.parse(reference);
        renderTodos(todos);
    }
}

getFromLocalStorage();

// Обработчик кликов по списку
todoItemsList.addEventListener('click', function(event) {
    if (event.target.classList.contains('checkbox')) {
        toggle(event.target.parentElement.getAttribute('data-key'));
    }

    if (event.target.classList.contains('delete-button') || event.target.id === "trash") {
        deleteTodo(event.target.closest('.item').getAttribute('data-key'));
    }
});

// Переключение выполнения задачи
function toggle(id) {
    todos = todos.map(todo => todo.id == id ? { ...todo, completed: !todo.completed } : todo);
    addToLocalStorage(todos);
}

// Удаление задачи
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id != id);
    addToLocalStorage(todos);
}

// Очистка всех задач
clearAllButton.addEventListener('click', function() {
    clearAllTodos();
});

function clearAllTodos() {
    todos = [];
    addToLocalStorage(todos);
}

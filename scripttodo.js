"use strict"
const todosNode = document.querySelector('.js-todos');
const inputNode = document.querySelector('.js-input');
const buttonNode = document.querySelector('.js-button');
let todos = [];

function addTodo(task) {
    const todo = {
        text:task,
        done: false,
        id:`${Math.random()}`
    };
    todos.push(todo);
}

function deleteTodo(id) {
    todos.forEach(todo => {
        if(todo.id === id) {
            todo.done=true;
        }
    });
}

function render() {
    console.log(todos);
    let html = '';
   
    todos.forEach(todo => {
        if (todo.done) {
            return;
        };

        html += `
            <div> 
                <button data-id='${todo.id}'>Сделано</button>
                ${todo.text}</div>
        `;
        
       todosNode.innerHTML = html;
    })
}

buttonNode.addEventListener('click', () => {
    const text = inputNode.value;
    
    if(inputNode.value==0) {
        return;
    }
    addTodo(text);

    render();
});

todosNode.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const id = event.target.dataset.id;

    deleteTodo(id);

    render(); 
    
})

render();


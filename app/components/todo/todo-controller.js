import TodoService from "./todo-service.js";

const _todoService = new TodoService()

function _drawTodos() {
	let todos = _todoService.Todos
	console.log("draw todos")
	let template = ''
	todos.forEach(todo => {
		template += todo.Template
	})
	document.getElementById('todos').innerHTML = template
}

function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
	//document.querySelector('#todo-error').textContent = `${_todoService.TodoError.message}`
}


export default class TodoController {
	constructor() {
		_todoService.addSubscriber('todos', _drawTodos)
		_todoService.addSubscriber('error', _drawError)

		_todoService.getTodos()

	}

	addTodo(event) {
		event.preventDefault()
		var form = event.target
		var todo = {
			description: form.description.value,
		}
		_todoService.addTodo(todo)
	}

	toggleTodoStatus(todoId) {
		_todoService.toggleTodoStatus(todoId)
	}

	removeTodo(todoId) {
		_todoService.removeTodo(todoId)

	}



}

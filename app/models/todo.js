export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    <div class="form-check form-check-inline">
			<input class="form-check-input" type="checkbox" ${this.completed ? "checked" : ""} onchange="app.controllers.todoController.toggleTodoStatus('${this._id}')">
			<label class="form-check-label ${this.completed ? 'strike' : ''}">${this.description}</label>
      <button class="btn" onclick="app.controllers.todoController.removeTodo('${this._id}')">
        <i class="fas fa-dumpster-fire")></i>
      </button>
		</div>
    `
  }
}
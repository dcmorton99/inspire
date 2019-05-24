export default class Todo {
  constructor(data) {
    this._id = data._id
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
  }

  get Template() {
    return `
    <div class="form-check">
			<input class="form-check-input" type="checkbox" ${this.completed ? "checked" : ""}>
			<label class="form-check-label">${this.description}</label>
      <i class="fas fa-dumpster"></i>
		</div>
    `
  }
}
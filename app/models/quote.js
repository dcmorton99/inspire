export default class Quote {
  constructor(data) {
    this.body = data.quote.body
    this.author = data.quote.author

  }

  get Template() {
    return `
			<div class="card">
				<div class="card-header">
					Quote
				</div>
				<div class="card-body">
					<blockquote class="blockquote mb-0">
						<p>${this.body}</p>
						<footer class="blockquote-footer">${this.author}</footer>
					</blockquote>
				</div>
			</div>
    `
  }
}


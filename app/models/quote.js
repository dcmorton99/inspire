export default class Quote {
	constructor(data) {
		this.body = data.quote.body
		this.author = data.quote.author

	}

	get Template() {
		return `
		<h3>${this.body}</h3>
		<h5>-${this.author}</h5>	
    `
	}
}


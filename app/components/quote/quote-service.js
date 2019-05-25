import Quote from "../../models/quote.js";

// @ts-ignore
const _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: {}
}

let _subscribers = {
	quote: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn());
}


export default class QuoteService {

	addSubscribers(propName, fn) {
		_subscribers[propName].push(fn)
	}

	get Quote() {
		return _state.quote
	}

	getQuote() {
		_quoteApi.get().then(res => {
			_setState('quote', new Quote(res.data))
		})


	}
}


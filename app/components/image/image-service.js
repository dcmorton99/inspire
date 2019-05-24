import Image from "../../models/image.js";

Image

// @ts-ignore
const imgApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	image: {}
}

let _subscribers = {
	image: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn());
}

export default class ImageService {
	constructor() { }

	get Image() {
		return new Image(_state.image)
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getImage() {
		imgApi.get()
			.then(res => {
				let image = new Image(res.data)
				_setState('image', image)
			})
			.catch(e => console.error(e))
	}
}
import ImageService from "./image-service.js";

const _imageService = new ImageService()

function _drawImage() {
  let image = _imageService.Image

  document.querySelector('#bg-image').style.backgroundImage = `url('${_imageService.Image.large_url}')`
}

export default class ImageController {
  constructor() {
    _imageService.addSubscriber('image', _drawImage)
    _imageService.getImage()

  }


}


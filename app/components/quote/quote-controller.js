import QuoteService from "./quote-service.js";

let _quoteService = new QuoteService()

function _drawQuote() {
  let quote = _quoteService.Quote
  let template = quote.Template

  document.getElementById('quote').innerHTML = template
}

export default class QuoteController {
  constructor() {
    _quoteService.addSubscribers('quote', _drawQuote)
    _quoteService.getQuote()
  }

}

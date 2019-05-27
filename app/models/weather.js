export default class Weather {
  constructor(data) {
    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = parseInt(data.main.temp - 273.15)
    this.farenheit = parseInt(data.main.temp * (9 / 5) - 459.67)
  }

  get Template() {
    return `
    <h1>${this.farenheit}&degF / ${this.celsius}&degC</h1>
    <h3>${this.city}</h3>
    `
  }
}
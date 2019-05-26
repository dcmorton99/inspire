export default class Weather {
  constructor(data) {
    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.celsius = parseInt(data.main.temp - 273.15)
    this.farenheit = parseInt(data.main.temp * (9 / 5) - 459.67)
  }

  get Template() {
    return `
    <div class="col-3">
      <h1>${this.farenheit}F</h1>
      <h3>${this.city}</h3>
		</div>
    `
  }
}

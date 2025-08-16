enum Role {
  Guest,
  User,
  Admin,
}

let myRole: Role = Role.Guest;
console.log(myRole);
console.log(Role[2]);


// String enums are more readable and safer for APIs.
enum WeatherConditions {
  Sunny = "sunny",
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}

const currentWeather = WeatherConditions.Sunny;
console.log(`The current weather is ${currentWeather}`);
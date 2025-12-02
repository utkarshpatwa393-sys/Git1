


async function fetchdata() {
  let city = document.querySelector("#city").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2dd68336955cf02e477d723142b98b35&units=metric`

  try {
    let response = await fetch(url);
    let data = await response.json();
    display(data);
  } catch (error) {
    console.log(error);
  }

}

function display(arr) {
  let main = document.querySelector("#ms1");
  main.innerHTML = `
        <h3>Coordinate</h3>
        <p>Longitude : ${arr.coord.lon}</p>
        <p>Latitude : ${arr.coord.lat}</p>
    `;

  let main2 = document.querySelector("#ms2");
  main2.innerHTML = `
        <h3>Weather</h3>
        
        <p>Climate : ${arr.weather[0].main}</p>
        <p>Description : ${arr.weather[0].description}</p>
    `;

  let m3 = document.querySelector("#m2");
  m3.innerHTML = `
        <h3>Temprature</h3>
        <p>Temprature : ${arr.main.temp} C</p>
        <p>Feels like : ${arr.main.feels_like} C</p>
        <p>Low : ${arr.main.temp_min} C</p>
        <p>High : ${arr.main.temp_max} C</p>
        <p>Humidity : ${arr.main.humidity}%</p>
    `;

  let m4 = document.querySelector("#m3")
  m4.innerHTML = `
        <h3>Condition</h3>
        <p>Country : ${arr.sys.country}</p>
        <p>City : ${arr.name}</p>
        <p>Timezone : ${arr.timezone}</p>
        <p>Sunrise : ${arr.sys.sunrise}</p>
        <p>Sunset : ${arr.sys.sunset}</p>
    `;
}

var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var humidity = document.querySelector('.humidity');
var country = document.querySelector('.country');
var description = document.querySelector('.description');
var clouds = document.querySelector('.clouds');
var button = document.querySelector('.submit');


button.addEventListener('click', function (name) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=c619eea121fbbf832bbb8eee50dcaf86')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            var tempValue = data['main']['temp'];
            var nameValue = data['name'];
            var humidityValue = data['main']['humidity'];
            var descriptionValue = data['weather'][0]['description'];
            var countryValue = data['sys']['country'];

            main.innerHTML = nameValue;
            description.innerHTML = "Description: " + descriptionValue;
            temp.innerHTML = "Temperature: " + Math.round(tempValue - 273) + "&#176C";
            humidity.innerHTML = "Humidity: " + humidityValue + '%';
            country.innerHTML = "Country: " + countryValue;
            input.value = "";
        })

        .catch(err => alert("Please! write correct city name!"));
})
const input = document.querySelector('.search')

input.addEventListener('keyup', (e) => {
	if (e.keyCode === 13) {
		getWeather(e.target.value)
        input.value =''
	}
})

async function getWeather(input) {
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=380bdb16c9681e8151f20a2fb7f321ab`;

	const res = await fetch(url)
	const weather = await res.json()

	changeWeatherUI(weather)
}

function changeWeatherUI(data) {
    const city = document.querySelector('.city')
    const country = document.querySelector('.country')
    const time = document.querySelector('.time')
    const temperature = document.querySelector('.temperature span')
    const shortDesc = document.querySelector('.short_desc')
    const visibility = document.querySelector('.visibility span')
    const wind = document.querySelector('.wind span')
    const sun = document.querySelector('.cloud span')

    city.innerHTML = data.name
    country.innerHTML = data.sys.country
    time.innerHTML = new Date().toLocaleString('vi')
    shortDesc.innerHTML = data.weather[0].main
    visibility.innerHTML = data.visibility + '(m)'
    wind.innerHTML = data.wind.speed + '(m/s)'
    sun.innerHTML = data.clouds.all + '(%)'
    
    const temp = Math.round(data.main.temp)
    temperature.innerHTML = temp
    const bodyElement = document.querySelector('body');
    bodyElement.classList.remove('hot', 'cold');
    if(temp >= 18){
        bodyElement.classList.add('hot')
    }else{
        bodyElement.classList.add('cold')
    }

}

getWeather('ho chi minh')
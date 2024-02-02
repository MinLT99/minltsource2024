const input = document.querySelector('.search')

input.addEventListener('keyup', (e)=>{
    if(e.key === 'Enter'){
        connectApi(e.target.value)
        input.value = ''
    }
})

async function connectApi(input){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=380bdb16c9681e8151f20a2fb7f321ab`;

    const res = await fetch(url)
    const weather = await res.json()

    changeWeatherUI(weather)
}

function changeWeatherUI(weather){
    const city = document.querySelector('.city')
    const country = document.querySelector('.country')
    const time = document.querySelector('.time')
    const temperature = document.querySelector('.temperature span')
    const clouds = document.querySelector('.clouds')
    const visibility = document.querySelector('.visibility span')
    const wind = document.querySelector('.wind span')
    const sun = document.querySelector('.cloud span')

    city.innerHTML = weather.name
    country.innerHTML = weather.sys.country
    time.innerHTML = new Date().toLocaleString('vi')
    clouds.innerHTML = weather.weather[0].main
    visibility.innerHTML = weather.visibility + '(m)'
    wind.innerHTML = weather.wind.speed + '(m/s)'
    sun.innerHTML = weather.clouds.all + '(%)'
    
    const temp = Math.round(weather.main.temp)
    temperature.innerHTML = temp



    if(temp >= 18){
        document.querySelector('body').classList.remove('hot', 'cold')
        document.querySelector('body').classList.add('hot')
    }
    else{
        document.querySelector('body').classList.remove('hot', 'cold')
        document.querySelector('body').classList.add('cold')
    }
}

connectApi('ho chi minh')
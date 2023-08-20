const inputBox= document.querySelector('.input-box');
const searchBtn=document.getElementById('searchBtn');
const weather_img=document.querySelector('.weather-img');
const temperature=document.querySelector('.temperature');
const description=document.querySelector('.description');
const humidity= document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found')
const weatherBody=document.querySelector('.weather-body')
const cityd=document.getElementById('city')
async function checkWeather(city){
  const api_key ='4eed2aa2a63cd961b7c3cfe8b266e44e';
  const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
  const weather_data= await fetch(`${url}`).then(response=> response.json());
  if(weather_data.cod==404){
    location_not_found.style.display='flex';
    weatherBody.style.display='none';
    return;
  }
  location_not_found.style.display='none';
  weatherBody.style.display='flex';
  temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
  cityd.innerText=`${weather_data.name}`;
  description.innerHTML=`${weather_data.weather[0].description}`
  humidity.innerHTML=`${weather_data.main.humidity}%`
  wind_speed.innerHTML=`${weather_data.wind.speed}km/H`
  console.log(weather_data.weather[0].main)
  switch(weather_data.weather[0].main){
    case 'Clouds':weather_img.setAttribute('src','/images/cloud.png')
    break;
    case 'Clear':weather_img.setAttribute('src','/images/clear.png')
    break;
    case 'Rain':weather_img.setAttribute('src','/images/rain.png')
    break;
    case 'Mist':weather_img.setAttribute('src','/images/mist.png')
    break;
    case 'Snow':weather_img.setAttribute('src','/images/snow.png');
    break;
    case 'Drizzle':weather_img.setAttribute('src','/images/drizzle.png');
    break;
  }
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value)
})
inputBox.addEventListener('keypress', function(event){
  if (event.key === "Enter") {
    event.preventDefault();
    searchBtn.click()
    checkWeather(inputBox.value)
    
}})

var typed = new Typed('.text', {
  strings: ['Hello', 'I am Bipin', 'Welcome to my Weather App'],
  typeSpeed: 50,
  loop:true,
  backDelay:2000,
  showCursor: true,
  cursorChar: "|",
autoInsertCss: true,
fadeOut: false,
fadeOutClass: 'typed-fade-out',
fadeOutDelay: 500,
});

gsap.to('.content p, .content h1',{
  y:-840,
  duration:5,
  repeat:-1,
  delay:-3,
  
})
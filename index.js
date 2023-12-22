const paragraph = document.getElementById('paragraph');
const loadP = document.getElementById('loadP');
const loader = document.getElementsByClassName('lds-roller');
const inputWeather = document.getElementById('inputCity');
const btnSearch = document.getElementById('btnSearch');
const nameCountry = document.getElementById('nameCountry');
const city = document.getElementById('city');
const tiempo = document.getElementById('tiempo');
const grado = document.getElementById('grado');
const temp = document.getElementById('temp');
const wind = document.getElementById('wind');
const icon = document.getElementsByTagName('img');
const pressure = document.getElementById('pressure');
const visibility = document.getElementById('visibility');
const termica = document.getElementById('termica');
const  descrip = document.getElementById('descrip');
const  descrip2 = document.getElementById('descrip2');
const  descrip3 = document.getElementById('descrip3');
const  descrip4 = document.getElementById('descrip4');
const  descrip5 = document.getElementById('descrip5');
const  descrip6 = document.getElementById('descrip6');
const  humidity = document.getElementById('humidity');
const  humidity2 = document.getElementById('humidity2');
const  humidity3 = document.getElementById('humidity3');
const  humidity4 = document.getElementById('humidity4');
const  humidity5 = document.getElementById('humidity5');
const  humidity6 = document.getElementById('humidity6');
const fecha2 = document.getElementById('fecha2');
const fecha3 = document.getElementById('fecha3');
const fecha4 = document.getElementById('fecha4');
const fecha5 = document.getElementById('fecha5');
const fecha6 = document.getElementById('fecha6');
const temp2 = document.getElementById('temp2');
const temp3 = document.getElementById('temp3');
const temp4 = document.getElementById('temp4');
const temp5 = document.getElementById('temp5');
const temp6 = document.getElementById('temp6');
const termica2= document.getElementById('termica2');
const termica3= document.getElementById('termica3');
const termica4= document.getElementById('termica4');
const termica5 = document.getElementById('termica5');
const termica6= document.getElementById('termica6');
const days0 = document.getElementById('days0');
const days1 = document.getElementById('day0');
const icon2 = document.getElementById('img2');
const icon3 = document.getElementById('img3');
const icon4 = document.getElementById('img4');
const icon5 = document.getElementById('img5');
const icon6 = document.getElementById('img6');
const containerIcon = document.getElementById('containerIcon')
const lang= 'es'
const APIKEY = '1ee634352a5711e3d855a6dca7b37574';

const operWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&lang=${lang}`);
    const data = await response.json();
    return data;
}

const forescats = async(city) =>{
    
    const  getData = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKEY}&lang=${lang}`);
    const responseData = await getData.json();
    return responseData;
}


function getDayOfWeek(dateString) {
    const date = new Date(dateString);
    const days = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return days[date.getDay()];
}





window.addEventListener('load', () => {
    // Establece la ciudad predeterminada
    const defaultCity = 'Caracas';
    operWeather(defaultCity)
    .then((weatherData) =>{
        console.log(weatherData);
        city.innerText = weatherData.name + ' - ' 
        nameCountry.innerText = weatherData.sys.country; 
        temp.innerText = Math.round((weatherData.main.temp)- 273.15);
        grado.innerText = '°C';
        tiempo.innerText= 'La temperatura actual';
        wind.innerText= 'Viento \n  ' + weatherData.wind.speed + 'm/s';
        pressure.innerText= 'Presión \n ' + weatherData.main.pressure+ ' hPa';
        termica.innerText = 'Sensación térmica ' + Math.round(weatherData.main.feels_like - 273.15) + '°C';
        visibility.innerText = 'Visibilidad \n' + Math.round(weatherData.visibility / 1000) + ' km';
        descrip.innerText = weatherData.weather[0].description;
        humidity.innerText = 'Humedad \n'+  weatherData.main.humidity+'%';
        const iconWeather = weatherData.weather[0].icon;
        icon[0].setAttribute('src', `https://openweathermap.org/img/wn/${iconWeather}@2x.png`);
    })   
    .catch((error) => console.log(error));

    const defaulttCity = 'Caracas';
    forescats(defaulttCity)
    .then((Datos) =>{

        
        const elementsToClear = [fecha2, fecha3, icon2, icon3, icon4, icon5, icon6];
        elementsToClear.forEach(element => {
            if (element.tagName === 'IMG') {
                // Si el elemento es una imagen, limpia el atributo 'src'
                element.setAttribute('src', '');
            } else {
                // Si el elemento no es una imagen, limpia el texto interior
                element.innerText = '';
            }
        });


        let  fechas2 = Datos.list[2].dt_txt;       
        fecha2.innerText = fechas2;
        temp2.innerText = Math.round(Datos.list[2].main.temp - 273.15)+'°C';
        termica2.innerText =  Math.round(Datos.list[2].main.feels_like - 273.15) + '°C';
        descrip2.innerText = Datos.list[2].weather[0].description;
        humidity2.innerText =Datos.list[2].main.humidity+'%';
        const weatherIcon2 = Datos.list[2].weather[0].icon;
        icon2.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon2}@2x.png`);
 
        let fechas3 = Datos.list[3].dt_txt;       
        fecha3.innerText = fechas3;
        temp3.innerText = Math.round(Datos.list[3].main.temp - 273.15)+'°C';
        termica3.innerText =  Math.round(Datos.list[3].main.feels_like - 273.15) + '°C';
        descrip3.innerText = Datos.list[3].weather[0].description;
        humidity3.innerText =Datos.list[3].main.humidity+'%';
        const weatherIcon3 = Datos.list[3].weather[0].icon;
        icon3.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon3}@2x.png`);
 
 
        let  fechas4 = Datos.list[4].dt_txt;       
        fecha4.innerText = fechas4;
        temp4.innerText = Math.round(Datos.list[4].main.temp - 273.15)+'°C';
        termica4.innerText =  Math.round(Datos.list[4].main.feels_like - 273.15) + '°C';
        descrip4.innerText = Datos.list[4].weather[0].description;
        humidity4.innerText =Datos.list[4].main.humidity+'%';
        const weatherIcon4 = Datos.list[4].weather[0].icon;
        icon4.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon4}@2x.png`);
        
        let  fechas5 = Datos.list[5].dt_txt;       
        fecha5.innerText = fechas5;
        temp5.innerText = Math.round(Datos.list[5].main.temp - 273.15)+'°C';
        termica5.innerText =  Math.round(Datos.list[5].main.feels_like - 273.15) + '°C';
        descrip5.innerText = Datos.list[5].weather[0].description;
        humidity5.innerText =Datos.list[5].main.humidity+'%';
        const weatherIcon5 = Datos.list[5].weather[0].icon;
        icon5.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon5}@2x.png`);
 
 
        let  fechas6 = Datos.list[6].dt_txt;       
        fecha6.innerText = fechas6;
        temp6.innerText = Math.round(Datos.list[6].main.temp - 273.15)+'°C';
        termica6.innerText =  Math.round(Datos.list[6].main.feels_like - 273.15) + '°C';
        descrip6.innerText = Datos.list[6].weather[0].description;
        humidity6.innerText =Datos.list[6].main.humidity+'%';
        const weatherIcon6 = Datos.list[6].weather[0].icon;
        icon6.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon6}@2x.png`);


    })

    .catch((err) => console.log(err));

});


btnSearch.addEventListener('click', ()=>{

    operWeather(inputWeather.value)
    .then((weatherData) => {
        console.log(weatherData);

        // Actualiza la interfaz de usuario con los datos meteorológicos actuales
        city.innerText = `${weatherData.name} - `;
        nameCountry.innerText = weatherData.sys.country;
        temp.innerText = Math.round(weatherData.main.temp - 273.15);
        grado.innerText = '°C';
        tiempo.innerText= 'La temperatura actual';
        wind.innerText= 'Viento \n  ' + weatherData.wind.speed + 'm/s';
        pressure.innerText= 'Presión \n ' + weatherData.main.pressure+ 'hPa';
        termica.innerText = 'Sensación térmica '+ Math.round(weatherData.main.feels_like - 273.15)+'°C';
        visibility.innerText = 'Visibilidad \n' + Math.round(weatherData.visibility / 1000) + ' km';
        descrip.innerText = weatherData.weather[0].description;
        humidity.innerText = 'Humedad' + weatherData.main.humidity+'%';
        const weatherIcon = weatherData.weather[0].icon;
        icon[0].setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
        console.log(icon);
    })
    
    .catch((error) => console.log(error));

    forescats(inputWeather.value)
    .then((Datos) => {


        const elementsToClear = [fecha2, fecha3, icon2, icon3, icon4, icon5, icon6];
        elementsToClear.forEach(element => {
            if (element.tagName === 'IMG') {
                // Si el elemento es una imagen, limpia el atributo 'src'
                element.setAttribute('src', '');
            } else {
                // Si el elemento no es una imagen, limpia el texto interior
                element.innerText = '';
            }
        });
        console.log(Datos);


        // Estos son los pronosticos de horas y dias siguientes
      //let day2 = getDayOfWeek(fechas2);
       let  fechas2 = Datos.list[2].dt_txt;       
       fecha2.innerText = fechas2;
       temp2.innerText = Math.round(Datos.list[2].main.temp - 273.15)+'°C';
       termica2.innerText =  Math.round(Datos.list[2].main.feels_like - 273.15) + '°C';
       descrip2.innerText = Datos.list[2].weather[0].description;
       humidity2.innerText =Datos.list[2].main.humidity+'%';
       const weatherIcon2 = Datos.list[2].weather[0].icon;
       icon2.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon2}@2x.png`);

       let fechas3 = Datos.list[3].dt_txt;       
       fecha3.innerText = fechas3;
       temp3.innerText = Math.round(Datos.list[3].main.temp - 273.15)+'°C';
       termica3.innerText =  Math.round(Datos.list[3].main.feels_like - 273.15) + '°C';
       descrip3.innerText = Datos.list[3].weather[0].description;
       humidity3.innerText =Datos.list[3].main.humidity+'%';
       const weatherIcon3 = Datos.list[3].weather[0].icon;
       icon3.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon3}@2x.png`);


       let  fechas4 = Datos.list[4].dt_txt;       
       fecha4.innerText = fechas4;
       temp4.innerText = Math.round(Datos.list[4].main.temp - 273.15)+'°C';
       termica4.innerText =  Math.round(Datos.list[4].main.feels_like - 273.15) + '°C';
       descrip4.innerText = Datos.list[4].weather[0].description;
       humidity4.innerText =Datos.list[4].main.humidity+'%';
       const weatherIcon4 = Datos.list[4].weather[0].icon;
       icon4.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon4}@2x.png`);
       
       let  fechas5 = Datos.list[5].dt_txt;       
       fecha5.innerText = fechas5;
       temp5.innerText = Math.round(Datos.list[5].main.temp - 273.15)+'°C';
       termica5.innerText =  Math.round(Datos.list[5].main.feels_like - 273.15) + '°C';
       descrip5.innerText = Datos.list[5].weather[0].description;
       humidity5.innerText =Datos.list[5].main.humidity+'%';
       const weatherIcon5 = Datos.list[5].weather[0].icon;
       icon5.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon5}@2x.png`);


       let  fechas6 = Datos.list[6].dt_txt;       
       fecha6.innerText = fechas6;
       temp6.innerText = Math.round(Datos.list[6].main.temp - 273.15)+'°C';
       termica6.innerText =  Math.round(Datos.list[6].main.feels_like - 273.15) + '°C';
       descrip6.innerText = Datos.list[6].weather[0].description;
       humidity6.innerText =Datos.list[6].main.humidity+'%';
       const weatherIcon6 = Datos.list[6].weather[0].icon;
       icon6.setAttribute('src', `https://openweathermap.org/img/wn/${weatherIcon6}@2x.png`);



    })

    .catch((err) => console.log(err));

});









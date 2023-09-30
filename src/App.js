import React, {useState, useEffect} from'react';
import axios from 'axios';
import WeatherCard from './components/WeatherCard';
import Data from "./defaultData"
import './App.css';

function App() {
  
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("London");
  
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=5b7ceea3a553ec235ccee440867d2d75`);
      // const data = await response
      setWeather(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if(!weather) {
    return (
          <div>
            <h1 className='loading'>Loading...</h1>
          </div>
        )
  }
  
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  

  return (
    <div>
      <div className='center'>
        <WeatherCard 
          cityValue={city}
          onChange={handleCityChange}
          searchClick={getData}
          weatherImg={weather.weather[0].icon}
          weatherCond={weather.weather[0].description}
          currentTemp={weather.main.temp}
          minTemp={weather.main.temp_min}
          maxTemp={weather.main.temp_max}
          cityName={weather.name}
          humidity={weather.main.humidity}
          windSpeed={weather.wind.speed}
        />
      </div>
    </div>
  );
}

export default App;

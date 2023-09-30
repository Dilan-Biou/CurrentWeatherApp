import React from "react"
import { Search} from '@mui/icons-material';


export default function WeatherCard(props) {

  const picAddress = `./weather icons/${props.weatherImg}.png`

  return (
    <div>
        <div className="card-container">

            <div className="search-bar">
                <input value={props.cityValue} onChange={props.onChange} type="text" placeholder="Search City" />
                <button onClick={props.searchClick} type="submit"><Search /></button>
            </div>

            <div className="weather-condition">
              <img className="weather-img" src={picAddress}/>
              <label className="weather-condition-label">{props.weatherCond}</label>
            </div>

            <div className="degree-container">
              <h3>Min Temp<br></br><span>{props.minTemp}°</span></h3>
              <h1>{props.currentTemp}°</h1>
              <h3>Max Temp<br></br><span>{props.maxTemp}°</span></h3>
            </div>

            <h1 className="city-name">{props.cityName}</h1>

            <div className="weather-detail">
              <div className="humidity">
                <img src="./weather icons/humidity.png"/>
                <h3>{props.humidity}% <span>Humidity</span></h3>
              </div>
              <div className="wind-speed">
                <img src="./weather icons/windy.png"/>
                <h3>{props.windSpeed} km/h <span>Wind Speed</span></h3>
              </div>
            </div>
        </div>
    </div>
  )
}

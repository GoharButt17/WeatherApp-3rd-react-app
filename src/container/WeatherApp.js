import React,{useState} from 'react';
import Location from '../components/location';
import WeatherDetails from '../components/WeatherDetails';
import WeatherFetch from '../components/WeatherFetch';
import './WeatherApp.css';

const WeatherApp = () =>{
    const [location,setLocation] = useState("");
    const [weatherData,setWeatherData] = useState(null);

    const handleUserLocation = (loc) =>{
        setLocation(loc);
    }

    const handleWeatherData = (data) =>{
        setWeatherData(data);
    }
    return(
        <div>
            <h1 className='mainH1'>Weather App</h1>
            <p className='mainP'>Get Your Weather Details Anywhere !! </p>
            <Location UserLocation = {handleUserLocation}/>
            <WeatherFetch UserLocation = {location}  onWeatherData = {handleWeatherData}/>
            <WeatherDetails WeatherData = {weatherData} />
        </div>
    )
}

export default WeatherApp;
import React,{useEffect} from "react";
import axios from "axios";

const WeatherFetch = ({UserLocation,onWeatherData}) =>{
    useEffect(() => {
        const apiKey='5ef17bf8510f4e68b2f103433230208';
        const apiURL = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${UserLocation}`;

        axios
            .get(apiURL)
            .then((res) => {
                const Data=res.data;
                onWeatherData(Data);
            })
            .catch((err) => {
                console.error('Error Fetching Weather Data',err);
            })
    },[UserLocation,onWeatherData]);

    return(null);
}

export default WeatherFetch;
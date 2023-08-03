import React from "react";
import "./WeatherDetails.scss";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const WeatherDetails = ({ WeatherData }) => {
    if (!WeatherData) {
        return <div className="loading">Loading weather data...</div>;
    }

  // Destructure the relevant properties from the WeatherData object
    const {
        location,
        current: {
            last_updated,
            temp_c,
            temp_f,
            condition: { text, icon },
            wind_mph,
            wind_kph,
            wind_degree,
            wind_dir,
            pressure_mb,
            pressure_in,
            precip_mm,
            precip_in,
            humidity,
            cloud,
            feelslike_c,
            feelslike_f,
            vis_km,
            vis_miles,
            uv,
            gust_mph,
            gust_kph,
        },
    } = WeatherData;

return (
    <div className="weather-details-container">
        <TransitionGroup>
            <CSSTransition classNames="weather-card" timeout={500}>
                <div className="weather-card">
                    <h1>Weather Details</h1>
                    <p className="location">
                        Location: {`${location.name}, ${location.region}, ${location.country}`}
                    </p>
                    <p>Last Updated: {last_updated}</p>
                    <p className="temperature">
                        Temperature: {temp_c}°C / {temp_f}°F
                    </p>
                    <p className="description">Weather Condition: {text}</p>
                    <img className="weather-icon" src={icon} alt={text} />
                </div>
            </CSSTransition>
        </TransitionGroup>
        <div className="weather-card-group">
            <TransitionGroup>
                <CSSTransition classNames="weather-card" timeout={500}>
                    <div className="weather-card">
                        <h2>Wind Details</h2>
                        <p>Wind Speed: {wind_mph} mph / {wind_kph} kph</p>
                        <p>Wind Degree: {wind_degree}°</p>
                        <p>Wind Direction: {wind_dir}</p>
                        <p>Gust Speed: {gust_mph} mph / {gust_kph} kph</p>
                    </div>
                </CSSTransition>
            </TransitionGroup>

            <TransitionGroup>
                <CSSTransition classNames="weather-card" timeout={500}>
                    <div className="weather-card">
                        <h2>Humidity and Cloud Details</h2>
                        <p>Humidity: {humidity}%</p>
                        <p>Cloud Cover: {cloud}%</p>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
        <div className="weather-card-group">
            <TransitionGroup>
                <CSSTransition classNames="weather-card" timeout={500}>
                    <div className="weather-card">
                        <h2>Pressure Details</h2>
                        <p>Pressure: {pressure_mb} mb / {pressure_in} in</p>
                    </div>
                </CSSTransition>
            </TransitionGroup>

            <TransitionGroup>
                <CSSTransition classNames="weather-card" timeout={500}>
                    <div className="weather-card">
                        <h2>Precipitation Details</h2>
                        <p>Precipitation: {precip_mm} mm / {precip_in} in</p>
                    </div>
                </CSSTransition>
            </TransitionGroup>

            <TransitionGroup>
                <CSSTransition classNames="weather-card" timeout={500}>
                    <div className="weather-card">
                        <h2>Feels Like</h2>
                        <p>Feels Like: {feelslike_c}°C / {feelslike_f}°F</p>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>

        <TransitionGroup>
            <CSSTransition classNames="weather-card" timeout={500}>
                <div className="weather-card">
                    <h2>Visibility</h2>
                    <p>Visibility: {vis_km} km / {vis_miles} miles</p>
                </div>
            </CSSTransition>
        </TransitionGroup>
    
        <TransitionGroup>
            <CSSTransition classNames="weather-card" timeout={500}>
                <div className="weather-card">
                    <h2>UV Index</h2>
                    <p>UV Index: {uv}</p>
                </div>
            </CSSTransition>
        </TransitionGroup>
    </div>
    );
};

export default WeatherDetails;

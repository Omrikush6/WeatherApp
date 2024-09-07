import React from 'react';
import './WeatherCard.css';
import clearDayIcon from './assets/icons/clear-day.png'
import cloudyIcon from './assets/icons/cloudy.png'
import partlyCloudyIcon from './assets/icons/partly-cloudy-day.png'
import rainIcon from './assets/icons/rain.png'

const iconMap = {
    'clear-day' : clearDayIcon,
    'cloudy' : cloudyIcon,
    'partly-cloudy-day' : partlyCloudyIcon,
    'rain' : rainIcon,
    'default' : partlyCloudyIcon
}

function WeatherCard({ dayData, index }) {
const getWeatherIcon = (iconName) => {
        return iconMap[iconName] || iconMap['default'];
      };
      
  return (
    <div className="weather-card">
      <img 
        src={getWeatherIcon(dayData.icon)} 
        alt={dayData.icon} 
        className="weather-icon" 
      />
      <div className="weather-info">
        <h3>Day {index + 1}</h3>
        <p>Date: {dayData.datetime}</p>
        <p>Temperature: {dayData.temp}°C</p>
        <p>Description: {dayData.icon}</p>
      </div>
    </div>
  );
}

export default WeatherCard;

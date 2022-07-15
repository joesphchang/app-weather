import React, { useState, useEffect } from 'react'
import './WeatherHero.css';

function WeatherHero() {

  const [currentWeather, setCurrentWeather] = useState([]);

  const apiKey = process.env.REACT_APP_API;

  useEffect(() => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=London&api=no`;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.current)
        setCurrentWeather(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div>WeatherHero</div>
  )
}

export default WeatherHero
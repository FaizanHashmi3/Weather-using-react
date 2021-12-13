import React from 'react'
import "./index.css";


const WeatherCard = ({tempInfo}) => {
    const {

        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
        sunrise,
       
    }=tempInfo;
     
     let sec=sunrise;
     let date= new Date(sec*1000);
     let timeStr=`${date.getHours()}:${date.getMinutes()}`;

    //  let secc=sunrise;
    //  let datee= new Date(secc*1000);
    //  let timeStrr=`${datee.getHours()}:${datee.getMinutes()}`;




    return (
        
        <div>
            <h3>Temperature {temp} C</h3>
            <h3>Humidity {humidity}% </h3>
            <h3>Pressure {pressure} pascal</h3>
            <h3>WeatherMood : {weathermood}</h3>
            <h3>Wind Speed {speed} km/hr </h3>
            {/* <h3>Sunrise {timeStr}</h3> */}
            <h3>Sunset { timeStr}</h3>
            <h3>{new Date().toLocaleDateString()}</h3>
            <h3>{name }  {country}</h3>         
        </div>
    )
}

export default WeatherCard

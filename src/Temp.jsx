
// api.openweathermap.org/data/2.5/weather?q=pune&appid=7dc0e62d8c7302bd115b5ad7c9d1ecb7
import React,{useState,useEffect} from 'react';
import WeatherCard from './WeatherCard';
import "./index.css";


const Temp = () => {
    const[searchValue,setSearchValue]=useState("darbhanga");
    const [tempInfo, setTempInfo] = useState({});
    const getWeatherInfo =async () => {

        try {
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7dc0e62d8c7302bd115b5ad7c9d1ecb7`;

            const res=await fetch(url);
            const data=await res.json();
            console.log(data)
            const {temp,humidity,pressure}=data.main
            const{main:weathermood}=data.weather[0];
            const{name}=data;
            const{speed}=data.wind;
            const{country,sunset,sunrise}=data.sys;
            const myNewWeatherInfo={

                temp,
                humidity,
                pressure,
                weathermood,
                name,
                speed,
                country,
                sunset,
               sunrise,
            };
            setTempInfo(myNewWeatherInfo);
            
        }
        catch(error){alert ("OOPS!!! Something went wrong");}

    };


    useEffect(() => {
        getWeatherInfo();
       
    }, [])

    return (
        <div id='tempdivbg'>
            
            <div id="centre">
                <div id='head'>WEATHER REPORT</div>
                <input type="search" placeholder="search here..." value={searchValue } onChange={(e)=>setSearchValue(e.target.value)}></input>
                <button type="button" onClick={getWeatherInfo}>Search</button>
                <br></br><br></br>
           
            <WeatherCard tempInfo={tempInfo}/>
             </div>
        </div>
    )
}

export default Temp

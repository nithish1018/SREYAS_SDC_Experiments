import React, { useCallback, useEffect, useState } from 'react'
import Weathercard from './Weathercard';


const Templ = () => {
  const[searchValue,setsearchValue]=useState("hyderabad");
  const [tempInfo, setTempInfo] = useState({});
  const getWheatherInfo= useCallback(async()=>{
    try{
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}
      &units=metric&appid=3ce1afc30c746c17d05e16a3eefa9a27`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data.main);
      
      const { temp, humidity, pressure } = data.main;
      const { main: weathermood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const myNewWeatherInfo = {
        temp,
        humidity,
        pressure,
        weathermood,
        name,
        speed,
        country,
        sunset,
      };

      setTempInfo(myNewWeatherInfo);


    }catch(error){
      console.log(error);
    }

  }, [searchValue])
 
  useEffect(() => {
    getWheatherInfo();
  }, [getWheatherInfo]);
  return (
    <>
    <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search..."
            autoFocus
            id="search"
            className="searchTerm"
            value={ searchValue}
            onChange={(e)=>setsearchValue(e.target.value)}
            

            />
            <button className='searchButton' onClick={getWheatherInfo} type='button'>
              search
            </button>
            </div>
            </div>
          <Weathercard tempInfo={tempInfo}/>
          
    </>
  )
}

export default Templ
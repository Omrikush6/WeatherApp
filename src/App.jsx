import { useState, useEffect, useRef } from 'react';
import './App.css';
import WeatherCard from './Weathercard'; 

function App() {
  const [days, settdays] = useState(3);
  const [weatherdata, setweatherdata] = useState([]);
  const divRef = useRef(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/tel%20aviv/next${days}days?unitGroup=metric&key=8KFS28APX968P5DFR6JRHBKD7&contentType=json`);
      const data = await response.json();
      setweatherdata(data.days);
    };
  
    fetchWeatherData();
  }, [days]);
  useEffect(() => {
    const handleScroll = () => {
      const div = divRef.current;
      if (div.scrollTop + div.clientHeight >= div.scrollHeight) {
        settdays((prev) => prev + 1);
      }
    };

    const div = divRef.current;
    if (div) {
      div.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (div) {
        div.removeEventListener('scroll', handleScroll);
      }
    };
  }, [weatherdata]);

  return (
    <>
      <div
        ref={divRef}
        style={{ height: '400px', overflowY: 'auto', border: '1px solid black', padding: '10px'}}
      >
        {
          weatherdata.length > 0 ?
            weatherdata.map((dayData, index) => (
              <WeatherCard key={index} dayData={dayData} index={index} />
            )) : 'Loading...'
        }
      </div>
    </>
  );
}

export default App;

import { useEffect, useState } from "react";
import {
  FaCloudRain,
  FaSnowflake,
  FaCloud,
  FaSun,
  FaSmog,
} from "react-icons/fa";

interface WeatherResponse {
  weather: { main: string }[];
  main: { temp: number };
  name: string;
}

const Weather = () => {
  const [weatherIcon, setWeatherIcon] = useState<React.ReactNode>(null);
  const [temperature, setTemperature] = useState<number | string>("");
  const [cityName, setCityName] = useState<string>("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { longitude, latitude } = position.coords;
      const apikey = "5888abe3b1f8d5a33f1b9c3dbc538594";

      const weatherIconBox: { [key: string]: React.ReactNode } = {
        Snow: <FaSnowflake className="text-6xl text-blue-400" />,
        Rain: <FaCloudRain className="text-6xl text-blue-500" />,
        Clouds: <FaCloud className="text-6xl text-gray-500" />,
        Haze: <FaSmog className="text-6xl text-yellow-500" />,
        Clear: <FaSun className="text-6xl text-yellow-400" />,
      };

      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`
      )
        .then((response) => response.json())
        .then((data: WeatherResponse) => {
          const currentWeather = data.weather[0].main;
          const weatherIcon = weatherIconBox[currentWeather] || (
            <FaCloud className="text-6xl text-gray-300" />
          );
          setWeatherIcon(weatherIcon);
          setCityName(data.name);
          setTemperature(data.main.temp);
        });
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-lg shadow-lg p-6 max-w-xs mx-auto">
      <div className="text-center mb-4">{weatherIcon}</div>
      <div className="text-xl font-semibold text-gray-800 mb-2">{cityName}</div>
      <div className="text-2xl font-bold text-gray-800">
        {`${temperature}°C`}
      </div>
    </div>
  );
};

export default Weather;

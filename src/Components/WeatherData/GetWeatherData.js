
import axios from 'axios'

const WEATHER_IMAGE = 'http://openweathermap.org/img/wn'

export const getWeather = (location) => {

    const WEATHER_API_ONE_CALL_URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${location.lon}&%20exclude={minutely}&hourly,daily&units=metric&appid=`
    return axios.get(`${WEATHER_API_ONE_CALL_URL}{YOUR_API_KEY}`)
    .then(
        res => {
            let currentweather= {
                timezone: res.data.timezone,
                time: new Date(res.data.current.dt * 1000),
                lon: res.data.lon,
                lat: res.data.lat,
                temp: res.data.current.temp,
                temp_max: res.data.current.feels_like,
                temp_min: res.data.current.dew_point,
                weather: res.data.current.weather[0].main,
                img: `${WEATHER_IMAGE}/${res.data.current.weather[0].icon}.png`
            }
            
            let dailyweather= res.data.daily.map(daily => {
                return {
                    date: new Date(daily.dt * 1000),
                    temp: daily.temp.day,
                    temp_max: daily.temp.max,
                    temp_min: daily.temp.min,
                    weather: daily.weather[0].description,
                    img: `${WEATHER_IMAGE}/${daily.weather[0].icon}.png`
                }

            })

            let hourlyweather= res.data.hourly.map((hourly) => {
                return {
                    time: new Date(hourly.dt * 1000),
                    temp: hourly.temp,
                    weather: hourly.weather[0].description,
                    img: `${WEATHER_IMAGE}/${hourly.weather[0].icon}.png`
                }

            })

            return ({currentweather,dailyweather,hourlyweather})
        })
        
    }

import React from 'react'
import classes from './HourlyWeatherDisplayCard.module.css'

const HourlyWeatherDisplayCard = (props) => {

    let hours = props.weather.time.getHours() > 12 ? props.weather.time.getHours() - 12 : props.weather.time.getHours()
    let time = `${hours}:${props.weather.time.getMinutes()}`
    return (
        <div className={[classes.HourlyWeather,"card"].join(' ')} style={{ width: "10rem",display: "flex" }}>
            <div className="card-body"> 
                    <p>{time}</p>
                    <img src={props.weather.img} alt="loading"/>
                    <div className={classes.Temp}>
                        {Math.floor(props.weather.temp)}&deg;&nbsp;<sup>c</sup>
                    </div>
                    <p className={classes.Description}>{props.weather.weather}</p>
            </div>
        </div>
    )
}

export default HourlyWeatherDisplayCard

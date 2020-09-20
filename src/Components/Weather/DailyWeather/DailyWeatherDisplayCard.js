import React from 'react'
import classes from './DailyWeatherDisplayCard.module.css'

const DailyWeatherDisplayCard = (props) => {
  const  days=['Sun','Mon','Tue','Wed','Thu','Fri','Sat','Sun']
    let Day = days[props.weather.date.getDay()]
    let Date = `${Day},${props.weather.date.getDate()}`
    return (
        <div className={[classes.HourlyWeather,"card"].join(' ')} style={{ width: "100%" }}>
            <div className="card-body"> 
                    <p>{Date}</p>
                    <img src={props.weather.img} alt="loading"/>
                    <div className={classes.Temp}>
                        {Math.floor(props.weather.temp_max)}&deg;&nbsp;  {Math.floor(props.weather.temp_min)}&deg;&nbsp;
                    </div>
                    <p className={classes.Description}>{props.weather.weather}</p>
            </div>
        </div>
    )
}

export default DailyWeatherDisplayCard

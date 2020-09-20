import React from 'react'
import classes from './CurrentWeatherDisplay.module.css'
const CurrentWeatherDisplay = (props) => {
    return (

        <div className={[classes.CurrentWeather, 'container-fluid pt-4'].join(" ")}>
            <div className={classes.Location}>
                <h5> {props.weather.timezone} </h5>
                <div className={classes.MinMax}>{props.weather.temp_min}&deg; | {props.weather.temp_max}&deg;</div>
                <h3 className={classes.Temp}>
                    {props.weather.temp}&deg;&nbsp;<sup>c</sup>
                </h3>
            </div>
            <div className={classes.Img} >
                <img src={props.weather.img} alt="loading.."/>
                <span className={classes.Description}>
                    {props.weather.weather}
                </span>
            </div>
        </div>
    )
}

export default CurrentWeatherDisplay;
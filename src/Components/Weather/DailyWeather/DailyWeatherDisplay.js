import React, { Fragment } from 'react'
import Card from './DailyWeatherDisplayCard'
import './DailyWeatherDisplay.css'
const DailyWeatherDisplay = (props) => {
    let data = props.weather.map(el => {
        return (
            <Card key={el.time} weather={el} />
        )

    })
    return (
        <div style={{backgroundColor:"#DBDDE2"}}>
            <div className="text-center h5 pt-2">Daily</div>

            <div id="demo" className="carousel slide" data-ride="carousel">

                <div className="container carousel-inner no-padding">
                    <div className="carousel-item active">
                        {data}
                    </div>

                    <a class="carousel-control-prev" href="#demo" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#demo" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default DailyWeatherDisplay;
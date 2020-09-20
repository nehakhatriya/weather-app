import React,{Fragment} from 'react'
import Card from './HourlyWeatherDisplayCard'
import './HourlyWeatherDisplay.css'
const HourlyWeatherDisplay =(props)=>{
    let data =props.weather.map(el=>{
        if(el.time.getDate()===(new Date).getDate()){

            return (
                <Card key={el.time} weather={el}/>
                ) 
        }

    })
    return(
        <div style={{backgroundColor:"#B7C6EB"}}>
        <div className="text-center h5 pt-2">Hourly</div>

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

export default HourlyWeatherDisplay;
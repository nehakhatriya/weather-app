import React, { Fragment } from 'react'
import Card from './HourlyWeatherDisplayCard'
import Carousel from 'react-elastic-carousel'
const HourlyWeatherDisplay = (props) => {
    let data = props.weather.map((el, i) => {
        if (i < 12) {
            return (
                <Card key={el.time} weather={el} />
            )
        }
    })
    let items;
    if( window.innerWidth<300) items=1
    else if(window.innerWidth<450) items=2
    else if( window.innerWidth<800) items=4
    else items=5
    return (
<Carousel style={{backgroundColor:"#B7C6EB"}} itemsToScroll={items} pagination={false} itemsToShow={items}>
    {data}
</Carousel>
    )
}

export default HourlyWeatherDisplay;
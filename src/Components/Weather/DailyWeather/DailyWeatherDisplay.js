import React, { Fragment } from 'react'
import Card from './DailyWeatherDisplayCard'
import Carousel from 'react-elastic-carousel'
const DailyWeatherDisplay = (props) => {
    
    let data = props.weather.map(el => {
        return (
            <Card key={el.time} weather={el} />
        )

    })
    let items;
    if( window.innerWidth<300) items=1
    else if(window.innerWidth<450) items=2
    else if( window.innerWidth<800) items=4
    else items=5
    return (
       <div>
<Carousel style={{backgroundColor:"#DBDDE2"}} itemsToScroll={items} pagination={false} itemsToShow={items}>
    {data}
</Carousel>
       </div>
        
    )
}

export default DailyWeatherDisplay;
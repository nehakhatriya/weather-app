import React, { Component } from 'react'
import { getWeather} from '../WeatherData/GetWeatherData'
import CurrentWeatherDisplay from './CurrentWeather/CurrentWeatherDisplay'
import DailyWeatherDisplay from './DailyWeather/DailyWeatherDisplay'
import HourlyWeatherDisplay from './HourlyWeather/HourlyWeatherDisplay'
import Spinner from '../Spinner'
class WeatherDashboard extends Component {

    state = {
        location: { lon: '', lat: '' },
        currentWeatherData: [],
        dailyWeatherData: [],
        hourlyWeatherData: [],
        loading: true,
        error: null
    }


    componentDidMount() {
        if (navigator.geolocation) {
            let location = { ...this.state.location }
            navigator.geolocation.getCurrentPosition(position => {
                location.lat = position.coords.latitude
                location.lon = position.coords.longitude
                this.setState({ location: location },
                    () => {

                        getWeather(this.state.location)
                            .then(res => {
                                this.setState({
                                    currentWeatherData: res.currentweather, dailyWeatherData: res.dailyweather,
                                    hourlyWeatherData: res.hourlyweather, loading: false
                                })
                            })
                            .catch(err => this.setState({ error: err }))
                    })

            })
        }
    }
    render() {
        let display = (<div>
            <CurrentWeatherDisplay weather={this.state.currentWeatherData} />
            <DailyWeatherDisplay weather={this.state.dailyWeatherData} />
            <HourlyWeatherDisplay weather={this.state.hourlyWeatherData} />
        </div>)
        if (this.state.loading) {
            display = <Spinner />
        }
        if (this.state.error) {
            display = <h1>Some Error Occured</h1>
        }
        return display
    }
}

export default WeatherDashboard;
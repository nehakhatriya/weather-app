import React,{Component} from 'react';
import Header from './Components/Header/Header'
import WeatherDashBoard from './Components/Weather/WeatherDashboard'
import './App.css';
class App extends Component {


render(){

  return(
    <div className="App">
      <Header/>
      <WeatherDashBoard/>
    </div>

  )
}

}

export default App;

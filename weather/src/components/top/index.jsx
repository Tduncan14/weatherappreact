import React from "react";
import './style.scss';
import Weather from'./weather.jsx';
import axios from "axios";


const WEATHER_KEY ="cad0d116919a4b72ab734244192103";
export default class TopSection extends React.Component{
    constructor(props){
        super(props)
    this.state = {
        cityName:"Chicago",
        forcastDays: 5,
     }

  
    }
    componentDidMount(){
        const {cityName,forecastDays} = this.state;
  
       const URL = `http://api.apixu.com/v1/forecast.json?key=${WEATHER_KEY}&q=${cityName}&days=${forecastDays}`;

       axios.get(URL)
       .then(res => console.log(`this is the json object you are getting back`,res.data))
       .catch(err => console.log(err))
}
    render(){
        return <div className="top-container">
        <div className ="title">Today's weather</div>
         <Weather />

         <button className="btn btn-select-location"> Select Location</button>
        </div>
    }
}
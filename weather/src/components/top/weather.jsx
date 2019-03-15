import React from 'react'

import sunImg from "../../resources/sun.png";


export default class Weather extends React.Component{

    constructor(props){
        super(props);

        this.state={}
    }
    
      render(){

        return (<div className="weather-container">
        <div className="header">
        Location Name
        </div>
        
        <div className="inner-container">
          <div className="image">
           <img src={sunImg} alt="sunny" />
          </div>

          <div className="current-weather">
          10 &#176;
          </div>
        </div>
        

        <div className="footer">
         Sunny
        </div>
        </div>
        )
      }
    }

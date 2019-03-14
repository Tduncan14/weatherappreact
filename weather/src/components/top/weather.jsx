import React from 'react'


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
          Image
          </div>

          <div className="current-weather">
          </div>
        </div>
        

        <div className="footer">
         Sunny
        </div>
        </div>
        )
      }
    }

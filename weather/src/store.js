import React, {Component} from 'react'



class store extends Component{

    constructor(props){
        super(props)

        //Main App State
        this.state ={
            appName:"Weather Up"

        }
    }

    render(){


        return React.Children.map(this.props.children , (child) =>{

            return React.cloneElement(child, {...this.state})
        }) 
    }



}




export default store
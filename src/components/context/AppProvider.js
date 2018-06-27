import React, { Component } from 'react'
import { ContextApi } from './contextApi';



class AppProvider extends Component{
    render(){
        return(
            <ContextApi.Provider value="Hi from Context" >
                {this.props.children}
            </ContextApi.Provider>
        )
    }
};

export default AppProvider;
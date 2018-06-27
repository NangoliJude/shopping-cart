import React, { Component } from 'react';

class ErrorBoundry extends Component{
    state ={
        hasError: false,
        error: null,
        errorInfo: null
           }

    componentDidCatch(error, errorInfo){
        this.setState({ 
                hasError: true,
                error,
                errorInfo
            })
        }

    render(){
        if(this.state.hasError){
            return <p>Oppps! Error occured our engineers are working on it</p>
        }
        return(
            <React.Fragment>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default ErrorBoundry;
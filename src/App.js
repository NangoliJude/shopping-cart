import React, { Component } from 'react';
import styled from 'styled-components'
import AppProvider from './components/context/AppProvider';
import Main from './components/Main'


const MainWrapper = styled.main`
width: 100vw;
height: 100vh;
background-color: red;
`

class App extends Component{
    render(){
        return(
            <MainWrapper>
               <AppProvider>
                   <Main/>
               </AppProvider>
            </MainWrapper>
        )
    }
};

export default App;
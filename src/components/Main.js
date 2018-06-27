import React from 'react';
import { ContextApi } from './context/contextApi';

const Main = ()=>{
    return(
        <section>
           <ContextApi.Consumer>
               {(context)=>(
                   <React.Fragment>
                       {context}
                   </React.Fragment>
               )}
           </ContextApi.Consumer>
        </section>
    )
};

export default Main;
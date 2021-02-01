import React from 'react'
import MarketingApp from './components/MarketingApp'
import Header from './components/Header'

export default () =>{
    return(
        <React.Fragment>
        <h1>This is Marketing App From Container. Enjoy now its working!!</h1>
        <Header />
        <MarketingApp />
        </React.Fragment>
    )
}
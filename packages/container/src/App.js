import React from 'react'
import MarketingApp from './components/MarketingApp'
import Header from "./components/Header"
import { BrowserRouter } from "react-router-dom"
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles'

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () =>{
    return(
        <BrowserRouter>
        <StylesProvider generateClassName={generateClassName}>
        <React.Fragment>
        <Header />
        <MarketingApp />
        </React.Fragment>
        </StylesProvider>
        </BrowserRouter>
    )
}
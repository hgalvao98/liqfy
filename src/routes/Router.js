import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import FormCO from '../pages/FormCO/FormCO'
import FormCG from '../pages/FormCG/FormCG'
import SuccessPage from '../pages/SuccessPage/SuccessPage'

const Router = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/form-capital-para-obras'>
                    <FormCO />
                </Route>
                <Route exact path='/form-capital-de-giro'>
                    <FormCG />
                </Route>
                <Route exact path='/success'>
                    <SuccessPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router
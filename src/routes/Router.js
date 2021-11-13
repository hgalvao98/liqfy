import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from '../components/Header/Header'
import Home from '../pages/Home/Home'
import FormPJ from '../pages/FormPJ/FormPJ'
import FormPF from '../pages/FormPF/FormPF'
import FormCO from '../pages/FormCO/FormCO'
import FormCI from '../pages/FormCI/FormCI'
import FormCG from '../pages/FormCG/FormCG'

const Router = () =>{
    return (
        <BrowserRouter>
        <Header />
        <Switch>
            <Route exact path = '/'>
                <Home />
            </Route>
            <Route exact path = '/form-pessoa-juridica'>
                <FormPJ />
            </Route>
            <Route exact path = '/form-pessoa-fisica'>
                <FormPF />
            </Route>
            <Route exact path = '/form-capital-para-obras'>
                <FormCO />
            </Route>
            <Route exact path = '/form-capital-de-giro'>
                <FormCG />
            </Route>
            <Route exact path = '/form-compra-de-imoveis'>
                <FormCI />
            </Route>
        </Switch>
        </BrowserRouter>
    )
}

export default Router
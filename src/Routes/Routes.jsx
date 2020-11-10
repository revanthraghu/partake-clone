import React from 'react'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Homepage from '../components/Homepage'
import Faq from '../components/Faq'
import About from '../components/About'
import Login from '../components/Login'
import Locations from '../components/Locations'
import Contact from '../components/Contact'
import Shop from '../components/Shop'
import ProductPage from '../components/ProductPage'
import PageNotFound from '../components/PageNotFound'
import Cart from '../components/Cart'
import PrivateRoute from './PrivateRoute'

function Routes() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path="/" render={() => <Homepage/> } />
                <Route path="/faq" render={() => <Faq/>} />
                <Route path="/about" render={() => <About/>} />
                <Route path="/login" render={(props) => <Login {...props}/>} />
                <Route path="/locations" render={() => <Locations/>} />
                <Route path="/contact" render={() => <Contact/>} />
                <Route exact path="/shop" render={(props) => <Shop {...props} />} />
                <Route path="/shop/:sku" render={(props) => <ProductPage {...props} sku={props.match.params.sku}/>} /> 
                <PrivateRoute path="/cart" render={<Cart />} redirect="/login" />
                <Route render={() => <PageNotFound />} />
            </Switch>
        </React.Fragment>
    )
}

export default Routes
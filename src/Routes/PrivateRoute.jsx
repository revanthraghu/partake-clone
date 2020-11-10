import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {AuthContext} from '../Contexts/AuthContext'

function PrivateRoute(props) {
    return (
        <AuthContext.Consumer>
            {
                ({auth}) => {
                    if(auth) {
                        return <Route path={props.path} render={() => props.render} />
                    }
                    else {
                        return <Redirect to={props.redirect} />
                    }
                }
            }
        </AuthContext.Consumer>
    )
}

export default PrivateRoute
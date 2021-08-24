import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types';

export const PrivateRoute = ({
    isAuth,
    component: Component,
    ...rest
}) => {

    // lastPath on click Logout
    localStorage.setItem('lastPath', rest.location.pathname);

    return (
        <div>
            <Route {...rest}
                component={ ( props ) => (
                    ( isAuth )
                    ? <Component  {...props} />
                    : <Redirect to="/login" />
                )}
            /> 
        </div>
    )
}

PrivateRoute.propTypes = {
    isAuth: PropTypes.bool.isRequired,
    component : PropTypes.func.isRequired
}

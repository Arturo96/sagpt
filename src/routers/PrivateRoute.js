import React from "react";
import { Redirect, Route } from "react-router-dom";
import PropTypes from 'prop-types';

export const PrivateRoute = (
    { isLogged,
      component: Component,
      ...rest 
    }) => {
	return (
        isLogged ? <Route {...rest} component={Component} />
                 : <Redirect to="/" />
    )
};

PrivateRoute.propTypes = {
    isLogged: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}
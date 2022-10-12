import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Footer from '../Componet/Footer/Footer';
import Header from '../Componet/Header/Header';

function ClinetRoute({Component: Component, ...rest}) {
    let auth = useSelector(state => state.auth);
    return (
        <Route {...rest} render={props => (
            auth.user !== null ?
                <>
                    <Header />
                    <Component {...props} />
                    <Footer />
                </>
                :
                <>
                    <Header />
                    <Redirect to="/login" />
                    <Footer />
                </>
        )}>

        </Route>
    );
}

export default ClinetRoute;
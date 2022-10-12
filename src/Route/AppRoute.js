import React from 'react';
import { Switch } from "react-router-dom";
import Home from '../Container/Home/Home'
import About from '../Container/About/About';
import shop from '../Container/shop/shop';
import contact from '../Container/contact/contact';
import shope_singal from '../Container/shop-singal/shope_singal';
import Categaryadmin from '../admin/Container/Categaryadmin';
import Prodactadmin from '../admin/Container/Prodactadmin';
import Productview from '../Componet/Productview/Productview';
import Categoryview from '../Componet/Categoryview/Categoryview';
import Addtocart from '../Componet/Addtocart/Addtocart';
import Login from '../Container/Login/Login';
import PublicRoute from "../Route/PublicRoute";
import PrivateRoute from "../Route/PrivateRoute";
import ClinetRoute from '../Route/ClinetRoute';

function AppRoute(props) {
    return (
        <div>
            <Switch>
                <PublicRoute exact path={"/"} component={Home} />
                <PublicRoute exact path={"/about"} component={About} />
                <PublicRoute exact path={"/shop"} component={shop} />
                <PublicRoute exact path={"/contact"} component={contact} />
                <PublicRoute exact path={"/shope-singal"} component={shope_singal} />
                <ClinetRoute exact path={"/categoryadmin"} component={Categaryadmin} />
                <PrivateRoute exact path={"/productadmin"} component={Prodactadmin} />
                <PublicRoute exact path={"/productview"} component={Productview} />
                <PublicRoute exact path={"/categoryview"} component={Categoryview} />
                <PrivateRoute exact path={"/addtocart"} component={Addtocart} />
                <PublicRoute exact path={"/login"} restricted={true} component={Login} />
            </Switch>
        </div>
    );
}

export default AppRoute;
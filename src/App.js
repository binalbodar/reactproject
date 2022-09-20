import './App.css';
import { Route, Switch } from "react-router-dom";
import Footer from './Componet/Footer/Footer';
import Header from './Componet/Header/Header';
import Home from './Container/Home/Home';
import About from './Container/About/About';
import shop from './Container/shop/shop';
import contact from './Container/contact/contact';
import shope_singal from './Container/shop-singal/shope_singal';
import Categaryadmin from './admin/Container/Categaryadmin';
import { Provider } from 'react-redux';
import { configurStore } from './Redux/Store';
import Prodactadmin from './admin/Container/Prodactadmin';
import Productview from './Componet/Productview/Productview';
import Categoryview from './Componet/Categoryview/Categoryview';

function App() {
  const { store } = configurStore()
  return (
    <>
      <Provider store={store}>
        <Header />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about"} component={About} />
            <Route exact path={"/shop"} component={shop} />
            <Route exact path={"/contact"} component={contact} />
            <Route exact path={"/shope-singal"} component={shope_singal} />
            <Route exact path={"/categoryadmin"} component={Categaryadmin} />
            <Route exact path={"/productadmin"} component={Prodactadmin}/>
            <Route exact path={"/productview"} component={Productview}/>
            <Route exact path={"/categoryview"} component={Categoryview}/>
          </Switch>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
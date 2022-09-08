import './App.css';
import { Route, Switch } from "react-router-dom";
import Footer from './Componet/Footer/Footer';
import Header from './Componet/Header/Header';
import Home from './Container/Home/Home';
import About from './Container/About/About';
import shop from './Container/shop/shop';
import contact from './Container/contact/contact';

function App() {
  return (
    <>
    <Header/>
      <Switch>
        <Route exact path={"/"} component={Home}/>
        <Route exact path={"/about"} component={About}/>
        <Route exact path={"/shop"} component={shop}/>
        <Route exact path={"/contact"} component={contact}/>
      </Switch>
    <Footer/> 
    </>
  );
}

export default App;
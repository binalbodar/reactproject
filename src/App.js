import './App.css';
import Footer from './Componet/Footer/Footer';
import Header from './Componet/Header/Header';
import { Route, Switch } from "react-router-dom";
import Home from './Container/Home/Home';
import About from './Container/About/About';
import Blog from './Container/Blog/Blog';
import contact from './Container/contact/contact';
import shop from './Container/catalog/shop/shop';
import singalproduct from './Container/catalog/singalproduct/singalproduct';
import cart from './Container/catalog/cart/cart';
import checkout from './Container/catalog/checkout/checkout';

function App() {
  return (
    <>
      <Header/>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/about"} component={About}/>
          <Route exact path={"/blog"} component={Blog}/>
          <Route exact path={"/contact"} component={contact}/>
          <Route exact path={"/shop"} component={shop}/> 
          <Route exact path={"/singalproduct"} component={singalproduct}/>
          <Route exact path={"/cart"} component={cart}/>
          <Route exact path={"/checkout"} component={checkout}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
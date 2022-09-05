import './App.css';
import Footer from './Componet/Footer/Footer';
import Header from './Componet/Header/Header';
import { Route, Switch } from "react-router-dom";
import Home from './Container/Home/Home';
import About from './Container/About/About';

function App() {
  return (
    <>
      <Header/>
        <Switch>
          <Route exact path={"/"} component={Home}/>
          <Route exact path={"/about"} component={About}/>
        </Switch>
      <Footer/>
    </>
  );
}

export default App;
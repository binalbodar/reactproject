import './App.css';
import Footer from './Componet/Footer/Footer';
import Header from './Componet/Header/Header';
import { configurStore } from './Redux/Store';
import AppRoute from './Route/AppRoute';

function App() {
  const { store } = configurStore()
  return (
    <>
      <Header />
      <AppRoute />
      <Footer />
    </>
  );
}

export default App;
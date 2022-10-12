import './App.css';
import Footer from './Componet/Footer/Footer';
import Header from './Componet/Header/Header';
import { Provider } from 'react-redux';
import { configurStore } from './Redux/Store';
import AppRoute from './Route/AppRoute';

function App() {
  const { store } = configurStore()
  return (
    <>
      <Provider store={store}>
        <Header />
          <AppRoute/>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Cart from './pages/Cart';
import DetailsPage from './pages/DetailsPage';
import LandingPages from './pages/LandingPages';
import SuccessPages from './pages/SuccessPages';
import NotFoundPages from './pages/NotFoundPages';
import Provider from './helpers/hooks/useGlobalContext';

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route
            exacth
            path='/'
            element={<LandingPages />}
          />
          <Route
            exacth
            path='/categories/:idc/products/:idp'
            element={<DetailsPage />}
          />
          <Route
            exacth
            path='/cart'
            element={<Cart />}
          />
          <Route
            exacth
            path='/success'
            element={<SuccessPages />}
          />
          <Route
            exacth
            path='*'
            element={<NotFoundPages />}
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

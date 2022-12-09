import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart';
import DetailsPage from './pages/DetailsPage';
import LandingPages from './pages/LandingPages';
import SuccessPages from './pages/SuccessPages';
import NotFoundPages from './pages/NotFoundPages';

function App() {
  return (
    <>
      <div className='App font-open-sans'>
        <Routes>
          <Route
            exacth
            path='/'
            element={<LandingPages />}
          />
          <Route
            exacth
            path='/categories/:idc/products/:id'
            element={<DetailsPage />}
          />
          <Route
            exacth
            path='/cart/:idc'
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
      </div>
    </>
  );
}

export default App;

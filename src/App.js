import { Routes, Route } from 'react-router-dom';
import LandingPages from './pages/LandingPages';
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
        </Routes>
      </div>
    </>
  );
}

export default App;

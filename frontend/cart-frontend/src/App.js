

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        {/* <Route path="/not-found" element={<NotFound /> } /> */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

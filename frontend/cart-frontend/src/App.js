

import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from './components/auth/Register';

function App() {
  return (
    <div>
      <ToastContainer />
      <NavBar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

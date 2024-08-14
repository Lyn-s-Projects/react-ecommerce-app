import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import { CartProvider } from './contexts/CartContext';
import Navbar from './components/Navbar';
import GlobalMessage from './components/GlobalMessage';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className='App'>
          <Navbar />
          <GlobalMessage />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/products' element={<Products />} />
            <Route path='/cart' element={<CartPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;

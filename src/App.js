
import './App.css';
import NavBar from './components/navbar';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import AboutUs from './pages/aboutus';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

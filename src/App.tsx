import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/main-page.js';
import Header from './components/header.js';
import NotFoundPage from './pages/not-found-page.js'
import AboutPage from './pages/about-page.js';
import CabinsPage from './pages/cabins-page.js';
import CabinInfoPage from './pages/cabin-info-page.js';
import RegisterPage from './pages/register-page.js';
import LoginPage from './pages/login-page.js';
import OrderCabinPage from './pages/order-cabin-page.js';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-wrapper">
          <div className="app-innhold">
            <Header />

            <div className="main-content">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/omoss" element={<AboutPage />} />
                <Route path="/hytter" element={<CabinsPage/>} />
                <Route path="/hytter/:cabinId" element={<CabinInfoPage/>} />
                <Route path="/leie-hytta" element={<OrderCabinPage/>} />
                <Route path="/register" element={<RegisterPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </div>

          </div>
        </div>
      </div>
    </Router>
  )
}
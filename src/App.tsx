import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from './pages/main-page.jsx';

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-wrapper">
          <div className="app-innhold">
            {/* <Header /> */}

            <div className="main-content">
              <Routes>
                <Route path="/" element={<MainPage />} />
              </Routes>
            </div>

            {/* <Footer /> */}
          </div>
        </div>
      </div>
    </Router>
  )
}
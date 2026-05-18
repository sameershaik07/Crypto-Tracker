
import './App.css';
import CoinPage from './pages/Coin';
import ComparePage from './pages/ComparePage';
import DashboardPage from './pages/Dashboard';
import HomePage from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Watchlist from './pages/Watchlist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>

      </BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        theme="light"
      />
    </div >
  );
}

export default App;

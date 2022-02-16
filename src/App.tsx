import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Forecast from './components/Forecast';
import Home from './components/Home';
import Layout from './components/Layout'
import { Login } from './pages/Login'


localStorage.setItem('email','welcome');
localStorage.setItem('pass','home');
localStorage.setItem('logged','0');

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login" element={<Login />}>
          </Route>
          <Route path="/forecast" element={<Forecast />}>
          </Route>
          <Route path="/" element={<Home />}>
          </Route>
          <Route path="*" element={<Navigate to="/Home" />}>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
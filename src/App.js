import './App.css';
import Landing from './pages/Landing';
import Feed from './pages/Feed';
import Details from './pages/Details';
import Signup from './pages/Signup';
import Login from './pages/Login';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/details" element={<Details />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />

    </Routes>
  </BrowserRouter>
      

  );
}

export default App;

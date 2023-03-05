//import logo from './logo.svg';
import './App.css';
// import Login from './Login/Login';
import Admin from './Admin/Admin';
import Blog from './Blog/Blog';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
// import About from './Pages/About';

function App() {
  return (
    <>
      {/* <Login></Login> */}
      {/* <Blog></Blog> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="blog" element={<Blog />} />
            <Route path="admin" element={<Admin />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}
export default App;

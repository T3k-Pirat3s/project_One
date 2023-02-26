//import logo from './logo.svg';
import './App.css';
// import Login from './Login/Login';
// import Admin from './Admin/Admin';
import Blog from './Blog/Blog';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import About from './Pages/About';

function App() {
  return (
    <>
      {/* <Login></Login> */}
      {/* <Admin></Admin> */}
      {/* <Blog></Blog> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  );
}
export default App;

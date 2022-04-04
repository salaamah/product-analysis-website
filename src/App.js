import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Review from './components/Review/Review';
import Blogs from './components/Blogs/Blogs';
import Dashboard from './components/Dashboard/Dashboard';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Bus Review Site</h1>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/review' element={<Review></Review>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;

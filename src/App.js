
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import About from './components/about';
import Room from './components/room';
import Gallery from './components/gallery';
import Blog from './components/blog';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path ="/about" element={<About/>}/>
        <Route path="/room" element={<Room/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}
export default App;

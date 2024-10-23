
import './App.css';
import Footer from './WebPage/Footer';
import Home from './WebPage/Home';
import Nav from './WebPage/Nav';
import Projects from './WebPage/Projects';


function App() {
  return (
   <div className='Web-Page'>
    <Nav />
    <Home />
    <Projects />
    <Footer />
   </div>
  );
}

export default App;

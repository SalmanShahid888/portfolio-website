import About from './About';
import './App.css';
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Introduction from './Introduction'
import Skills from './Skills';

function App() {
  return (
    <div className="App">
      <Header/>
      <Introduction/>
      <Skills/>
      <About/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

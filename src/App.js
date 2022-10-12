import About from './About';
import './App.css';
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
      <Footer/>
    </div>
  );
}

export default App;

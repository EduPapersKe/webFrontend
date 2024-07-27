
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pills from './components/pills';
import List from './components/Listgroup';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Navbar />
      </div>
      <div className=' mt-3 '>
        <Pills />
      </div>
      <div>
        <Footer />
      </div>

    </div >

  );
}

export default App;

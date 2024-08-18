
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Pills from './components/pills';
import Card from './components/Cards';
import data from './data';

function App() {
  const workerinfo = data.map(info =>
    <Card key={info.id} info={info} readOnly={false} />)
  return (
    <div className="App">
      <div className=''>
        <Navbar />
      </div>
      <div className=' mt-3 '>
        <Pills />
      </div>
      <div className='card-top m-3 p-2'>
        <h3>TOP Rated papers</h3>
      </div>
      <div style={{ background: "antiquewhite" }} className='container'>
        <div className="mb-3 row">
          {workerinfo}
        </div>
      </div>
      <div>
        <Footer />
      </div>

    </div >

  );
}

export default App;

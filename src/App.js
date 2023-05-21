import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Cacti from './Components/Cacti';
import CactusDetails from './Components/CactusDetails';
import NewCactus from './Components/NewCactus';
import NotFound from './Components/NotFound';
import Footer from './Components/Footer';
import EditCactus from './Components/EditCactus';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cacti' element={<Cacti />} />
        <Route path='/cacti/:id' element={<CactusDetails />} />
        <Route path='/cacti/:id/edit' element={<EditCactus />} />
        <Route path='/new' element={<NewCactus />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

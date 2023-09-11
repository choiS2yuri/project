import './App.css';
import { Route, Routes } from 'react-router-dom';
import Search from './components/Search';

import Main from './pages/Main';
import Sdetail from './components/Sdetail';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/search' element={<Search />} />
        <Route path='/sdetail' element={<Sdetail />} />
      </Routes>
    </>


  );
}

export default App;

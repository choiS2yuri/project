import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Search from './pages/Search';
import Test from './pages/Test';
import SearchD from './pages/SearchD';


function App() {
  
  return (
    <>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/search' element={<Search />} />
        <Route path='/searchd' element={<SearchD />} />
        <Route path='/test' element={<Test />} />
      </Routes>
    </>


  );
}

export default App;

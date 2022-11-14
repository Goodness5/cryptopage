import './App.css';
import Home from './home'
import Place from './place'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/placetostay' element={ <Place/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

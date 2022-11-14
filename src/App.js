import './App.css';
import Home from './home'
import Place from './place'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ConnectWallet from './wallet'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Home/> }/>
        <Route path='/placetostay' element={ <Place/> }/>
        <Route path='/wallet' element={ <ConnectWallet/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

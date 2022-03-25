import logo from './logo.svg';
import './App.css';
import { LandingPage } from './Components/LandingPage'; 
import { Form } from './Components/Form';

import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path = '/' element={<LandingPage/>} />
        <Route exact path = '/form' element={<Form/>} />
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

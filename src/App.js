
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import First from './Pages/First';
import Second from './Pages/Second';
import Third from './Pages/Third';
import Fourth from './Pages/Fourth';


function App() {
  return (
    <div>

      {/* <Second/> */}
      {/* <Third/> */}
      
      <BrowserRouter>
           <Routes>
             <Route path="/" element={<First/>}/>
             <Route path='/second' element={<Second/>}/>
             <Route path="/third" element={<Third/>}/>
             <Route path="/fourth" element={<Fourth/>}/>
           </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

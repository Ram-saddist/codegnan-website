import Home from './Home/Home';
import Contact from './Contact/Contact'
import Navigation from './Navigation/Navigation';
import './App.css';
import {Routes,Route} from 'react-router-dom'
function App() {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/" element={ <Home/> }  />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;

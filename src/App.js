import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navigation from './Components/Navigation';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Profil from './Pages/Profil';
import Users from './Pages/Users';



function App() {
  return (
    <div className="App">
     <Navigation/>
   

     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/profil/:id" element={<Profil/>}/>

      
     </Routes>
    </div>
  );
}

export default App;


import './App.css';
//import {BrowserRouter as Router,Link } from 'react-router-dom';
//import { Route } from 'react-router-dom';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import { MovieContext } from './showData';
import Detail from './components/Detail';

function App() {
  return (
   
    <div className="App">
   
     <BrowserRouter>
     {/* <Link to ='/login'>Login</Link> */}
     <Header />
     <Routes>
       <Route exact path="/" element={<Login />} />
     </Routes>
     <Routes>
       <Route  path="/home" element={<Home/>} />
     </Routes>
     <Routes>
       <Route  path="/detail/recommends/:idrec" element={<Detail />} />
     </Routes>
     <Routes>
       <Route  path="/detail/originals/:idorg" element={<Detail />} />
     </Routes>
     <Routes>
       <Route  path="/detail/trending/:idtren" element={<Detail />} />
     </Routes>
     <Routes>
       <Route  path="/detail/new2disney/:iddis" element={<Detail />} />
     </Routes>
     </BrowserRouter>
   
     
    
    </div>
  );
}

export default App;

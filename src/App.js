import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home';


function App() {
  return (
    <>
    <Router>
      <Navigation />
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      </Routes>
    </Router>

    </>
  );
}

export default App;

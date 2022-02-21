import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Error404 from './pages/Error404';
import Register from './pages/Register'; 
import Login from './pages/Login'; 
import GetStudent from './pages/GetStudent';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element={ <Register />  } />
            <Route path="/get_student/:id" element={ <GetStudent /> } />
            <Route path="*" element={ <Error404 /> } />
        </Routes>
    </Router>
  );
}

export default App;


import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './Components/login';
import RegPage from './Components/register';
import Dashboard from './Components/Dashboard/dashboard';
import NewHomePage from './Components/HomePage/home';

import TakeOrder from './Components/Takeorder/takeorder';

function App() {
  // const user = userSelector(selectUser);



  return (
    <Router>
      <Routes>
        
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/' element={<NewHomePage />} />
        <Route path='/take' element={<TakeOrder />} />
        
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/create' element={<RegPage />} />
      </Routes>
    </Router>
  );
}

export default App;

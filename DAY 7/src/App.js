
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import LoginPage from './Components/login';
import RegPage from './Components/register';
import Dashboard from './Components/Dashboard/dashboard';
import NewHomePage from './Components/HomePage/home';
import AdminLoginPage from './Components/Admin/adminlogin';
import TakeOrder from './Components/Takeorder/takeorder';
import PrivacyPolicy from './Components/PrivacyPolicy/privacy';
import AboutPage from './Components/About/about';
import ContactUs from './Components/Contact us/contact';
import FAQ from './Components/FAQ/faq';
import Terms from './Components/PrivacyPolicy/terms';


function App() {
  // const user = userSelector(selectUser);



  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<NewHomePage />} />
        <Route path='/terms' element={<Terms/>} />
        {/* <Route path='/' element={<FAQ />} /> */}

        <Route path='/contact' element={<ContactUs />} />
        <Route path='/about' element={<AboutPage />} />

        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/adminlogin' element={<AdminLoginPage />} />
        
        <Route path='/dash' element={<Dashboard />} />
        <Route path='/take' element={<TakeOrder />} />
        <Route path='/login' element={<LoginPage />} /> 
        <Route path='/create' element={<RegPage />} />
      </Routes>
    </Router>
  );
}

export default App;

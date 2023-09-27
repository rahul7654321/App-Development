import React, { useState } from 'react';
import '../Assert/login.css';
import { Link,useNavigate  } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../Features/userSlice';



const LoginPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 


  

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const user = {
      username: 'rahul',
      password: '123',
    };

    if (formData.username === user.username && formData.password === user.password) {
      
      navigate('/take'); 
    } else {
      setError('Invalid username or password');
    }
  };
 const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); 
    dispatch(login({
      name:formData.username,
      loggedIn:true,
    }))
  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        
        <div class="box">
        <div class="container">
            <div class="top-header">
                <header> <h2>Login</h2></header>
                <br/><br/>

            </div>
            <div class="input-field">
                <input type="text" class="input" placeholder="Username"  name="username" value={formData.username}  onChange={handleChange} onSubmit={(e) => handleSubmit(e)} />
                <i class="bx bx-user"></i><br/><br/>
            {error && <div style={{ color: 'white' }}>{error}</div>}
                
            </div>
            <div class="input-field">
                <input type="password" class="input" placeholder="Password"   name="password" value={formData.password}  onChange={handleChange} />
                <i class="bx bx-lock-alt"></i>
                {error && <div style={{ color: 'white' }}>{error}</div>}
                <br/><br/>
            </div>
            <div class ="input-field">
              
                <input type="submit" class="submit" value="Login"/>
              
            </div>
            <div class="bottom">
                <div class="left">
                    <input type="checkbox"  id="check"/>
                    <label for="check"> Remember Me</label>
                </div>
                <div class="right">
                    <label><Link to={'/create'}>Create new Account</Link></label>
                </div>
            </div>
        </div>
    </div>
             </form><br/><br/><br/>
      {/* {error && <div style={{ color: 'red' }}>{error}</div>} */}
    </div>
  );
};

export default LoginPage;

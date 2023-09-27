import React, { useState } from 'react';
import '../Assert/login.css';
import { Link } from 'react-router-dom';

const RegPage = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username  ) {
        setError('Please fill in all fields');
        return;
      }
    if ( !formData.email) {
        setError('Please fill in all fields');
        return;
      }
    if ( !formData.password) {
        setError('Please fill in all fields');
        return;
      }
  

    
    // const user = {
    //   username: '',
    //   email:'',
    //   password: '',
    // };


    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError(''); 
  };

  return (
    <div className='main'>
      <form onSubmit={handleSubmit}>
        
        <div class="box">
        <div class="container">
            <div class="top-header">
                <header> <h2>Create Account </h2></header>
               
            </div>
            <div class="input-field">
                <input type="text" class="input" placeholder="Username"  name="username" value={formData.username}  onChange={handleChange} />
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <i class="bx bx-user"></i><br/><br/>
                
            </div>
            <div class="input-field">
                <input type="text" class="input" placeholder="Email"  name="email" value={formData.email}  onChange={handleChange} />
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <i class="bx bx-user"></i><br/><br/>
                
            </div>
            <div class="input-field">
                <input type="password" class="input" placeholder="Create - Password"   name="password" value={formData.password}  onChange={handleChange} />
                <i class="bx bx-lock-alt"></i>
                {error && <div style={{ color: 'red' }}>{error}</div>}
                <br/><br/>
            </div>
            <div class="input-field">
                <input type="submit" class="submit" value="Register"/>
            </div>
            <div class="bottom">
                
                <div class="right">
                    <br/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label><Link to={"/login"} >Already Have an account </Link></label>
                </div>
            </div>
        </div>
    </div>
             </form><br/><br/><br/>
     
    </div>
  );
};

export default RegPage;

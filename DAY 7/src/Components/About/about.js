import React from 'react';
import './about.css'; 
import { Link } from 'react-router-dom';

const AboutPage = () => {

    return (
        <div className="about" id="About">
            <div className="new-home">
               
            <section  className="New-Home-s">
            <nav>
                    <div className="new-logo">
                        <img src="https://logowik.com/content/uploads/images/restaurant9491.logowik.com.webp"/>
                    </div>

                    <ul>
                        <li cla><Link to={"/"} ><b>Home</b></Link></li>
                        <li><a href="#New-About"><b>About</b></a></li>
                       
                        <li><Link to={"/login"} ><b>Login</b></Link></li>
                        <li><Link to={"/adminlogin"} ><b>Admin</b></Link></li>
                        <li><Link to={"/contact"} ><b>Contact Us</b></Link></li>

                    </ul>
                </nav>
                </section>
                </div>
            <div className="about_main">

                <div className="image">
                    <img src="https://www.flavorable.io/static/media/banner-dish-2.8becab8a2eaafa7e0349.png" alt="Food Plate" />
                </div>

                <div className="about_text">
                    <h1><span>About</span> Us</h1>
                    <h3>Why Choose Us?</h3>
                    <p>
                        Welcome to FoodWay! We take pride in offering you a delightful dining experience 
                        that combines the finest ingredients with a passion for cooking. Our chefs craft each dish with 
                        care and creativity, ensuring that every bite is a culinary delight. Whether you're here for a 
                        casual meal or a special celebration, we promise a memorable experience that will keep you 
                        coming back for more.
                    </p>
                </div>

            </div>

            <Link to={"/login"} className="about_btn">Order Now</Link>

        </div>
    );
}

export default AboutPage;

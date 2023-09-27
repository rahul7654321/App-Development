import React from "react";
import './home.css';
import { Link } from "react-router-dom";
import logo from '../Admin/logo.png'

const NewHomePage = () => {
    return (
        <div className="new-home">
            <section className="New-Home-s">
                <nav>
                    <div className="new-logo">
                        <img src={logo}/>
                    </div>

                    <ul>
                        <li cla><Link to={"/"} ><b>Home</b></Link></li>
                        <li><Link to={"/about"}><b>About</b></Link></li>
                       
                        <li><Link to={"/login"} ><b>Login</b></Link></li>
                        <li><Link to={"/adminlogin"} ><b>Admin</b></Link></li>
                        <li><Link to={"/contact"} ><b>Contact Us</b></Link></li>
                        
                    </ul>
                </nav>

                <div className="new-main-h">
                    <div className="new-men_text">
                        <h1>Get <span>Food</span><br/>in a Easy Way</h1>
                    </div>

                    <div className="new-main_image">
                        <img src="https://i2.wp.com/gofry.com.fj/wp-content/uploads/2019/06/build-burger2.png?w=680&ssl=1"/>
                    </div>
                </div>

                <p>
                    Welcome to New FoodWay, where culinary artistry meets warm hospitality. Nestled in the heart of Kovaipudur, our restaurant is a haven for food enthusiasts seeking an exquisite dining experience. With a menu curated to delight every palate, our chefs craft each dish with precision and creativity. From savoring the rich flavors of our signature dishes to the comforting ambiance that envelops you, Come join us and let us elevate your dining experience to new heights. Welcome to a place where great food and warm smiles await you. Welcome to New FoodWay.
                </p>

                <div className="new-main_btn">
                <i className="bx bxs-right-arrow-alt"></i>
                    <Link to={"/login"}>  Order Now </Link>
    
                       
                   
                </div>
                
            </section>
            <section className="privacy">
                
                    <Link to={"/privacy"}>
                     @Privacy Policy 2023
                    </Link>
                    <br/>
                    <br/>
                    <Link to={"/terms"}>
                    Terms and Conditions
                    </Link>
                    <br/>
                    <br/>
                    <text class="copyright">
      &copy; <script>
        document.write(new Date().getFullYear());
      </script> Food Way, Inc. All Rights Reserved.
    </text>
    <br/><br/><br/>
                   
                
            </section>
            <section>
          
                
            </section>
           

        </div>
    );
};

export default NewHomePage;

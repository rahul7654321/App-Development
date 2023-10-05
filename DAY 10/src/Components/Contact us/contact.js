import React from 'react';
import "./contact.css";
import { Link } from 'react-router-dom';
import FAQ from '../FAQ/faq';
class ContactUs extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          name: '',
          email: '',
          number: '',
          orderQuantity: '',
          foodName: '',
          address: '',
          allFieldsFilled: false
        };
      }
    
      handleInputChange = (e) => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        }, this.checkAllFieldsFilled);
      }
    
      checkAllFieldsFilled = () => {
        const { name, email, number, orderQuantity, foodName, address } = this.state;
        const allFieldsFilled = name && email && number && orderQuantity && foodName && address;
        this.setState({ allFieldsFilled });
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
    
        if (this.state.allFieldsFilled) {
          
          this.props.history.push('/login');
        }
      }
    
  render() {
    
    return (
      <div className="order" id="Order">
<Link to={"/"}>
        <h1><span>Contact</span> Us</h1>
</Link>
        
        <div className="order_main">

            <div className="order_image">
                <img src="https://shorturl.at/vINQW" alt="Order" />
            </div>

            <form action="#">

                <div className="input">
                    <p>Name</p>
                    <input type="text" placeholder="your name" />
                </div>

                <div className="input">
                    <p>Email</p>
                    <input type="email" placeholder="your email" />
                </div>

                <div className="input">
                    <p>Number</p>
                    <input placeholder="your number" />
                </div>

                <div className="input">
                    <p>How Much</p>
                    <input type="number" placeholder="how many order" />
                </div>

                <div className="input">
                    <p>Your Order</p>
                    <input placeholder="food name" />
                </div>

                <div className="input">
                    <p>Address</p>
                    <input placeholder="your Address" />
                </div>
                  <Link to={"/login"}>
                <button type="submit" className="order_btn">Order Now</button>
                  </Link>

            </form>

        </div>
        <div>
<FAQ/>
        </div>

    
    </div>
    );
  }
}

export default ContactUs;

import React, { useEffect } from 'react';
import "./faq.css";

const FAQ = () => {
  useEffect(() => {
    const accordion = document.querySelectorAll('.accordion h3');
    let mainParent;
    let height;
    let answer;

    accordion.forEach(item => {
      item.addEventListener('click', () => {
        height = item.parentElement.nextElementSibling.firstElementChild.offsetHeight;
        answer = item.parentElement.nextElementSibling;
        mainParent = item.parentElement.parentElement;
        if (mainParent.classList.contains('active')) {
          mainParent.classList.remove('active');
          answer.style.height = `0px`;
        } else { 
          mainParent.classList.add('active');
          answer.style.height = `${height}px`;
        }
      });
    });

    // Clean up event listeners on component unmount
    return () => {
      accordion.forEach(item => {
        item.removeEventListener('click', () => {});
      });
    };
  }, []); 

  return (
    <section className='rr'>
         <h1><span>Frequenty Asked </span> Questions</h1>
         {/* <br></br> */}
      <div className="accordion">
        <div className="question">
          <h3>What sets New FoodWay apart from other restaurants?</h3>
        </div>
        <div className="answer">
          <p>
          At New FoodWay, we blend culinary artistry with warm hospitality to offer you an exquisite dining experience. Our chefs meticulously craft each dish, ensuring a delightful fusion of flavors that sets us apart.


          </p>
        </div>
      </div>

      <div className="accordion">
        <div className="question">
          <h3>Can I expect a diverse menu at New FoodWay?</h3>
        </div>
        <div className="answer">
          <p>
          Absolutely! Our menu is thoughtfully curated to cater to a wide range of palates. From delectable appetizers to mouthwatering mains and divine desserts, we have something for everyone.
          </p>
        </div>
      </div>

      <div className="accordion">
        <div className="question">
          <h3>Is New FoodWay suitable for special occasions and celebrations?</h3>
        </div>
        <div className="answer">
          <p>
          Certainly! Whether it's an intimate dinner or a grand celebration, we're here to make your special moments memorable. Our inviting ambiance and exceptional service add a touch of elegance to any occasion.


          </p>
        </div>
      </div>
      <div className="accordion">
        <div className="question">
          <h3>What signature dishes should I not miss at New FoodWay?</h3>
        </div>
        <div className="answer">
          <p>
          Don't leave without trying our renowned signature dishes, such as the exquisite mexican cheese burger and the indulgent bacon strip. They're a testament to our culinary expertise.

          </p>
        </div>
      </div>

      <div className="accordion">
        <div className="question">
          <h3>How do you ensure the quality and freshness of your ingredients?</h3>
        </div>
        <div className="answer">
          <p>
          Quality is paramount to us. We source only the finest, freshest ingredients, ensuring that every dish we serve is a testament to our commitment to excellence.
          </p>
        </div>
      </div>
      <div className="accordion">
        <div className="question">
          <h3>How can I make a reservation at New FoodWay?</h3>
        </div>
        <div className="answer">
          <p>
          Making a reservation is easy! You can either call us at [Specify Contact Number] or use our online reservation system on our website. We look forward to hosting you at New FoodWay!.          </p>
        </div>
      </div>
      
    </section>
  );
}

export default FAQ;

import React from 'react';
import './Distributors.css'; // External CSS for styling
import Distributorsimage1 from '../Images/Distributors1.jpg';
import Distributorsimage2 from '../Images/Distributors2.jpg';

function Distributors() {
  return (
    <div className="distributors-container">
      <h1>We Wanted Distributors</h1>

      <div className="distributor-info">
        <ul>
          <li><span>Customizable Diaper Pads for All Needs:</span> We offer diaper pads that are fully customizable, catering to different needs such as varying absorbency, size, and material. Whether you need pads for newborns, toddlers, or adults, our products can be tailored to ensure maximum comfort and reliability.</li>
          <li><span>Personalized Branding Options:</span> In addition to providing high-quality diaper pads, we also allow customers to manufacture products under their own personal or business brand. Perfect for small businesses or individual ventures looking to launch their own line of diaper pads with customized branding.</li>
          <li><span>
          High-Quality Manufacturing Standards:</span> Our manufacturing process adheres to the highest standards, ensuring that each diaper pad is made from soft, breathable, and absorbent materials. We use advanced techniques to guarantee durability, comfort, and effectiveness.</li>
          
          <li><span>Flexible Order Quantities:</span> Whether you're a distributor looking for large quantities or an individual seeking small custom orders, we offer flexibility in order sizes. We can meet your demand, whether you're looking to order in bulk or request small personalized batches.</li>
          
          <li><span>Fast Delivery & Efficient Logistics: </span>We pride ourselves on timely delivery and efficient logistics. Our streamlined processes ensure that your order reaches you promptly, whether it's for personal branding or bulk distribution. We handle every order with care and professionalism.</li>
          <li><span>Customer-Centric Service:</span> Our customers are at the heart of everything we do. From customized orders to personal branding requests, we provide exceptional support, ensuring that every product meets your unique needs. Whether you're a new customer or a long-time distributor, we’re here to help you every step of the way.</li>
        </ul>
      </div>

      <div className="distributors-images">
        <img src={Distributorsimage1} alt="Distributor 1" className="distributor-image" />
        <img src={Distributorsimage2} alt="Distributor 2" className="distributor-image" />
      </div>
    </div>
  );
}

export default Distributors;

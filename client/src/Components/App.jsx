import React from 'react';
import './MyComponent.css';
import Burger from "../img/burger.png"
import Chebyrek from "../img/chebyrek.jpg"
import Chiken from "../img/chiken.jpg"
import Potato from "../img/potatoes.jpg"



const MyComponent = (i) => {
  return (
    <div>
    <div className="image-container">
      <img className={"image"} src={Burger} alt=""/>
      <img className={"image"} src={Chebyrek} alt=""/>
      <img className={"image"} src={Chiken} alt=""/>
      <img className={"image"} src={Potato} alt=""/>
    </div>
    <div className="text-names">
        <p className="image-text">Smoked salmon burger</p>
        <p className="image-text">Chebyrek nyam nyam</p>
        <p className="chiken-text image-text">Chicken Biryani Gout</p>
        <p className="image-text">Spicy potato</p>
    </div>
    </div>
  );
};

export default MyComponent;

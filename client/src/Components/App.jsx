import React from 'react';
import './MyComponent.css';
import Burger from "../img/burger.png"
import Chebyrek from "../img/chebyrek.jpg"
import Chiken from "../img/chiken.jpg"
import Potato from "../img/potatoes.jpg"
import { BarSvg, PizzaSvg, TimeSvg } from './iconsSvg';



const MyComponent = () => {
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
    <div className='block-names'>
        <div className='info-block'><TimeSvg/><span className='text-info'>20 min</span> <PizzaSvg/> <span className='text-info'>3 service</span></div>
        <div className='info-block'><TimeSvg/><span className='text-info'>20 min</span> <PizzaSvg/> <span className='text-info'>3 service</span></div>
        <div className='info-block'><TimeSvg/><span className='text-info'>20 min</span> <PizzaSvg/> <span className='text-info'>3 service</span></div>
        <div className='info-block'><TimeSvg/><span className='text-info'>20 min</span> <PizzaSvg/> <span className='text-info'>3 service</span></div>
    </div>
    <div className='block-dif'>
    <div className='dif-block-small'>
          <h2>Difficulty</h2>
          <div className='blockbig-t'>
          <div className='block-target'>Easy</div>
          <div className='block-target'>Medium</div>
          <div className='block-target'>Hard</div>
          </div>
        </div>
        <div className='dif-block-small'>
          <h2>Difficulty</h2>
          <div className='blockbig-t'>
          <div className='block-target'>Easy</div>
          <div className='block-target'>Medium</div>
          <div className='block-target'>Hard</div>
          </div>
        </div>
        <div className='dif-block-small'>
          <h2>Difficulty</h2>
          <div className='blockbig-t'>
          <div className='block-target'>Easy</div>
          <div className='block-target'>Medium</div>
          <div className='block-target'>Hard</div>
          </div>
        </div>
        <div className='dif-block-small'>
          <h2>Difficulty</h2>
          <div className='blockbig-t'>
          <div className='block-target'>Easy</div>
          <div className='block-target'>Medium</div>
          <div className='block-target'>Hard</div>
          </div>
        </div>
    </div>
    </div>
  );
};

export default MyComponent;

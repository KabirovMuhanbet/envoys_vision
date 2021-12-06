import React from 'react';
import back from '../../images/back.svg';
import '../../styles/Exchange.scss';
function SwapContent() {
   return (
      <div className="exchange__swapContent">
         <div className="exchange__back">
            <div className="exchange__back-text">
               <span className="exchange__back-title">Exchange</span>
               <span>Trade tokens in an instant</span>
            </div>
            <div className="exchange__back-icon">
               <img src={back} alt="" />
            </div>
         </div>
      </div>
   )
}

export default SwapContent;

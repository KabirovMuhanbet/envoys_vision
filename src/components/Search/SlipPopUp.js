import React from 'react';
import '../../styles/Search.scss';
function SlipPopUp() {
   const [selectedSlip, setSelectedSlip] = React.useState(2);
   const [switcherChecked, setSwitcherChecked] = React.useState(false);
   return (
      <div className="search__slip">
         <span>Slip Tolerance</span>
         <div className="search__slip-items">
            <div 
            className={selectedSlip === 1 ? "search__slip-item active" : "search__slip-item"}
            onClick={() => setSelectedSlip(1)} >
               <span className="search__slip-option">2%</span>
            </div>
            <div 
            className={selectedSlip === 2 ? "search__slip-item active" : "search__slip-item"}
            onClick={() => setSelectedSlip(2)} >
               <span className="search__slip-option">3%</span>
            </div>
         </div>
         <div className="search__tolerance">
            <span>Slip Tolerance</span>
            <input 
            type="checkbox"
            className="search__tolerance-switcher"
            defaultChecked={switcherChecked} 
            onChange={() => setSwitcherChecked(!switcherChecked)} />
         </div>
      </div>
   )
}

export default SlipPopUp;

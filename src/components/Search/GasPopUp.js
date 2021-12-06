import React from 'react'

function GasPopUp() {

   const [selectedGas, setSelectedGas] = React.useState(2)

   return (
      <div className="search__gas">
         <span>Gas settings</span>
         <div className="search__gas-items">
            <div 
            className={selectedGas === 1 ? "search__gas-item active" : "search__gas-item"}
            onClick={() => setSelectedGas(1)} >
               <span className="search__gas-option">Standart</span>
               <span className="search__gas-gwei">(5 Gwei)</span>
            </div>
            <div 
            className={selectedGas === 2 ? "search__gas-item active" : "search__gas-item"}
            onClick={() => setSelectedGas(2)} >
               <span className="search__gas-option">Fast</span>
               <span className="search__gas-gwei">(6 Gwei)</span>
            </div>
            <div 
            className={selectedGas === 3 ? "search__gas-item active" : "search__gas-item"}
            onClick={() => setSelectedGas(3)} >
               <span className="search__gas-option">Standart</span>
               <span className="search__gas-gwei">(6 Gwei)</span>
            </div>
         </div>
      </div>
   )
}

export default GasPopUp;

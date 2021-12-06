import React from 'react';
import '../../styles/Exchange.scss';
import LiqudityContent from './LiqudityContent';
import SwapContent from './SwapContent';
function Exchange() {
   const [activeExchange, setActiveExchange] = React.useState(false);
   return (
      <div className="exchange">
         <div className="exchange__menu">
            <div className={activeExchange === false ?
               "exchange__menu-btn active" :
               "exchange__menu-btn"}
               onClick={() => setActiveExchange(false)}>
               <span>Swap</span>
            </div>
            <div className={activeExchange === true ?
               "exchange__menu-btn active" :
               "exchange__menu-btn"}
               onClick={() => setActiveExchange(true)}>
               <span>Liqudity</span>
            </div>
         </div>
         {activeExchange === false ?
            <SwapContent /> :
            <LiqudityContent />
         }
      </div>
   )
}

export default Exchange;

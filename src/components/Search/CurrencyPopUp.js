import React from 'react';
import '../../styles/Search.scss';
import { searchCurrency } from '../../store/currencyState';
function CurrencyPopUp({currentCurrency, setCurrentCurrency}) {

   const [selectCurrencyId, setSelectCurrencyId] = React.useState(0);

   return (
      <div className="search__currency">
         <ul className="search__currency-list">
            {searchCurrency.map(currency => {
               return (
               <li 
               className={selectCurrencyId === currency.id || currentCurrency === currency.item ?
                  "search__currency-item active" :
                  "search__currency-item" }
               key={currency.id} 
               onClick={() => {
                  setSelectCurrencyId(currency.id)
                  setCurrentCurrency(currency.item)
                  }} >
                  {currency.item}
               </li>)
            })}
         </ul>
      </div>
   )
}

export default CurrencyPopUp;

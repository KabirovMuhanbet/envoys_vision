import React from 'react';
import '../../styles/Search.scss';
import CurrencyPopUp from './CurrencyPopUp';
import GasPopUp from './GasPopUp';
import SearchPopup from './SearchPopup';
import SlipPopUp from './SlipPopUp';


function Search({ activeBtn, setActiveBtn }) {

   const [searchInput, setSearchInput] = React.useState();
   const [currentCurrency, setCurrentCurrency] = React.useState("USD");

   function handleInputChange(e) {
      setSearchInput(e.target.value)
   }

   return (
      <form className="search">
         <div className="search__wrapper">
            <input
               type="text"
               className="search__input"
               placeholder="Search by account, token,ENS..."
               onChange={handleInputChange}
               value={searchInput}
            />
            <div className="search__buttons" onClick={e => e.stopPropagation()}>
               <div
                  className={activeBtn === 1 ? "search__btn active" : "search__btn"}
                  onClick={activeBtn !== 1 ? () => setActiveBtn(1) : () => setActiveBtn(0)} >
                  <span>{currentCurrency}</span>
                  {activeBtn === 1 ?
                     <span className="search__arrow icon-arrow_up"></span> :
                     <span className="search__arrow icon-arrow-down"></span>
                  }
               </div>
               <div className={activeBtn === 2 ? "search__btn active" : "search__btn"}
                  onClick={activeBtn !== 2 ? () => setActiveBtn(2) : () => setActiveBtn(0)} >
                  <span className="icon-gas"></span>
                  {activeBtn === 2 ?
                     <span className="search__arrow icon-arrow_up"></span> :
                     <span className="search__arrow icon-arrow-down"></span>
                  }
               </div>
               <div className={activeBtn === 3 ? "search__btn active" : "search__btn"}
                  onClick={activeBtn !== 3 ? () => setActiveBtn(3) : () => setActiveBtn(0)}>
                  <span className="icon-settings"></span>
                  {activeBtn === 3 ?
                     <span className="search__arrow icon-arrow_up"></span> :
                     <span className="search__arrow icon-arrow-down"></span>
                  }
               </div>
            </div>
            {activeBtn === 1 || activeBtn === 2 || activeBtn === 3 ?
               <SearchPopup setActiveBtn={setActiveBtn}>
                  {activeBtn === 1 &&
                     <CurrencyPopUp
                        currentCurrency={currentCurrency}
                        setCurrentCurrency={setCurrentCurrency} />
                  }
                  {activeBtn === 2 && <GasPopUp />}
                  {activeBtn === 3 && <SlipPopUp />}
               </SearchPopup> :
               ""
            }
         </div>
      </form>
   )
}

export default Search;

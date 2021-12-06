import React from 'react';
import '../../styles/Search.scss';

function SearchPopup({children}) {

   return (
      <div className="search__popup" onClick={e => e.stopPropagation()}>
         {children}
      </div>
   )
}

export default SearchPopup;

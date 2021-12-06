import '../styles/Aside.scss';
import logo from '../images/logofull.svg';
import btc from '../images/btc.svg';
import options from '../images/options.svg';
import { NavLink } from 'react-router-dom';
function Aside() {
   return (
      <div className="aside">
         <div className="aside__wrapper">
            <div className="aside__menu">
               <a href="#"><img src={logo} className="logo" alt="" /></a>
               <ul className="aside__list">
                  <li className="aside__list-item">
                     <NavLink to="/profile" className="aside__list-link" activeclassname="active">
                        <span className="fonts icon-profile"></span>
                        <span>My page</span>
                     </NavLink>
                  </li>
                  <li className="aside__list-item">
                     <NavLink to="/exchange" className="aside__list-link">
                        <span className="fonts icon-exchange"></span>
                        <span>Trade</span>
                     </NavLink>
                  </li>
                  <li className="aside__list-item">
                     <NavLink to="/finance" className="aside__list-link">
                        <span className="fonts icon-exchange1"></span>
                        <span>Finance</span>
                     </NavLink>
                  </li>
                  <li className="aside__list-item">
                     <NavLink to="/company" className="aside__list-link">
                        <span className="fonts icon-company"></span>
                        <span>Companies</span>
                     </NavLink>
                  </li>
                  <li className="aside__list-item">
                     <NavLink to="/wallet" className="aside__list-link">
                        <span className="fonts icon-wallet"></span>
                        <span>Wallet</span>
                     </NavLink>
                  </li>
                  <li className="aside__list-item">
                     <NavLink to="/trading" className="aside__list-link">
                        <span className="fonts icon-trading"></span>
                        <span>OTC</span>
                     </NavLink>
                  </li>
               </ul>
            </div>
            <div className="aside__settings">
               <div className="aside__btc">
                  <div className="btc">
                     <img src={btc} className="btcIcon" alt="" />
                     <span>BTC</span>
                  </div>
                  <span className="icon-arrow_up"></span>
               </div>
               <a href="#" className="aside__options">
                  <span>0x5cadad...34f4</span>
                  <img src={options} alt="" />
               </a>
               <a href="#" className="aside__settings-options">
                  <span className="fonts icon-settings"></span>
                  <span>Settings</span>
               </a>
            </div>
         </div>
      </div>
   )
}

export default Aside;

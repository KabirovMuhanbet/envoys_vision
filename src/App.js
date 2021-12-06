import './styles/App.scss';
import Aside from './components/Aside';
import Search from './components/Search/Search';
import React from 'react';
import { Route, Routes } from 'react-router';
import Exchange from './components/Exchange/Exchange';

function App() {
   const [activeBtn, setActiveBtn] = React.useState(0);
  return (
    <div className="App" onClick={() => setActiveBtn(0)}>
      <Aside />
      <div className="right">
         <Search activeBtn={activeBtn} setActiveBtn={setActiveBtn}/>
         <Routes>
            <Route path="/exchange" element={<Exchange />}/>
         </Routes>
      </div>
    </div>
  );
}

export default App;

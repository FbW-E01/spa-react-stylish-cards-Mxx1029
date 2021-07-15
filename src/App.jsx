import React from 'react';
import './App.css';
import BootstrapCard from './components/BootstrapCard.jsx';
import RegularCSSCard from './components/RegularCSSCard.jsx';
import SCSSCard from './components/SCSSCard.jsx';
import StyledComponentCard from './components/StyledComponentCard.jsx';


function App() {
    return (
        <div className="wrapper">
            <RegularCSSCard />
            <SCSSCard />
            <StyledComponentCard />
            <BootstrapCard />
        </div>
        
    )
}

export default App;
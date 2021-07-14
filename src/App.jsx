import React from 'react';
import './App.css';
import RegularCSSCard from './components/RegularCSSCard.jsx';
import SCSSCard from './components/SCSSCard.jsx';
import StyledComponentCard from './components/StyledComponentCard.jsx';


function App() {
    return (
        <div className="wrapper">
            <RegularCSSCard />
            <SCSSCard />
            <StyledComponentCard />
        </div>
        
    )
}

export default App;
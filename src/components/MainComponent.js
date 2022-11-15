import React from 'react';
import './MainComponent.css';
import Section1 from './sections/Section1Component.js';
import Section2 from './sections/Section2Component.js';
import Section3 from './sections/Section3Component.js';

const MainComponent = () => {
    return (
        <div id="main">
            <Section1/>
            <Section2/>
            <Section3/>
        </div>
    );
};

export default MainComponent;
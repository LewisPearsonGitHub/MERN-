import afc from './afc.png';
import React from 'react';

const SomeApp = () => {

    const address = {
        forename: "Lewis",
        surname: "Pearson ",
        line1: "QA Consulting",
        line2: "Anchorage 1",
        city: "Manchester",
        zip: "M50 3YL"
    }
    const element = <img src={afc} className="App-logo"/>
    
    const element1 = React.createElement(
        'h1',
        { className: 'greeting' },
        'Hello there.'
      );
    return (
        
        <div>
            
            <p>{element}{element}{element}{element}{element}</p>
            <h1>{address.forename}</h1>
            <h1>{address.surname}</h1>
            <h1>{address.line1}</h1>
            <h1>{address.line2}</h1>
            <h1>{address.city}</h1>
            <h1>{address.zip}</h1>
        </div>
    );
}
export default SomeApp;
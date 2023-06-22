import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { AppContext } from './AppContext';


const GeneratedPage = () => {
    const { data } = useContext(AppContext);
    const location = useLocation();
    const number = location.state?.number;
  
    let carText = `I have a ${data.make || 'Unknown Brand'} and the color is ${data.color || 'Unknown Color'}.`;
  
    if (data.make && data.make.toLowerCase() === 'audi') {
      carText = `I have an ${data.make} and the color is ${data.color || 'Unknown Color'}.`;
    }
  
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <h1>Generated Text</h1>
        <p>{carText}</p>
        {data.color === 'RED' && <p>THE CAR IS RED! SPLENDID!!</p>}
        <p>REF: {number}</p>
      
       
      
      </div>
    );
  };

export default GeneratedPage;
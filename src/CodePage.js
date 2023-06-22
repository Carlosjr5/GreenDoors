

import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';


const CodePage = () => {
    const { registerData, addReferenceNumber, checkDuplicateNumber } = useContext(AppContext);
    const [inputValue, setInputValue] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
  
    const handleNumberSubmit = (e) => {
      e.preventDefault();
  
    
      const number = parseInt(inputValue);
  
      registerData((data) => ({ ...data, number }));
  
      if (isNaN(number)) {
        setErrorMessage('Please enter a valid integer.');
        return;
      }
  
      if (checkDuplicateNumber(number)) {
        setErrorMessage('The entered number already exists.');
        return;
      }
  
      setErrorMessage('');
      setInputValue('');
      addReferenceNumber(number); 
  
      navigate('/GeneratedPage', { state: { number } });
    };
  
    const handleChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Code</h1>
        <h2>Input a Reference Number:</h2>
        <form onSubmit={handleNumberSubmit}>
          <label>
            <input
              type="text"
              name="number"
              value={inputValue}
              onChange={handleChange}
              style={{ width: '300px', height: '40px', fontSize: '1em' }}
            />
          </label>
          <br />
          <button
            type="submit"
            style={{ fontSize: '1.2em', padding: '10px 20px', marginLeft: '30%', marginTop: '20px' }}
          >
            Done
          </button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
      </div>
    );
  };


export default CodePage;
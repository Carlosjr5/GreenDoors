import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';

const ColorPage = () => {
   const { registerData } = useContext(AppContext);
  const [selectedColor, setSelectedColor] = useState('');
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const allowedColors = ['BLUE', 'RED', 'BLACK', 'ORANGE'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const lowercaseInput = inputValue.toLowerCase();
    const matchingColor = allowedColors.find((color) => color.toLowerCase() === lowercaseInput);

    if (matchingColor || selectedColor) {
      const selectedValue = matchingColor || selectedColor;
      registerData({ color: selectedValue });
      navigate('/CodePage');
    } else {
      alert('Invalid color! Please enter a color from the provided list or select from the options.');
    }
  };

  const handleSelectChange = (e) => {
    setSelectedColor(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Choose a Color</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <select
            value={selectedColor}
            onChange={handleSelectChange}
            style={{
              width: '300px',
              height: '40px',
              fontSize: '1em',
              marginBottom: '30px',
              marginTop: '0', // Remove the top margin
            }}
          >
            <option value="">Select Color</option>
            {allowedColors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            style={{ width: '300px', height: '40px', fontSize: '1em', marginBottom: '20px' }}
          />
        </label>
        <br />
        <button type="submit" style={{ fontSize: '1.2em', padding: '10px 20px', marginLeft: '35%' }}>
          Next
        </button>
      </form>
    </div>
  );
};


export default ColorPage;

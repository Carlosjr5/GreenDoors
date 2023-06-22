
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from './AppContext';



const BrandPage = () => {
    const [selectedBrand, setSelectedBrand] = useState('');
    const [inputValue, setInputValue] = useState('');
    const navigate = useNavigate();
    const { registerData } = useContext(AppContext);
  
    const allowedBrands = ['AUDI', 'BMW', 'VAUXHAL', 'MERCEDES', 'PEUGEOT', 'RENAULT']; // List of allowed car brands
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (selectedBrand) {
        registerData({ make: selectedBrand });
        navigate('/ColorPage');
      } else {
        alert('Please select a car brand from the provided list.');
      }
    };
  
    const handleSelectChange = (e) => {
      setSelectedBrand(e.target.value);
    };
  
    const handleInputChange = (e) => {
      setInputValue(e.target.value);
    };
  
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Select Car Brand</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <select value={selectedBrand} onChange={handleSelectChange} style={{ width: '300px', height: '40px', fontSize: '1em', marginBottom: '30px' }}>
              <option value="">Select Brand</option>
              {allowedBrands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              ))}
            </select>
          </label>
          <br />
          <label>
            <input type="text" value={inputValue} onChange={handleInputChange} style={{ width: '300px', height: '40px', fontSize: '1em', marginBottom: '20px' }} />
          </label>
          <br />
          <button type="submit" style={{ fontSize: '1.2em', padding: '10px 20px' , marginLeft: '35%'}}> Next</button>
        </form>
      </div>
    );
    
  };

  export default BrandPage;
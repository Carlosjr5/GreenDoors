import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { AppProvider, AppContext } from './AppContext';




const App = () => {
  return (
    <Router>
      <AppProvider>
      <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <ul>
              <Link to="/">Home</Link>
              <Link style={{marginLeft:'30%'}} to="/references">References</Link>
          </ul>
        </nav>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: '#f5f5f5' // Grey background color
          }}
        >
          <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
            <Route path="/page4" element={<Page4 />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
};



const Page1 = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const { registerData } = useContext(AppContext);

  const allowedBrands = ['AUDI', 'BMW', 'VAUXHAL', 'MERCEDES', 'PEUGEOT', 'RENAULT']; // List of allowed car brands

  const handleSubmit = (e) => {
    e.preventDefault();

    const capitalizedInput = inputValue.toUpperCase();

    if (allowedBrands.includes(capitalizedInput)) {
      registerData({ make: capitalizedInput });
      navigate('/page2');
    } else {
      alert('Invalid car brand! Please enter a brand from the provided list.');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
   

     
      <div>
        <h1>Input Available Brand</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input type="text" value={inputValue} onChange={handleChange} style={{ width: '300px', height: '40px', fontSize: '1em' }} />
          </label>
          <br />
        </form>
      </div>
      <h2>Available Brands:</h2>
      {allowedBrands.map((brand) => (
        <p key={brand}>{brand}</p>
      ))}
      <button type="submit" style={{ fontSize: '1.2em', padding: '10px 20px', marginTop: '20px' }}>
        Next
      </button>
 
    </div>

    
  );
};

const Page2 = () => {
  const { registerData } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const allowedColors = ['BLUE', 'RED', 'BLACK', 'ORANGE']; // List of allowed colors

  const handleSubmit = (e) => {
    e.preventDefault();

    const capitalizedInput = inputValue.toUpperCase(); // Convert input value to uppercase

    if (allowedColors.includes(capitalizedInput)) {
      registerData({ color: capitalizedInput });
      navigate('/page3');
    } else {
      alert('Invalid color! Please enter a color from the provided list.');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div>
        <h1>Choose a Color</h1>
        <form onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              value={inputValue}
              onChange={handleChange}
              style={{ width: '300px', height: '40px', fontSize: '1em' }}
            />
          </label>
          <br />
        </form>
      </div>
      <div>
        <h2>Available Colors:</h2>
        {allowedColors.map((color) => (
          <p key={color}>{color}</p>
        ))}
      </div>
      <button type="submit" style={{ fontSize: '1.2em', padding: '10px 20px', marginTop: '20px' }}>
        Next
      </button>
    </div>
  );
};

const Page3 = () => {
  const { registerData, addReferenceNumber, checkDuplicateNumber } = useContext(AppContext);
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleNumberSubmit = (e) => {
    e.preventDefault();

    // Check if the entered value is a valid integer
    const number = parseInt(inputValue);

    registerData((data) => ({ ...data, number }));

    if (isNaN(number)) {
      setErrorMessage('Please enter a valid integer.');
      return;
    }

    // Check if the entered integer already exists
    if (checkDuplicateNumber(number)) {
      setErrorMessage('The entered number already exists.');
      return;
    }

    setErrorMessage('');
    setInputValue('');
    addReferenceNumber(number); // Store the reference number

    navigate('/page4', { state: { number } });
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




const Page4 = () => {
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
      {data.color === 'RED' && <p>THE CAR IS RED! NICE!!</p>}
      <p>REF: {number}</p>
    
     
    
    </div>
  );
};

const References = () => {
 
  const { referenceNumbers } = useContext(AppContext);
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '0%' }}>
      <h2>Existing References</h2>
      {referenceNumbers.map((ref) => (
        <p key={ref.number}>
          {ref.number}: {ref.make}, {ref.color}
        </p>
      ))}
    </div>
  );
};





export default App;

import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [referenceNumbers, setReferenceNumbers] = useState([]);

  const registerData = (newData) => {
    setData((prevData) => ({ ...prevData, ...newData }));
  };

  const addReferenceNumber = (number) => {
    setReferenceNumbers((prevNumbers) => [...prevNumbers, { number, make: data.make, color: data.color }]);
  };
  
  const checkDuplicateNumber = (number) => {
    return referenceNumbers.some((ref) => ref.number === number);
  };

  const appContextValues = {
    data,
    referenceNumbers,
    registerData,
    addReferenceNumber,
    checkDuplicateNumber,
  };

  return <AppContext.Provider value={appContextValues}>{children}</AppContext.Provider>;
};

export { AppContext, AppProvider };

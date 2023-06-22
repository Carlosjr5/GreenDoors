/*
*
*    Simple Application to save data based on a list using input text boxes,
*    retrieving all data after inputed in different pages, saving the data within
*    the reference number, exporting the generated message at the end.
*
*    Developed by: Carlos Jiménez Rodríguez.
*    Started Date: 20 June 2023.
*    
*/



import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppProvider } from './AppContext';
import BrandPage from './BrandPage';
import ColorPage from './ColorPage';
import CodePage from './CodePage';
import GeneratedPage from './GeneratedPage';
import ReferencesPage from './ReferencesPage';


//Main App Rendering
const App = () => {
  return (
    <Router>
      <AppProvider>
        <nav style={{ display: 'flex', justifyContent: 'center' }}>
          <ul>
            
              <Link to="/">Home</Link>
      
           
              <Link style={{ marginLeft: '30%' }} to="/ReferencesPage">
                References
              </Link>
            
          </ul>
        </nav>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh',
            background: '#f5f5f5'
          }}
        >
          <Routes>
            <Route path="/" element={<BrandPage />} />
            <Route path="/BrandPage" element={<BrandPage />} />
            <Route path="/ColorPage" element={<ColorPage />} />
            <Route path="/CodePage" element={<CodePage />} />
            <Route path="/GeneratedPage" element={<GeneratedPage />} />
            <Route path="/ReferencesPage" element={<ReferencesPage />} />
          </Routes>
        </div>
      </AppProvider>
    </Router>
  );
};





export default App;

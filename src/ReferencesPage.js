import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const ReferencesPage = () => {
 
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
  
export default ReferencesPage;
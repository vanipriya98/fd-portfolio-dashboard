import React from 'react';
import BankOption from './components/BankOption';
import VideoKYC from './components/VideoKYC';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <div className="bank-options">
        <BankOption 
         bank="Utkarsh"
          name="Utkarsh Small Finance Bank"
          features={['Highest Interest Rate', 'RBI Insured']}
          interestRate="9.10% p.a"
          buttonLabel="Book Now"
        />
        <BankOption
          bank="Bajaj" 
          name="Bajaj Finserv"
          features={['Crisil AAA Rated', 'No Video KYC required']}
          interestRate="8.80% p.a"
          buttonLabel="Book Now"
        />
        
      
      <VideoKYC 
        date="28 Oct, 2023"
        bank="Utkarsh SF Bank FD Plan 2"
        amount="Rs. 20,000"
        tenure="2 Years"
        interestRate="9.10%"
      />
      </div>
    </div>
  );
};

export default App;

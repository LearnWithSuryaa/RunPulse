import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InputForm from './components/InputForm';
import OutputResult from './components/OutputResult';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

const App = () => {
  const [data, setData] = useState(null);

  const handleCalculate = (inputData) => {
    console.log('Data diterima:', inputData); // Cek apakah data diterima
    setData(inputData);
  };

  return (
    <div>
      <Navbar />
      <HeroSection />
      <InputForm onCalculate={handleCalculate} />
      {data && <OutputResult data={data} />}
      <AboutSection />
      <Footer />
    </div>
  );
};

export default App;

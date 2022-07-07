import React from 'react';
import './styles/global.css';
import { ThemeProvider } from './context/ThemeContext';
import LandingPage from './pages/landing-page';

const App = () => (
  <ThemeProvider>
    <LandingPage />
  </ThemeProvider>
);

export default App;

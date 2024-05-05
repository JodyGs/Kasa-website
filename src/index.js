import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Header from './components/header';
import Footer from './components/Footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Footer />
  </React.StrictMode>
);
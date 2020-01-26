import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';

const App: React.FC = () => {
  return (
    <div className="container" style={{marginTop: "3rem"}}>
     <SearchForm></SearchForm> 
    </div>
  );
}

export default App;

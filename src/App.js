import React from 'react';
import Header from './components/header'
import UserForm from './components/userForm'
import 'antd/dist/antd.css';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header />
     <UserForm />
    </div>
  );
}

export default App;

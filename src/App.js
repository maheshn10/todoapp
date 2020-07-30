import React from 'react';
import Tab from './components/Tab/Tab';
import MyList from './components/MyList/MyList';
import './App.css';

function App() {  
  return (
    <div data-test="appComponent">        
    <Tab></Tab>
    <MyList></MyList>    
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter ,Router,  Route} from 
'react-router-dom'; 
import './App.css';



function App() {

  return (
    <>
    
   <BrowserRouter>
    <Router>
      <Navbar>
        <Route>
        {/* <Switch> */}
          <Route path='/' element= { ' ' } /> 
        {/* </Switch> */}
        </Route>
      </Navbar>
    </Router>
    </BrowserRouter>
    </>
  );
}

export default App;

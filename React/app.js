import logo from './logo.svg';
import './App.css';
import HelloClsComp from './components/HelloClsComp';
import Simple from './components/Simple';
import SimpleFunction from './components/ComponentsAss1';
import RegForm from './components/RegForm';
import Employee from './components/PropsAss3';
import GetUsers from './components/GetUsers';
import { Link, Route, Routes } from 'react-router-dom';
import GetEmps from './components/GetEmps';
import FormValidation from './components/FormValidation';


function App() {
    return ( 
        <div className="App">
        <header className="App-header">
          {
            <><img src={logo} className="App-logo" alt="logo" /><p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p><a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            Learn React
                        </a></> }
          {/* 
          <h2> Welcome to React JS </h2>
          <p> Learning React JS </p>
          <HelloClsComp />
          <HelloFunComp />
          <ComplexClsComp />  
          <HelloClsComp />  
          <RegForm/>    
          <ComplexFunComp /> */
        
          <Routes>
         
          </Routes>
          <Route path="/student" element={ <StudentComp /> }  />
        
       
        </header>
      </div>
    );
  }

export default App;
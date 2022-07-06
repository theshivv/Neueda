import './App.css';
import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import ListExpenseComponent from './components/ListExpenseComponent';
import FooterComponent from './components/FooterComponent';
import AddExpenseComponent from './components/AddExpenseComponent';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
          <div className="container">
            <Routes> http://localhost:3000/
              <Route path="/" exact element={<ListExpenseComponent />} />
              <Route path="/expenses" element={<ListExpenseComponent />} />
              <Route path="/add-expense/:id" element={<AddExpenseComponent />} />
            </Routes>
          </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

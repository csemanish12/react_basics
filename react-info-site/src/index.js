import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import reportWebVitals from './reportWebVitals';

function Page(){
  return (
    <div>
    <img src={logo} width="40px"/>
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was released in 2013.</li>
      <li>Was originally created by Jordan Walke</li>
      <li>Has well over 100K stars on Git</li>
      <li>Is Maintained by Facebook</li>
      <li>Powers thousands of enterprise apps, including mobile apps</li>
    </ul>
  </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Page />
);

reportWebVitals();

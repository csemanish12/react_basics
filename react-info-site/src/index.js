import React from 'react';
import ReactDOM from 'react-dom/client';
import logo from './logo.svg';
import reportWebVitals from './reportWebVitals';

function Header() {
  return (
    <header>
      <nav>
        <img src={logo} width="40px" />
      </nav>
    </header>
  )
}

function MainContent() {
  return (
    <>
      <h1>Reasons I'm excited to learn react</h1>
      <ol>
        <li>It's a popular library, so I'll be
          able to fit in with the cool kids!</li>
        <li>I'm more likely to get a job as a developer
          if I know React</li>
      </ol>
    </>
  )
}

function Footer() {
  return (
    <>
      <footer>
        <small>© 2021 Ziroll development. All rights reserved.</small>
      </footer>
    </>
  )
}


function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />


    </div>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Page />
);

reportWebVitals();

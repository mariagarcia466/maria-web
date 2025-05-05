import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello, I'm Maria Paula 👋</h1>
        <p>Welcome to my personal website!</p>
        <p>Check out my projects, passions, resume, or contact me below.</p>

        <div style={{ marginTop: '20px' }}>
          <a href="https://github.com/mariagarcia466" target="_blank" rel="noopener noreferrer">
            Link to my GitHub
          </a>{' | '}
          <a href="mailto:mariagarciaa466@gmail.com">
            Email Me
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

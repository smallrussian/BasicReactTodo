import React from 'react';
import { BrowserRouter,  Route, Routes,   } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Todo from './components/Todo';
import ContactForm from './components/Contact';
import './App.css';
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
} */

function App() {
  return(
    <div className='App'>
      {/* <Todo/>
      <ContactForm/> */}

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="todo" element={<Todo />} />
          <Route path="contact" element={<ContactForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  )
}
export default App;

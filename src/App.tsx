// import { useState } from 'react'
import { Container } from 'react-bootstrap';
import './App.scss';
import AppHeader from './components/appHeader/AppHeader';
import CategoryPage from './pages/categoryPage/CategoryPage';

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div id="app-row-header" className="row-header">
        <Container className="p-0">
          <AppHeader />
        </Container>
      </div>
      <div id="app-row-content" className="row-content">
        <Container className="h-100">
          <CategoryPage />
        </Container>
      </div>

      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
}

export default App;

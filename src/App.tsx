import './App.scss';
import Container from 'react-bootstrap/esm/Container';
import AppHeader from './components/appHeader/AppHeader';
import CategoryPage from './pages/categoryPage/CategoryPage';

function App() {
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
    </>
  );
}

export default App;

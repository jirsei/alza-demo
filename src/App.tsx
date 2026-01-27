import './App.scss';
import Container from 'react-bootstrap/esm/Container';
import AppHeader from './components/appHeader/AppHeader';
import CategoryPage from './pages/categoryPage/CategoryPage';
import useDetectScroll from './hooks/useDetectScroll';

function App() {
  const [isScrolled] = useDetectScroll(20);

  return (
    <>
      <div
        id="app-row-header"
        className={'row-header ' + (isScrolled ? 'scrolled' : '')}
      >
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

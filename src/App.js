import { Route, Routes } from 'react-router-dom';
import Books from './pages/Books/Books';
import Header from './components/Header/Header';
import Categories from './pages/Categories/Categories';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;

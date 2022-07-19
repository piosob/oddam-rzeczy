import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, PageNotFound } from './components';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

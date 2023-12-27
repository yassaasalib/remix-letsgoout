// app.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './routes/_index';
import AboutPage from './routes/about';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

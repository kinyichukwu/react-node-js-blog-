import './App.css';
import Blog from './Blog';
import BlogFullPage from './BlogFullPage';
import ComposePage from './ComposePage';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Blog />} />
      <Route path="ComposePage" element={<ComposePage />} />
      <Route path='BlogFullPage/:slug' element={<BlogFullPage />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

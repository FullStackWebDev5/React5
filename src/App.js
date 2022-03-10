import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Navbar from "./components/Navbar"
import LandingPage from "./components/LandingPage"
import Posts from "./components/Posts/Posts";
import Post from './components/Post';
import Page404 from './components/Page404';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Post />} />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;

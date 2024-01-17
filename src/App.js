import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error  from "./pages/Not-Found";
import Movie from "./pages/Category";
import Header from "./components/Header";
import Recipe from "./pages/Recipe";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
      <Routes >
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/category/:name" element={<Movie/>} />
        <Route path="/product/recipe/:productId" element={<Recipe/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;

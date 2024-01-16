import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error  from "./pages/Not-Found";
import Movie from "./pages/Movie";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="container">
      <Routes >
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/movies/:id" element={<Movie/>} />
        <Route path="*" element={<Error/>} />

      </Routes>
      </div>
    </div>
  );
}

export default App;

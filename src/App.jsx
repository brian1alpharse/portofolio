import { Navbar } from "./Components/Atoms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Experience, Project, Contact } from "./Pages";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

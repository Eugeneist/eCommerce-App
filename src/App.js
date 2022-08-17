import "./App.css";
import { Header } from "./components/Header";
import { Products } from "./pages/Products";
import { Product } from "./pages";
import { NotFound } from "./pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

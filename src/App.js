import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components";
import { Products } from "./pages/Products";
import { Product } from "./pages";
import { NotFound } from "./pages";
import { Cart } from "./components";
import { Favorite } from "./components";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;

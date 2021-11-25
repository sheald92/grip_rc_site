import React from "react";
import "./App.css";
import "materialize-css";
import { Routes, Route } from "react-router-dom";
import AllCarsPage from "./pages/AllCars";
import WishListPage from "./pages/WishList";
import NewCarPage from "./pages/NewCar";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Layout>
      <div class="container">
        {/* wrap routes in <switch> if more than one page loads  */}

        <Routes>
          <Route path="/" element={<AllCarsPage />} />
          <Route path="/new-car" element={<NewCarPage />} />
          <Route path="/wishlist" element={<WishListPage />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;

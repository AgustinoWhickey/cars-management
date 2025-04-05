import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderList from "./components/OrderList";
import Order from "./components/Order";

function HomePage() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/orderlist" element={<OrderList />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
}

export default App;

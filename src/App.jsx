import React, { Suspense,useState } from "react";
// import { Layout } from "../_layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import Layout from "./layout/Layout.jsx";
import './global.scss'
import Customers from "./pages/Customers/Customers.jsx";
import Inventory from "./pages/Inventory/Inventory.jsx";
import Conversations from "./pages/Coversations/Conversations.jsx";
import Settings from "./pages/Settings/Settings.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter basename="/">
      <Suspense>
          <Routes>
            {/* add routes here */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/conversations" element={<Conversations />} />
              <Route path="/settings" element={<Settings />} />
            </Route>
          </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;

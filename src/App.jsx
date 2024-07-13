import React, { Suspense,useState } from "react";
// import { Layout } from "../_layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Orders from "./pages/Orders/Orders.jsx";
import Layout from "./layout/Layout.jsx";
import './global.scss'

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
            </Route>
          </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;

import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { AdminDishes } from "../pages/AdminDishes"
import { EditDishes } from "../pages/EditDishes"
import { NewDishes } from "../pages/NewDishes"

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<AdminDishes />} />
      <Route path="/edit/:id" element={<EditDishes />} />
      <Route path="/newdishes" element={<NewDishes />} />
    </Routes>
  )
}

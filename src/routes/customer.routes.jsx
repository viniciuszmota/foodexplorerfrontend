import { Routes, Route } from "react-router-dom"

import { Home } from "../pages/Home"
import { Dishes } from "../pages/Dishes"

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dish/:id" element={<Dishes />} />
    </Routes>
  )
}

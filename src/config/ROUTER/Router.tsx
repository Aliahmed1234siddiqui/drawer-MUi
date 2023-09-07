import React from 'react'
import { BrowserRouter as Routers , Routes , Route , useNavigate } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Login from '../pages/Login'
export default function Router() {
  return (
    <div>
      <Routers>
<Routes>
  <Route path='Dashboard/*' element={<Dashboard />}></Route>
  <Route path='/'  element={<Login/>}>  </Route>
</Routes>



      </Routers>
    </div>
  )
}

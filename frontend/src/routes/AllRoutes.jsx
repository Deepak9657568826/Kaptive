import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DashBoard } from '../pages/DashBoard'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<DashBoard/>}/>
    </Routes>
  )
}

export  {AllRoutes}
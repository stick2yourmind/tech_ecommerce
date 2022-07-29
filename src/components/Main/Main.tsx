import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Category from '../../pages/Category/Category'

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/category/hardware"
        element={<Category
          categoryEndpoint={import.meta.env.VITE_GET_CAT_HARDWARE_ENDPOINT}
          title="Hardware"/>}
      />
      <Route path="/category/notebook"
        element={<Category
          categoryEndpoint={import.meta.env.VITE_GET_CAT_NOTEBOOK_ENDPOINT}
          title="Notebook"/>}
      />
      <Route path="/category/power-supply"
        element={<Category
          categoryEndpoint={import.meta.env.VITE_GET_CAT_PSU_ENDPOINT}
          title="Fuentes de alimentación"/>}
      />
      <Route path="/category/printer"
        element={<Category
          categoryEndpoint={import.meta.env.VITE_GET_CAT_PRINTER_ENDPOINT}
          title="Impresoras"/>}
      />
      <Route path='*' element={ <Navigate to='/'/> } />
    </Routes>
  )
}

export default Main

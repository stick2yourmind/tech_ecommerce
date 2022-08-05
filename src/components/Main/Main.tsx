import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Category from '../../pages/Category/Category'
import Product from '../../pages/Product/Product'
import CheckoutConfirmation from '../../pages/Checkout/CheckoutConfirmation'
import Sign from '../../pages/Sign/Sign'
import Profile from '../../pages/Profile'
import ShippingPickUp from '../../pages/ShippingPickUp'
import Payment from '../../pages/Payment'

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
      <Route path="/product/:productId"
        element={<Product/>}
      />
      <Route path="/sign/:params"
        element={<Sign/>}
      />
      <Route path="/profile"
        element={<Profile/>}
      />
      <Route path="/cart/checkout" element={<CheckoutConfirmation/>} />
      <Route path="/cart/shipping" element={<ShippingPickUp/>} />
      <Route path="/cart/payment" element={<Payment/>} />
      <Route path='*' element={ <Navigate to='/'/> } />
    </Routes>
  )
}

export default Main

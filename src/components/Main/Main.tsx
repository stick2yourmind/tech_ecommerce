import { Route, Routes, Navigate } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import Category from '../../pages/Category/Category'
import Product from '../../pages/Product/Product'
import CheckoutConfirmation from '../../pages/Checkout/CheckoutConfirmation'
import Sign from '../../pages/Sign/Sign'
import Profile from '../../pages/Profile'
import ShippingPickUp from '../../pages/ShippingPickUp'
import Payment from '../../pages/Payment'
import Chat from '../Chat'
import { useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import ChatAdmin from '../../pages/ChatAdmin'
const Main = () => {
  const user = useSelector((state:RootState) => state.user.data)
  return (
    <div >
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
      {user?.role === import.meta.env.VITE_ADMIN_ROLE &&
      <Route path="/chat" element={<ChatAdmin/>} />
      }
      <Route path='*' element={ <Navigate to='/'/> } />
    </Routes >
    {user?.role !== import.meta.env.VITE_ADMIN_ROLE &&
    <Chat />}
    </div>
  )
}

export default Main

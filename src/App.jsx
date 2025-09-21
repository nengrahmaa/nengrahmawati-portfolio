import './App.css'
import {Outlet } from "react-router-dom";
import Header from './component/header'
import ScrollToTop from './component/ScrollToTop';

function App() {

  return (
      <div className="font-sans bg-gray-100 text-gray-900">
        <ScrollToTop />
        <Header />
        <Outlet />
      </div>
  )
}

export default App

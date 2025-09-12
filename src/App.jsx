import './App.css'
import {Outlet } from "react-router-dom";
import Header from './component/header'

function App() {

  return (
      <div className="font-sans bg-gray-100 text-gray-900">
        <Header />
        <Outlet />
      </div>
  )
}

export default App

import './App.css'
import {Outlet } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop';
import Header from './components/Header.jsx';

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

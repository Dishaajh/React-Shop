import { useState } from 'react'

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

//import pages
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
//import components
import Header from './components/Header';
import Footer from './components/Footer';
import Siderbar from './components/Siderbar';
import CheckOut from './components/CheckOut';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="overflow-hidden">
        <Router>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:id' element={<ProductDetails/>}/>
            <Route path='/checkout' element={<CheckOut/>}/>
          </Routes>
          <Siderbar/>
          <Footer/>
        </Router>
      </div>
    </>
  )
}

export default App

import Layout from './component/layout/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import Menu from './page/Menu'
import Contact from './page/Contact'
import Pagenotfound from './page/Pagenotfound'

function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Pagenotfound />} />
      </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;

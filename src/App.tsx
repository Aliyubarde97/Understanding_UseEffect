import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom"
import Defendenses from "./pages/defendenses/Defendenses"
import Layouts from "./components/layouts/Layouts"
import UndestndUseEffect from "./pages/undsnt_useEffect/UndestndUseEffect"
import ProductList from "./pages/productList/ProductList"

function App() {

 
 
  return (
    <>
   
    <Router>
        <Routes>
          <Route path="/" element={<h1>no such file</h1>}/>
          <Route path="/undsnt_useEffect" element={<Layouts><UndestndUseEffect/></Layouts>}/>
          <Route path="/undsnt_useEffect" element={<Layouts><Defendenses/></Layouts>}/>
          <Route path="/productList" element={<Layouts><ProductList/></Layouts>}/>

          <Route path="*" element={<Navigate to={'/'}/>} />
        </Routes>
      </Router>
      
    </>
  )
}

export default App

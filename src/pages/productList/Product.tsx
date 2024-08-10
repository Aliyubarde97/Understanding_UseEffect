import { useState } from "react"
import ProductList from "./ProductList"


const Product = () => {
  const [category, setCategory] = useState('')
  
  return (
<>
    <div className="mt-2">
      <select className="w-[30%] h-[50px] border rounded-md "  id="" onChange={(event) => setCategory(event.target.value)}>
        <option value=""></option>
        <option value="Clothing">clothing</option>
        <option value="Household">Household</option>
      </select>
    </div>
    <ProductList category="category"/>
</>
  )
}

export default Product
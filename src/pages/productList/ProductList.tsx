import { useEffect, useState } from "react"


const ProductList = ({category}: {category:  string }) => {
    const [products, setProducts] = useState<string[]>([])

    useEffect(() => {
        console.log('Feching products in', category);
        setProducts(['Clothing', 'Household']); 
    },[category]);

  return (
    <>
    <div>
    product
    </div>
    </>
  )
}

export default ProductList
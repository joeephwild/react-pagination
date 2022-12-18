import "./styles.css";
import {useEffect, useState} from 'react'

export default function App() {
  const [product, setProduct] = useState([]);
  const [page, setPage] = useState(1)
  console.log(product)
  const fetchProduct = async() => {
    const product = await fetch("https://dummyjson.com/products");
    const data = await product.json();
    if(data && data.products){
      setProduct(data.products);
    }
  }

  useEffect(() => {
     fetchProduct()
  }, [])
  return (
    <div>
      {product.length > 0 && (
        <div className='products'>
          {product.slice(page * 10 - 10, page * 9).map((item, i) => (
            <div key={i} className='products__single'>
              <img src={item.thumbnail} alt='products' />
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}


import { Link } from 'react-router-dom'


const ProductCard = ({product}) => {

  const auth = JSON.parse(localStorage.getItem("auth"));

return (
<Link to={`/product/${product.id}`}>
<div className="flex flex-col items-center justify-center ">
  <div className="mx-auto my-3 px-3">
    <div className="max-w-xs cursor-pointer rounded-lg bg-white p-5  shadow duration-150 hover:scale-105 hover:shadow-md">
      <img className="w-96 h-96 rounded-lg object-cover object-center" src={product.image} alt="product" />
      <p className="w-full h-20 my-4 pl-4 font-bold text-gray-500">{product.title}</p>
      <p className="mb-4 ml-4 text-xl font-semibold text-gray-800">${product.price}</p>
      <Link to={auth ? `/product/${product.id}` : "/login"}>
      <button 
      className="block w-full h-10 px-6 py-2.5 justify-center items-center bg-red-500 hover:bg-red-700 rounded-lg font-semibold text-white"
      type="button"
    >
      Add to Cart
    </button>
    </Link>
    </div>
  </div>
</div>
</Link>
  )
}

export default ProductCard
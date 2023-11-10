
import ProductCard from './Card/ProductCard'
import { useSelector } from 'react-redux'

const LatestProducts = () => {

  const {products} = useSelector((state) => state.products)
  return (
    <div className='flex flex-col justify-center items-center ' >
      <h3 className='text-3xl font-bold pb-4'>Our Products</h3>
      <div className='grid grid-cols-4 gap-10 '>
        {products && products.map((product) => (
            <div className='w-full' key={product.id}>
                <ProductCard product={product} />
            </div>
        ))}
      </div>

    </div>
  )
}

export default LatestProducts
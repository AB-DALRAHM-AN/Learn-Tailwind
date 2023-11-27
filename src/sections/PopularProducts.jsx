import { products } from '../constants'


const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start'>
        <div className=''>
          <h2 className='font-bold text-3xl'>Our <span className='text-coral-red'>Popular</span> Products</h2>
          <p className='text-sm font-montserrat'>Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>
          <div className='flex flex-row flex-wrap gap-10 flex-1 justify-center items-center'>
            {products.map((product) => (
              <div key={product.id} className='flex justify-center flex-col card items-center mt-16'>
                <img src={product.imgURL} alt={product.name} className='object-contain mb-4' />
                <h3 className='font-bold text-2xl'>{product.name}</h3>
                <p className='text-xl font-montserrat text-coral-red'>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
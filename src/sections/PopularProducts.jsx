import { products } from '../constants'
import star from '../assets/icons/star.svg'


const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start'>
        <div>
          <h2 className='font-bold text-4xl mb-2'>Our <span className='text-coral-red'>Popular</span> Products</h2>
          <p className='text-sm font-montserrat text-slate-gray'>Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value</p>
          <div className='flex flex-row flex-wrap gap-16 flex-1 justify-center items-center'>
            {products.map((product) => (
              <div key={product.name} className='flex justify-center flex-col card items-center mt-16'>
                <img src={product.imgURL} alt={product.name} className='object-contain mb-4' />
                <span className='flex max-sm:w-full w-full flex-1 ml-2 mb-2'>
                  <img
                    src={star}
                    alt='star'
                    className='mr-2'
                    width={20}
                    height={20}
                  />
                  <span className='text-sm font-montserrat text-slate-gray'>(4.5)</span>
                </span>
                <h3 className='font-bold text-2xl flex flex-1 w-full ml-2 mb-2'>{product.name}</h3>
                <p className='flex flex-1 w-full ml-2 text-xl font-montserrat text-coral-red font-bold'>{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
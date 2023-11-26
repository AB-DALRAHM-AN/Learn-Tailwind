import { CustomerReviews, Nav, Hero, PopularProducts, Services, SpecialOffers, SuperQuality, Subscribe, Footer } from "./sections"

export default function App() {
  return (
    <main className='relative'>
      <Nav/>
      <section className='xl:padding-l wide:padding-r padding-b'>
        <Hero/>
      </section>
      <section className='padding'>
        <PopularProducts/>
      </section>
      <section className='padding'>
        <SuperQuality/>
      </section>
      <section className='padding-x'>
        <Services/>
      </section>
      <section className='padding'>
        <SpecialOffers/>
      </section>
      <section className='padding bg-pale-blue'>
        <CustomerReviews/>
      </section>
      <section className='padding-x sm:py-32 py-16 w-full'>
        <Subscribe/>
      </section>
      <section className='padding-x bg-black padding-t pb-8'>
        <Footer/>
      </section>
    </main>
  )
}

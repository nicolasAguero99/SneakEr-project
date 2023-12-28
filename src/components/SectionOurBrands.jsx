

const SectionOurBrands = () => {

  return (
    <section className='flex flex-col items-center px-12 sm:px-6 py-10'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <h2 className="font-black uppercase text-3xl">Nuestras marcas</h2>
        <p className="text-paragraph text-[18px]">Échale un vistazo a las marcas que colaboran con nosotros</p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-20 my-16">
        <div className="our-brands-item">
          <img className="w-[220px] transition-transform duration-500" src="./src/assets/sneaker-nike.png" alt="sneaker Nike" />
          <h3 className="text-2xl font-bold">Nike</h3>
          <a className="text-primary underline hover:opacity-50 transition-opacity duration-300" href="#">Ver más de Nike</a>
        </div>
        <div className="our-brands-item">
          <img className="w-[220px] transition-transform duration-500" src="./src/assets/sneaker-adidas.png" alt="sneaker Adidas" />
          <h3 className="text-2xl font-bold">Adidas</h3>
          <a className="text-primary underline hover:opacity-50 transition-opacity duration-300" href="#">Ver más de Adidas</a>
        </div>
        <div className="our-brands-item">
          <img className="w-[220px] transition-transform duration-500" src="./src/assets/sneaker-puma.png" alt="sneaker Puma" />
          <h3 className="text-2xl font-bold">Puma</h3>
          <a className="text-primary underline hover:opacity-50 transition-opacity duration-300" href="#">Ver más de Puma</a>
        </div>
      </div>
    </section>
  )
}

export default SectionOurBrands


const SectionPresentation = () => {

  return (
    <section className='flex flex-col items-center gap-y-40 px-12 sm:px-6 py-10'>
      <div className='flex flex-wrap items-center justify-center gap-20'>
        <div className='flex flex-col gap-4 relative'>
          <img className="w-[250px] scale-x-[-1] rotate-[30deg]" src="./src/assets/sneaker-red-black.png" alt="sneaker red black white" />
          <img className="max-[280px]:hidden w-[220px] absolute top-[-20px] left-[-10px] z-[-1]" src="./src/assets/svg/bckg-sneaker-red-black.svg" alt="background red black white" />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className="font-black uppercase text-2xl max-w-[250px]">Pensamos en tí en cada paso</h2>
          <p className="text-paragraph text-[18px] max-w-[400px]">Nos enorgullece ofrecer zapatillas de marcas reconocidas que se destacan por su calidad y comodidad, cada par está cuidadosamente diseñado.</p>
          <button className="border-2 border-primary text-primary rounded-full w-28 py-1 hvr-radial-out-secondary">Explorar</button>
        </div>
      </div>

      <div className='flex flex-wrap flex-row-reverse items-center justify-center gap-20'>
        <div className='flex flex-col gap-4 relative'>
          <img className="w-[250px] rotate-[-30deg]" src="./src/assets/sneaker-red-blue.png" alt="sneaker red blue white" />
          <img className="max-[280px]:hidden w-[220px] absolute top-[-45px] left-[25px] z-[-1]" src="./src/assets/svg/bckg-sneaker-red-blue.svg" alt="background red black white" />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className="font-black uppercase text-2xl max-w-[250px]">Tenemos lo último para tí</h2>
          <p className="text-paragraph text-[18px] max-w-[400px]">Mantente a la moda con nuestras zapatillas de última tendencia. Nuestro equipo de expertos en moda sigue de cerca las últimas tendencias.</p>
          <button className="border-2 border-primary text-primary rounded-full w-28 py-1 hvr-radial-out-secondary">Explorar</button>
        </div>
      </div>
    </section>
  )
}

export default SectionPresentation
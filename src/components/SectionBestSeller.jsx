import { useState } from "react"
import Model3D from './Model3D'

const SectionBestSeller = () => {
  
  /* eslint-disable no-unused-vars */
  const [isActive, setIsActive] = useState(3)

  const handleClick = number => setIsActive(number)

  return (
    <main className='flex flex-col items-center px-12 sm:px-6 py-10'>
      <div className='flex flex-col items-center gap-4 text-center'>
        <h2 className="font-black uppercase text-3xl">Más vendidos</h2>
        <p className="text-paragraph text-[18px]">Conoce nuestros modelos más vendidos y pedidos por los clientes</p>
      </div>
      <div className="flex flex-col items-center gap-20 my-16">
        <div className="w-screen h-[300px]">
          {/* <img className="w-[280px]" src="./src/assets/sneaker-red-black.png" alt="sneaker red black white nike" /> */}
          <Model3D />
        </div>
        <div className='flex items-end justify-center gap-8'>
          <img onClick={() => handleClick(1)} className="w-[60px] blur-[1px] opacity-50" src="./src/assets/sneaker-nike-1.png" alt="sneaker Nike" />
          <img onClick={() => handleClick(2)} className="w-[60px] blur-[1px] opacity-50" src="./src/assets/sneaker-red.png" alt="sneaker red" />
          <img onClick={() => handleClick(3)} className="w-[100px] rotate-[25deg] -translate-y-3" src="./src/assets/sneaker-red-black.png" alt="sneaker red black" />
          <img onClick={() => handleClick(4)} className="w-[60px] blur-[1px] opacity-50" src="./src/assets/sneaker-red-blue.png" alt="sneaker red blue" />
          <img onClick={() => handleClick(5)} className="w-[80px] blur-[1px] opacity-50" src="./src/assets/sneaker-orange-1.png" alt="sneaker orange" />
        </div>
      </div>
    </main>
  )
}

export default SectionBestSeller
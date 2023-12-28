import { useState, useRef } from 'react';

const Header = ({ children }) => {

  const PRIMARY = 'sneaker-orange-header'
  const SECONDARY = 'sneaker-red-header'
  const TERTIARY = 'sneaker-blue-header'
  const FOURTH = 'sneaker-black-white-header'

  const [sneakerImg, setSneakerImg] = useState(PRIMARY)

  const sneakerImgRef = useRef(null)

  const handleClick = (type) => {    
    sneakerImgRef.current.classList.add("exit-sneaker-header");
    setTimeout(() => {
      sneakerImgRef.current.classList.add("change-sneaker-header");
      sneakerImgRef.current.classList.remove("exit-sneaker-header");
      setSneakerImg(type)
      setTimeout(() => {
        sneakerImgRef.current.classList.remove("change-sneaker-header");
      }, 500);
    }, 510);
  }

  return (
    <header className="flex flex-col-reverse min-[1090px]:flex-row items-center justify-center px-12 sm:px-6 h-screen bg-[url('/svg/misc-background.svg')] bg-center bg-no-repeat bg-cover">
      {children}
      <div className="flex flex-col gap-8 relative min-[1090px]:top-[-60px]">
        <h1 className="sm:w-[490px] lg:leading-snug text-2xl sm:text-3xl lg:text-5xl font-bold font-Montserrat uppercase">Vive la <strong className={`text-primary font-bold`}>calidad</strong> y <strong className={`text-primary font-bold`}>estilo</strong> en cada paso</h1>
        <button type="button" className={`hvr-radial-out text-white sm:text-lg font-semibold bg-primary rounded-full min-[1090px]:w-[140px] py-2 border-2 hover:text-primary hover:border-2 hover:border-primary`}> Ver más</button>
      </div>
      <div className={`relative max-[1090px]:top-[-60px] left-[-20px] sm:left-[-40px] min-[1090px]:top-[-60px] after:content-[''] min-[1090px]:after:bg-[url('/svg/misc-dash.svg')] after:bg-center after:bg-no-repeat after:bg-contain after:w-[900px] after:h-[800px] after:block after:absolute after:top-[-380px] after:left-[340px] after:z-[-1]`}>
        <img className="animated-sneaker-header w-[555px] h-auto" src={`/${sneakerImg}.png`} alt="sneaker" ref={sneakerImgRef} />
      </div>
      <div className="absolute bottom-16 min-[1090px]:bottom-32">
        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="20" viewBox="0 0 127 24" fill="none">
          <circle cx="11.8897" cy="12" r="11.0748" transform="rotate(90 11.8897 12)" stroke="#FFB100"/>
          <circle className='cursor-pointer' onClick={() => handleClick(PRIMARY)} cx="11.9486" cy="12.059" r="9.15354" transform="rotate(90 11.9486 12.059)" fill="#FFB100"/>
          <circle className='cursor-pointer' onClick={() => handleClick(SECONDARY)} cx="49.0196" cy="12.059" r="9.15354" transform="rotate(90 49.0196 12.059)" fill="#C1292E"/>
          <circle className='cursor-pointer' onClick={() => handleClick(TERTIARY)} cx="83.4684" cy="12.059" r="9.15354" transform="rotate(90 83.4684 12.059)" fill="#235789"/>
          <circle className='cursor-pointer' onClick={() => handleClick(FOURTH)} cx="117.846" cy="12.059" r="9.15354" transform="rotate(90 117.846 12.059)" fill="#020100"/>
        </svg>
      </div>
    </header>
  )
}

export default Header
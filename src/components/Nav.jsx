import { useState } from "react"

const Nav = () => {
  /* eslint-disable no-unused-vars */
  const [activeNavItem, setActiveNavItem] = useState("/home");
  const [isOpenNav, setIsOpenNav] = useState(false);

  const isActive = (path) => activeNavItem === path && "text-primary";
  const isActiveMobile = (path) => activeNavItem === path ? "-filled" : "";

  const handleClickOpenkMenu = () => setIsOpenNav(true);
  const handleClickCloseMenu = () => setIsOpenNav(false);

  return (
    <>
      {isOpenNav && (
        <div className="w-screen h-screen fixed top-0 left-0 bg-black z-10 opacity-50"></div>
      )}
      <div
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 27.1% 100%, 0% 100%)" }}
        className={`w-screen h-screen fixed top-0 left-0 bg-primary z-20 transition-transform duration-1000 ease-out transform ${
          isOpenNav ? "translate-x-0" : "-translate-x-full"
        }`}
      ></div>
      <nav className="flex flex-row-reverse md:hidden absolute top-0 left-0 justify-between w-full mt-6 px-10 z-20">
        <div>Logo</div>
        <div>
          {!isOpenNav && (
            <span className="flex [&>img]:w-10 cursor-pointer" onClick={handleClickOpenkMenu}>
              <img src="./src/assets/svg/menu-mobile-icon.svg" alt="open menu" />
            </span>
          )}
          {isOpenNav && (
            <ul className="flex flex-col justify-center gap-20 relative z-20">
              <li className="[&>img]:w-10 cursor-pointer" onClick={handleClickCloseMenu}>
                <img src="./src/assets/svg/close-mobile-icon.svg" alt="close menu" />
              </li>
              <li
                className={`nav-item-mobile ${ isOpenNav ? "translate-x-0" : "-translate-x-full"}`}
              >
                <img className="w-6" src={`./src/assets/svg/home-icon${isActiveMobile("/home")}.svg`} alt="home icon" />
                <a href="#">Inicio</a>
              </li>
              <li className={`nav-item-mobile ${isOpenNav ? "translate-x-0" : "-translate-x-full"}`}
              >
                <img className="w-6" src={`./src/assets/svg/sneaker-icon${isActiveMobile("/products")}.svg`} alt="sneaker icon" />
                <a href="#">Productos</a>
              </li>
              <li
                className={`nav-item-mobile ${
                  isOpenNav ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <img className="w-7" src={`./src/assets/svg/info-icon${isActiveMobile("/about")}.svg`} alt="info icon" />
                <a href="#">Acerca</a>
              </li>
              <li
                className={`nav-item-mobile ${
                  isOpenNav ? "translate-x-0" : "-translate-x-full"
                }`}
              >
                <img className="w-7" src={`./src/assets/svg/message-icon${isActiveMobile("/contact")}.svg`} alt="message icon" />
                <a href="#">Contacto</a>
              </li>
            </ul>
          )}
        </div>
      </nav>
      <nav className="hidden md:flex absolute top-0 left-0 justify-between w-full mt-6 px-10">
        <div>Logo</div>
        <div>
          <ul className="flex justify-center gap-8">
            <li className={`text-[18px] font-semibold ${isActive("/home")}`}>Inicio</li>
            <li className={`text-[18px] font-semibold ${isActive("/products")}`}>Productos</li>
            <li className={`text-[18px] font-semibold ${isActive("/about")}`}>Acerca</li>
            <li className={`text-[18px] font-semibold ${isActive("/contact")}`}>Contacto</li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Nav;

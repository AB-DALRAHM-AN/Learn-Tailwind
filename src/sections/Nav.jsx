import { headerLogo } from '../assets/images'
import { hamburger } from '../assets/icons'
import { navLinks } from '../constants' 

const Nav = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between max-container items-center'>
        <a href='/'>
          <img src={headerLogo} alt='logo' width={130} height={29}/>
        </a>
        <ul className='flex-1 flex gap-16 max-lg:hidden justify-center items-center'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
        <div>
          <button className='hidden max-lg:block'>
            <img src={hamburger} alt='hamburger' width={24} height={24}/>
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Nav
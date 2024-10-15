import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet, faFont, faUserPlus, faSitemap, faWheelchair, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MenuHeader from '../../global-components/menu-header/menu-header.tsx';
import NavigationDrawer from '../../global-components/menu-header/navigation-drawer.tsx';
import DrawerNavigation from '../../global-components/menu-header/drawer-navigation.tsx';


const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <>
    <div className='container'> 
      <div className=' bg-white flex items-center justify-between md:flex-col'>
        <h1 className='text-center leading-tight w-1/2 hover:bg-black hover:text-white text-lg font-bold mb-0 md:mb-2' title="This is Andhra Pradesh Government in Telugu">ఆంధ్ర ప్రదేశ్ ప్రభుత్వం</h1>
        <h1 className='text-center leading-none w-1/2 hover:bg-black hover:text-white text-lg font-bold'>GOVERNMENT OF ANDHRAPRADESH</h1>
      </div>
      <hr className=' border-[1px] border-slate-400 mt-2' />
      <div className=' flex items-center justify-between p-2 md:justify-around mb-4'>
        <h1 className='hidden md:block'>SKIP TO MAIN CONTENT</h1>
        <FontAwesomeIcon className='md:hidden' title='Skip To Main Content' icon={faRetweet} size="xl" />
        <FontAwesomeIcon title='Font Size' icon={faFont} size="xl" />
        <FontAwesomeIcon title='Social' icon={faUserPlus} size="xl" />
        <FontAwesomeIcon title='Sitemap' icon={faSitemap} size="xl" />
        <FontAwesomeIcon title='Accessibility' icon={faWheelchair} size="xl" />
        <select defaultValue="English" className=' outline-none border-2 border-black rounded-md'>
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>
      </div>
      <div className=' container'>
        <div className='flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between'>
        <div className=' flex flex-col items-center md:flex-row gap-4'>
          <div className=' h-20 w-20 rounded-full'>
            <img src='assets/ggmc.jpeg' alt='GGMC Logo' />
          </div>
          <div>
            <h1 className='text-[1rem] font-bold leading-none text-green text-center'>GUNTUR MUNCIPAL CORPORATION</h1>
            <h1 className='text-[1rem] font-bold leading-tight text-center'>గుంటూరు మున్సిపల్ కార్పొరేషన్</h1>
          </div>
        </div>
        <div className=' flex items-center'>
          <img className='h-24 w-22' src='assets/ap_govt_logo.png' alt='AP Govt Logo' />
          <img className='h-24 w-28' src='assets/swatch_bharath_logo.png' alt='Swatch Bharath Logo'/>
        </div>
        </div>
      </div>
      <div className='md:hidden'>
        <div className=' bg-violet w-full flex items-center justify-between py-2 px-4'>
          <h1 className=' text-white font-semibold text-xl'>Menu</h1>
          <button onClick={() => setOpenMenu(!openMenu)}>
            <FontAwesomeIcon className={`text-white cursor-pointer ${openMenu ? 'transform translate-y-2 rotate-180' : ''}`} icon={faChevronDown} size='2x' />
          </button>
        </div>
        {openMenu && <NavigationDrawer navOptionsCount={0}/>}
      </div>
      <div className='hidden md:block lg:hidden'>
        <MenuHeader headerItemsCount={4} />
      </div>
      <div className='hidden lg:block'>
        <MenuHeader headerItemsCount={6} />
      </div>
      <DrawerNavigation/>
    </>
  )
}

export default Header;
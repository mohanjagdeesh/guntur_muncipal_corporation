import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import MenuHeader from '../../global-components/menu-header/menu-header.tsx';
import NavigationDrawer from '../../global-components/menu-header/navigation-drawer.tsx';
import DrawerNavigation from '../../global-components/menu-header/drawer-navigation.tsx';
import { HEADER_ICONS } from '../../mock-data/header-mock-data.ts';
import { IHeaderIcons } from '../../interfaces/ImobileMenuOptions.ts';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';


const Header = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className=' sticky top-0 z-20 bg-white'>
    <div className='bg-solitaire'>
      <div className='container'>
      <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center py-2'>
        <div className='hidden w-full md:flex md:flex-row md:justify-center md:gap-10 lg:justify-normal lg:gap-8 lg:w-1/2'>
          <h1 className='text-center leading-tight text-[0.9rem] font-bold mb-0' title="This is Andhra Pradesh Government in Telugu">ఆంధ్ర ప్రదేశ్ ప్రభుత్వం</h1>
          <h1 className='text-center leading-tight text-[0.9rem] font-bold'>GOVERNMENT OF ANDHRA PRADESH</h1>
        </div>
        <div className=' flex items-center justify-around md:justify-center md:gap-5 md:p-2 lg:p-0'>
          <a href='#main-content' className='hidden md:block leading-none text-center text-[0.8rem] cursor-pointer'>SKIP TO MAIN CONTENT</a>
          {HEADER_ICONS.map((each:IHeaderIcons,index:number)=> (
            <FontAwesomeIcon key={index} title={each?.title} icon={FaIcons[each?.icon]} className={`${each?.className ? each?.className : ''}`} size='1x' />
          ))}
          <select defaultValue="English" className=' outline-0 h-[25px] w-[100px] text-[12px] py-0'>
            <option value="English">English</option>
            <option value="Telugu">తెలుగు</option>
          </select>
        </div>
      </div>
      </div>
    </div>

    <div className=' container'>
        <div className='flex flex-col items-center gap-4 md:gap-0 md:flex-row md:justify-between py-2'>
        <div className=' flex  items-center gap-4'>
          <div className=' h-20 w-20 rounded-full'>
            <img src='/assets/ggmc.jpeg' alt='GGMC Logo' />
          </div>
          <div>
            <h1 className='text-[0.9rem] md:text-[1.2rem] lg:text-[1.5rem] font-bold leading-none text-green-600 text-center'>GUNTUR MUNCIPAL CORPORATION</h1>
            <h1 className='text-[0.9rem] md:text-[1.2rem] lg:text-[1.5rem] font-bold leading-tight text-center'>గుంటూరు నగర పాలక సంస్ధ</h1>
          </div>
        </div>
        <div className='hidden md:flex items-center'>
          <img className='h-20 w-20' src='/assets/ap_govt_logo.png' alt='AP Govt Logo' />
          <img className='h-24 w-28' src='/assets/swatch_bharath_logo.png' alt='Swatch Bharath Logo'/>
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
    </div>
  )
}

export default Header;
import { faBars, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { MOBILE_MENU_OPTIONS } from '../../mock-data/header-mock-data.ts';
import NavigationDrawer from './navigation-drawer.tsx';
import DrawerNavigation from './drawer-navigation.tsx';

export interface IHeaderItems {
    headerItemsCount: number;
}

const MenuHeader:React.FC<IHeaderItems> = ({ headerItemsCount }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [activeSubIndex, setActiveSubIndex] = useState<number | null>(null);
    const [openDrawer , setOpenDrawer] = useState<boolean>(false);

    const handleMouseEnter = (index: number) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
        setActiveSubIndex(null);
    };

    const handleSubMenuEnter = (index: number) => {
        setActiveSubIndex(index);
    };

    const handleSubMenuLeave = () => {
        setActiveSubIndex(null);
    };

    const openNavigationDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
        <div className='bg-violet w-full py-4'>
            <div className='container flex items-center justify-between'>
                <div className='flex flex-1 items-center gap-4'>
                    {MOBILE_MENU_OPTIONS.slice(0, headerItemsCount).map((mainMenu, mainIndex) => (
                        <div
                            key={mainIndex}
                            className='relative sm:hidden md:flex items-center cursor-pointer'
                            onMouseEnter={() => handleMouseEnter(mainIndex)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <h1 className="text-white text-[0.9rem] font-semibold">{mainMenu.linkHeader}</h1>
                            {mainMenu?.subLinks?.length && (
                                <span className='ml-2'>
                                    <FontAwesomeIcon
                                        className='text-orange-peel'
                                        icon={faCaretDown}
                                        size="xl"
                                    />
                                </span>
                            )}

                            {/* Submenu */}
                            {activeIndex === mainIndex && mainMenu?.subLinks?.length && (
                                <div className='absolute top-full left-0 bg-orange-peel shadow-lg p-2 rounded-md z-10 w-[250px]'>
                                    <ul>
                                        {mainMenu.subLinks.map((subLink, subIndex) => (
                                            <li
                                                key={subIndex}
                                                className='relative py-1 px-2 text-violet leading-none font-semibold text-[0.9rem]'
                                                onMouseEnter={() => handleSubMenuEnter(subIndex)}
                                                onMouseLeave={handleSubMenuLeave}
                                            >
                                                <a href={subLink.subLinkTo} className='text-violet hover:text-white'>
                                                    {subLink.subLinkHeader}
                                                    {subLink?.associatedSubLinks?.length && (
                                                    <span className='ml-2'>
                                                        <FontAwesomeIcon
                                                            className='text-violet'
                                                            icon={faCaretRight}
                                                            size="xl"
                                                        />
                                                    </span>
                                                )}
                                                </a>
                                                {/* Nested Submenu */}
                                                {activeSubIndex === subIndex && subLink?.associatedSubLinks?.length && (
                                                    <div className='absolute top-0 left-full ml-2 bg-orange-peel shadow-lg p-2 rounded-md z-10'>
                                                        <ul>
                                                            {subLink.associatedSubLinks.map((subSubLink, subSubIndex) => (
                                                                <li key={subSubIndex} className='py-1 px-2 text-black text-[0.9rem]'>
                                                                    <a href={subSubLink.associatedSublinkTo} className='text-black no-underline hover:text-white'>
                                                                        {subSubLink.associatedSubLinkHeader}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
                <div className='cursor-pointer' onClick={openNavigationDrawer}>
                    <h1 className='text-white font-semibold text-[1rem]'>
                        <span><FontAwesomeIcon icon={faBars} size='xl' /></span> More
                    </h1>
                </div>
            </div>
        </div>
        {openDrawer &&         
        <div>
            <NavigationDrawer navOptionsCount={headerItemsCount} setNavDrawer={setOpenDrawer} className={`nav-slide-in ${openDrawer ? 'nav-menu-slide-in' : 'nav-menu-slide-out'}`} clousureRequired={true}/>
            <DrawerNavigation/>
        </div>}

        </>
    );
};

export default MenuHeader;

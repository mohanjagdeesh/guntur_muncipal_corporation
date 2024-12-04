import { faBars, faCaretDown, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { MOBILE_MENU_OPTIONS } from '../../mock-data/header-mock-data.ts';
import NavigationDrawer from './navigation-drawer.tsx';
import DrawerNavigation from './drawer-navigation.tsx';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';

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
        <div className='bg-violet w-full py-2'>
            <div className='container flex items-center justify-between'>
                <div className='flex flex-1 items-center gap-4'>
                    {MOBILE_MENU_OPTIONS.slice(0, headerItemsCount).map((mainMenu, mainIndex) => (
                        <div
                            key={mainIndex}
                            className='relative sm:hidden md:flex items-center cursor-pointer'
                            onMouseEnter={() => handleMouseEnter(mainIndex)}
                            onMouseLeave={handleMouseLeave}
                        >
                            {mainMenu.linkIcon && <FontAwesomeIcon icon={FaIcons[mainMenu?.linkIcon]} color='#fa9e00' className='mr-1' />}
                            <a href={mainMenu.linkTo} rel='noreferrer' className="text-white text-[0.9rem] font-light">
                            {mainMenu.linkHeader}</a>
                            {mainMenu?.subLinks?.length && (
                                <span className='ml-2'>
                                    <FontAwesomeIcon
                                        className='text-orange-peel'
                                        icon={faCaretDown}
                                        size="lg"
                                    />
                                </span>
                            )}

                            {/* Submenu */}
                            {activeIndex === mainIndex && mainMenu?.subLinks?.length && (
                                <div className='absolute top-full left-0 bg-[#f1f1f1] shadow-lg p-2 rounded-md z-10 w-[250px]'>
                                    <ul className=' divide-y-[1px] divide-boulder divide-opacity-70'>
                                        {mainMenu.subLinks.map((subLink, subIndex) => (
                                            <li
                                                key={subIndex}
                                                className='relative py-2 px-2 text-violet leading-none font-light text-[0.9rem] hover:bg-[#f2d6a6] hover:border-l-4 hover:border-orange-peel'
                                                onMouseEnter={() => handleSubMenuEnter(subIndex)}
                                                onMouseLeave={handleSubMenuLeave}
                                            >
                                                <a href={subLink.subLinkTo} className='text-violet hover:text-black' onClick={(e)=> {
                                                    if(subLink.subLinkTo && subLink.outOfBrowser){
                                                        e.preventDefault();
                                                        if(window.confirm('You are being redirected to an external site. Do you want to continue?')){
                                                            window.open(subLink.subLinkTo,'_blank','noreferrer')
                                                        }
                                                    }
                                                }}>
                                                    {subLink.subLinkHeader}
                                                    {subLink?.associatedSubLinks?.length && (
                                                    <span className='ml-2'>
                                                        <FontAwesomeIcon
                                                            className='text-violet'
                                                            icon={faCaretRight}
                                                            size="lg"
                                                        />
                                                    </span>
                                                )}
                                                </a>
                                                {/* Nested Submenu */}
                                                {activeSubIndex === subIndex && subLink?.associatedSubLinks?.length && (
                                                    <div className='absolute top-0 left-full bg-[#f1f1f1] shadow-lg p-2 rounded-md z-10 w-[250px]'>
                                                        <ul className=' divide-y-[1px] divide-boulder divide-opacity-70'>
                                                            {subLink.associatedSubLinks.map((subSubLink, subSubIndex) => (
                                                                <li key={subSubIndex} className='relative py-2 px-2 text-violet leading-none font-light text-[0.9rem] hover:bg-[#f2d6a6] hover:border-l-4 hover:border-orange-peel'>
                                                                    <a href={subSubLink.associatedSublinkTo} className='text-black no-underline hover:text-black' onClick={(e)=> {
                                                                        if(subSubLink.associatedSublinkTo){
                                                                            e.preventDefault();
                                                                            if(window.confirm('You are being redirected to an external site. Do you want to continue?')){
                                                                                window.open(subSubLink.associatedSublinkTo,'_blank','noreferrer');
                                                                            }
                                                                        }
                                                                    }} >
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
                <div className='cursor-pointer bg-orange-peel py-2 px-4 rounded-md' onClick={openNavigationDrawer}>
                    <h1 className='text-violet font-semibold text-[1rem]'>
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

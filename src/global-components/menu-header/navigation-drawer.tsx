import React, { useState } from 'react'
import { MOBILE_MENU_OPTIONS } from '../../mock-data/header-mock-data.ts';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { INavigationDrawer } from '../../interfaces/INavigationDrawer.ts';

const NavigationDrawer:React.FC<INavigationDrawer> = ({navOptionsCount,setNavDrawer,className,clousureRequired=false}) => {
    const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
    const [subMenuIndex, setSubMenuIndex] = useState<number>();
    const [associatedSubMenuOpen, setAssociatedSubSubMenuOpen] = useState<boolean>(false);
    const [associatedMenuIndex, setAssociatedMenuIndex] = useState<number>();

    const handleTogglingMobileMenu = (index: number) => {
        if (index === subMenuIndex) {
            setSubMenuOpen(!subMenuOpen);
            setAssociatedSubSubMenuOpen(false);
        } else {
            setSubMenuIndex(index)
            setSubMenuOpen(true);
        }
    }

    const handleToggleMobileSubmenu = (index: number) => {
        if (index === associatedMenuIndex) {
            setAssociatedSubSubMenuOpen(!associatedSubMenuOpen);
        } else {
            setAssociatedMenuIndex(index)
            setAssociatedSubSubMenuOpen(true);
        }
    }

    const navOptions = navOptionsCount > 0 ? navOptionsCount : 0

    return (
        <ul className={`${className ? className : ''}`}>
            {clousureRequired && <div className='bg-violet py-2 pr-2'><h1 onClick={()=>setNavDrawer?.(false)} className='text-white text-lg font-semibold text-right cursor-pointer'><span className='mr-2'><FontAwesomeIcon icon={faClose} size='xl' /></span>Close</h1></div> }
            {MOBILE_MENU_OPTIONS.slice(navOptions).map((menu, menuIndex) => (
                <li key={menuIndex} className='bg-violet'>
                    {/* Menu header */}
                    <div
                        onClick={() => handleTogglingMobileMenu(menuIndex)}
                        className="flex items-center justify-between py-2 px-4 cursor-pointer"
                    >
                        <a href={menu.linkTo} className="text-white text-[0.9rem] font-semibold">{menu.linkHeader}</a>
                        {menu?.subLinks?.length && (
                            <FontAwesomeIcon
                                className={`text-orange-peel transition-transform duration-300 ${subMenuOpen && subMenuIndex === menuIndex ? 'rotate-45' : ''}`}
                                icon={faPlusCircle}
                                size="lg"
                            />
                        )}
                    </div>

                    {/* Submenu */}
                    {subMenuOpen && subMenuIndex === menuIndex && menu?.subLinks?.length && (
                        <ul className="transition-all duration-300 ease-in-out overflow-hidden">
                            {menu.subLinks.map((sublink, sublinkIndex) => (
                                <li key={sublinkIndex}>
                                    {/* Submenu header */}
                                    <div
                                        onClick={() => handleToggleMobileSubmenu(sublinkIndex)}
                                        className="flex items-center justify-between py-2 px-4 bg-orange-peel cursor-pointer"
                                    >
                                        <a href={sublink.subLinkTo} className="text-black text-[0.9rem] font-semibold">{sublink.subLinkHeader}</a>
                                        {sublink?.associatedSubLinks?.length && (
                                            <FontAwesomeIcon className={`text-black transition-all transform duration-300 ${associatedSubMenuOpen && associatedMenuIndex === sublinkIndex ? 'rotate-45' : ''}`}
                                                icon={faPlusCircle} size="lg" />
                                        )}
                                    </div>

                                    {/* Associated Submenu */}
                                    {associatedSubMenuOpen && associatedMenuIndex === sublinkIndex && sublink?.associatedSubLinks?.length && (
                                        <ul className="transition-all duration-300 ease-in-out overflow-hidden">
                                            {sublink.associatedSubLinks.map((asLink, asLinkIndex) => (
                                                <li key={asLinkIndex} className="flex items-center justify-between py-2 px-4 bg-white cursor-pointer">
                                                    <a href={asLink.associatedSublinkTo} className="text-violet text-[0.9rem] font-semibold">{asLink.associatedSubLinkHeader}</a>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                        </ul>
                    )}
                </li>
            ))}
        </ul>
    );

}

export default NavigationDrawer;
import React from 'react';
import GlobalUlElements from '../../global-components/global-ul-elements/global-ul-elements.tsx';
import { FOOTER_COMPANY_LIST_ITEMS, FOOTER_CONTACT_LIST_ITEMS, FOOTER_SERVICES_LIST_ITEMS } from '../../mock-data/footer-mock-data.ts';
const Footer = () => {
  return (
    <div className=' bg-violet h-fit'>
      <div className=" container">
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <ul>
            <h1 className=' text-orange-peel text-md font-semibold mb-4'>CONTACT</h1>
            {FOOTER_CONTACT_LIST_ITEMS.map((each) => {
              return <GlobalUlElements key={each.liName} liName={each?.liName} liIcon={each?.liIcon} />;
            })}
          </ul>
          <ul>
            <h1 className=' text-orange-peel text-md font-semibold mb-4'>COMPANY</h1>
            {FOOTER_COMPANY_LIST_ITEMS.map((each) => {
              return <GlobalUlElements key={each.liName} liName={each?.liName} liIcon="faChevronRight" />;
            })}
          </ul>
          <ul>
            <h1 className=' text-orange-peel text-md font-semibold mb-4'>SERVICES</h1>
            {FOOTER_SERVICES_LIST_ITEMS.map((each) => {
              return <GlobalUlElements key={each.liName} liName={each?.liName} liIcon="faChevronRight" />;
            })}
          </ul>
        </div>
        <hr className='h-[2px] w-full bg-boulder mt-4' />
        <div className='py-4 flex flex-col md:flex-row items-center justify-between' >
          <p className=' text-white'>@{" "}All Right Reserved. Designed By</p>
          <div className='flex items-center gap-2'>
            <p className='text-white'>Home</p>
            <p className='text-white'>Cookies</p>
            <p className='text-white'>Help</p>
            <p className='text-white'>FAQs</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
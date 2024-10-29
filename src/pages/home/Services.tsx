import React from 'react'
import { HOME_SERVICES_MOCK_DATA } from '../../mock-data/home-services-mock-data.ts';
import { Card } from 'flowbite-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as FaIcons from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  return (
    <div className=' container'>
    <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
    {HOME_SERVICES_MOCK_DATA.map((service,index)=> {
        const {serviceIcon} = service;
        return (
          <a key={index} href={service.serviceUrl} rel='noreferrer'>
            <Card
              className="group hover:bg-orange-peel p-4 transition duration-300 ease-in-out cursor-pointer"
              key={service.serviceName}
            >
              <FontAwesomeIcon
                icon={FaIcons[serviceIcon]}
                size="2xl"
                className="text-orange-peel p-1 text-center transition-colors duration-300 group-hover:text-violet"
              />
              <h1 className="text-black text-[1.5rem] font-semibold text-center transition-colors duration-300 group-hover:text-violet">
                {service.serviceName}
              </h1>
              <p className="text-gray-500 font-light leading-none text-center transition-colors duration-300 group-hover:text-violet">
                {service.serviceDescription}
              </p>
            </Card>
          </a>
        );
    })}
    </div>
    </div>
  )
}

export default Services;
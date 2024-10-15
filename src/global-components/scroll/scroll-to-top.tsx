import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const ScrollToTop = () => {
    const [showScroll, setShowScroll] = useState<boolean>(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    {showScroll && (
        <div
          className='fixed bottom-5 right-5 h-[60px] w-[55px] bg-orange-peel flex items-center justify-center cursor-pointer'
          onClick={scrollToTop}
        >
          <FontAwesomeIcon className='text-white' icon={faArrowUp} size='xl' />
        </div>
      )}
      </>
  )
}

export default ScrollToTop;
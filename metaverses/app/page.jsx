// "use client"

import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
// import { useEffect } from 'react';


const Page = () => {

  // useEffect(() => {
  //   const scrollHandler = () => {
  //     window.scrollTo(0, 0); // Scrolls to top (y-axis = 0) when the component mounts
  //   };

  //   window.addEventListener('beforeunload', scrollHandler);

  //   return () => {
  //     window.removeEventListener('beforeunload', scrollHandler);
  //   };
  // }, [])

  return (
    <div className='bg-primary-black overflow-hidden'>
      <Navbar />
      <Hero />
      <div className='relative'>
        <About />
        <div className='gradient-03 z-0' />
        <Explore />
      </div>
      <div className='relative'>
        <GetStarted />
        <div className='gradient-04 z-0' />
        <WhatsNew />
      </div>
      <div className='relative'>
        <World />
        <div className='gradient-04 z-0' />
        <Insights />
      </div>
      <Feedback />
      <Footer />
      {/* {scrollHandler()} */}
    </div>
  )
};


export default Page;

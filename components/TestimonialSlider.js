// testimonial data
  
const testimonialData = [
  {
    image: './t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
       'We had the pleasure of partnering with Ouhba-Youssef on our marketing campaign, and the results speak for themselves.',
  },
  {
    image: './t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
            "Working with Ouhba-Youssef has been an absolute pleasure. Their attention to detail, exceptional communication skills, and ability to understand our unique needs have made a significant impact on our project's success. ",
  },
  {
    image: './t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Working with Ouhba-Youssef was a game-changer for our business. Their SEO strategies and optimizations catapulted our website to the top of search engine rankings, significantly increasing our organic traffic and online visibility.',
  },
];


// import swiper react components 

import { Swiper,SwiperSlide } from "swiper/react";


// import swiper styles

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';



// import required modules

import {Navigation,Pagination } from "swiper";

// icons

import { FaQuoteLeft} from 'react-icons/fa'

// next image

import Image from "next/image";

const TestimonialSlider = () => {
  return (
  <Swiper
    navigation={true}
    pagination={{
      clickable: true,
    }}
    modules={[Navigation,Pagination]}
    className='h-[400px]'
  >
    {
      testimonialData.map((person,index) => {
        return (
          <SwiperSlide key={index}>
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
              {/** avatar , name , position */}
              <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
                <div className='flex flex-col justify-center text-center'>
                  {/** avatr */}
                  <div className='mb-2 mx-auto'>
                    <Image src={person.image} width={100} height={100} alt=''/>
                  </div>
                   {/** name */}
                  <div className="text-lg">{person.name}</div>
                  {/** position */}
                  <div className='text-[12px] uppercase font-extralight tracking-widest'>{person.position}</div>
                </div>
              </div>
              {/** qouts and messages */}
              <div 
                className=' flex-1 flex flex-col justify-center before:w-[1px]
                xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px]
                relative xl:pl-20'>
                {/** quot icon */}
                <div className='mb-4'>
                  <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                {/** message */}
                <div className='xl:text-lg text-center md:text-left'>{person.message}</div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>);
};

export default TestimonialSlider;



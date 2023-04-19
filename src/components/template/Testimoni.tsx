/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Slider from 'react-slick'

const Testimoni = ({
  listTestimoni = [
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      testimoni:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      testimoni:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      testimoni:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      testimoni:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
  ],
}) => {
  const settings = {
    dots: true,
    // eslint-disable-next-line react/no-unstable-nested-components
    customPaging(_: any) {
      return (
        <Link href='/' className=''>
          <span className='block w-4 h-4 mx-2 transition-all rounded-l-full rounded-r-full cursor-pointer ' />
        </Link>
      )
    },
    dotsClass: 'slick-dots w-max absolute mt-20  ',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const [sliderRef, setSliderRef] = useState<any>(null)

  return (
    <>
      <Slider
        {...settings}
        arrows={false}
        dots={false}
        ref={setSliderRef}
        className='flex items-stretch justify-items-stretch'
      >
        {listTestimoni.map((listTestimonis, index) => (
          <div className='flex items-stretch px-3' key={index}>
            <div className='flex flex-col p-8 transition-all border-2 border-gray-500 rounded-lg hover:border-orange-500'>
              <div className='flex flex-col items-stretch w-full xl:flex-row xl:items-center'>
                <div className='flex order-2 xl:order-1'>
                  <Image src={listTestimonis.image} height={50} width={50} alt='Icon People' />
                  <div className='flex flex-col ml-5 text-left'>
                    <p className='text-lg capitalize text-black-600'>{listTestimonis.name}</p>
                    <p className='text-sm capitalize text-black-500'>
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className='flex items-center flex-none order-1 ml-auto xl:order-2'>
                  <p className='text-sm'>{listTestimonis.rating}</p>
                  <span className='flex ml-4'>
                    <Image
                      className='w-4 h-4'
                      src='/assets/icon/template/stars.svg'
                      alt='star'
                      height={30}
                      width={30}
                    />
                  </span>
                </div>
              </div>
              <p className='mt-5 text-left'>“{listTestimonis.testimoni}”.</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className='flex items-center justify-end w-full'>
        <div className='flex justify-between flex-none w-auto mt-14'>
          <div
            className='flex items-center justify-center mx-4 text-orange-500 transition-all bg-white border border-orange-500 rounded-full cursor-pointer h-14 w-14 hover:bg-orange-500 hover:text-white-500'
            onClick={sliderRef?.slickPrev}
          >
            <Image
              className='w-6 h-6'
              src='/assets/icon/template/eva_arrow-back-fill.svg'
              alt='Back'
              height={30}
              width={30}
            />
          </div>
          <div
            className='flex items-center justify-center text-orange-500 transition-all bg-white border border-orange-500 rounded-full cursor-pointer h-14 w-14 hover:bg-orange-500 hover:text-white-500'
            onClick={sliderRef?.slickNext}
          >
            <Image
              className='w-6 h-6'
              src='/assets/icon/template/eva_arrow-next-fill.svg'
              alt='Next'
              height={30}
              width={30}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Testimoni

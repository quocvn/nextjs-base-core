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
          <span className='mx-2 block h-4 w-4 cursor-pointer rounded-l-full rounded-r-full transition-all ' />
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
            <div className='hover:border-orange-500 flex flex-col rounded-lg border-2 border-gray-500 p-8 transition-all'>
              <div className='flex w-full flex-col items-stretch xl:flex-row xl:items-center'>
                <div className='order-2 flex xl:order-1'>
                  <Image src={listTestimonis.image} height={50} width={50} alt='Icon People' />
                  <div className='ml-5 flex flex-col text-left'>
                    <p className='text-lg capitalize text-black-600'>{listTestimonis.name}</p>
                    <p className='text-sm capitalize text-black-500'>
                      {listTestimonis.city},{listTestimonis.country}
                    </p>
                  </div>
                </div>
                <div className='order-1 ml-auto flex flex-none items-center xl:order-2'>
                  <p className='text-sm'>{listTestimonis.rating}</p>
                  <span className='ml-4 flex'>
                    <Image
                      className='h-4 w-4'
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
      <div className='flex w-full items-center justify-end'>
        <div className='mt-14 flex w-auto flex-none justify-between'>
          <div
            className='text-orange-500 bg-white border-orange-500 hover:bg-orange-500 mx-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border transition-all hover:text-white-500'
            onClick={sliderRef?.slickPrev}
          >
            <Image
              className='h-6 w-6'
              src='/assets/icon/template/eva_arrow-back-fill.svg'
              alt='Back'
              height={30}
              width={30}
            />
          </div>
          <div
            className='text-orange-500 bg-white border-orange-500 hover:bg-orange-500 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border transition-all hover:text-white-500'
            onClick={sliderRef?.slickNext}
          >
            <Image
              className='h-6 w-6'
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

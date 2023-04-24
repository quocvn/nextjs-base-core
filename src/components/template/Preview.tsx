import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

const Preview = ({
  listPreview = [
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
    {
      name: 'iezh Robert',
      image: '/assets/images/people.png',
      city: 'Warsaw',
      country: 'Poland',
      rating: '4.5',
      content:
        'Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best',
    },
  ],
}) => {
  const sliderRef = useRef<CarouselRef>(null)
  const settings = {
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

  return (
    <>
      <Carousel
        {...settings}
        arrows={false}
        dots={false}
        ref={sliderRef}
        className='flex items-stretch justify-items-stretch'
      >
        {listPreview.map((previewItem, index) => (
          <div className='flex items-stretch px-3' key={index}>
            <div className='flex flex-col rounded-lg border-2 border-template-gray-500 p-8 transition-all hover:border-template-orange-500'>
              <div className='flex w-full flex-col items-stretch xl:flex-row xl:items-center'>
                <div className='order-2 flex xl:order-1'>
                  <Image src={previewItem.image} height={50} width={50} alt='Icon People' />
                  <div className='ml-5 flex flex-col text-left'>
                    <p className='text-lg capitalize text-template-black-600'>{previewItem.name}</p>
                    <p className='text-sm capitalize text-template-black-500'>
                      {previewItem.city},{previewItem.country}
                    </p>
                  </div>
                </div>
                <div className='order-1 ml-auto flex flex-none items-center xl:order-2'>
                  <p className='text-sm'>{previewItem.rating}</p>
                  <span className='ml-4 flex'>
                    <Image
                      className='h-4 w-4'
                      src='/assets/icons/template/stars.svg'
                      alt='star'
                      height={30}
                      width={30}
                    />
                  </span>
                </div>
              </div>
              <p className='mt-5 text-left'>{previewItem.content}.</p>
            </div>
          </div>
        ))}
      </Carousel>
      <div className='flex w-full items-center justify-end'>
        <div className='mt-14 flex w-auto flex-none justify-between'>
          <button
            type='button'
            className='bg-template-white mx-4 flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-template-orange-500 text-template-orange-500 transition-all hover:bg-template-orange-500 hover:text-template-white-500'
            onClick={() => sliderRef.current?.prev()}
          >
            <Image
              className='h-6 w-6'
              src='/assets/icons/template/eva_arrow-back-fill.svg'
              alt='Back'
              height={30}
              width={30}
            />
          </button>
          <button
            type='button'
            className='bg-template-white flex h-14 w-14 cursor-pointer items-center justify-center rounded-full border border-template-orange-500 text-template-orange-500 transition-all hover:bg-template-orange-500 hover:text-template-white-500'
            onClick={() => sliderRef.current?.next()}
          >
            <Image
              className='h-6 w-6'
              src='/assets/icons/template/eva_arrow-next-fill.svg'
              alt='Next'
              height={30}
              width={30}
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default Preview

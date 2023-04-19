import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useMemo } from 'react'

import ScrollAnimationWrapper from 'components/layout/ScrollAnimationWrapper'
import ButtonPrimary from 'components/ui/ButtonPrimary'

import { getScrollAnimation } from 'utils/getScrollAnimation'

const Hero = ({
  listUser = [
    {
      name: 'Users',
      number: '390',
      icon: '/assets/icon/template/heroicons_sm-user.svg',
    },
    {
      name: 'Locations',
      number: '20',
      icon: '/assets/icon/template/gridicons_location.svg',
    },
    {
      name: 'Server',
      number: '50',
      icon: '/assets/icon/template/bx_bxs-server.svg',
    },
  ],
}) => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className='max-w-screen-xl px-8 mx-auto mt-24 xl:px-16' id='about'>
      <ScrollAnimationWrapper>
        <motion.div
          className='grid grid-flow-row grid-rows-2 gap-8 py-6 sm:grid-flow-col md:grid-rows-1 sm:grid-cols-2 sm:py-16'
          variants={scrollAnimation}
        >
          <div className='flex flex-col items-start justify-center row-start-2 sm:row-start-1'>
            <h1 className='text-3xl font-medium leading-normal lg:text-4xl xl:text-5xl text-black-600'>
              Want anything to be easy with <strong>LaslesVPN</strong>.
            </h1>
            <p className='mt-4 mb-6 text-black-500'>
              Provide a network for all your needs with ease and fun using LaslesVPN discover
              interesting features from us.
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
          <div className='flex w-full'>
            <motion.div className='w-full h-full' variants={scrollAnimation}>
              <Image
                src='/assets/images/Illustration1.png'
                alt='VPN Illustrasi'
                quality={100}
                width={612}
                height={383}
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className='relative flex w-full'>
        <ScrollAnimationWrapper className='z-10 grid w-full grid-flow-row grid-cols-1 divide-y-2 divide-gray-100 rounded-lg sm:grid-flow-row sm:grid-cols-3 py-9 sm:divide-y-0 sm:divide-x-2 bg-white-500'>
          {listUser.map((listUsers, index) => (
            <motion.div
              className='flex items-center justify-start w-8/12 px-4 py-4 mx-auto sm:justify-center sm:py-6 sm:w-auto sm:mx-0'
              key={index}
              custom={{ duration: 2 + index }}
              variants={scrollAnimation}
            >
              <div className='flex w-40 mx-auto sm:w-auto'>
                <div className='flex items-center justify-center w-12 h-12 mr-6 bg-orange-100 rounded-full'>
                  <img src={listUsers.icon} className='w-6 h-6' alt='' />
                </div>
                <div className='flex flex-col'>
                  <p className='text-xl font-bold text-black-600'>{listUsers.number}+</p>
                  <p className='text-lg text-black-500'>{listUsers.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollAnimationWrapper>
        <div
          className='absolute top-0 left-0 right-0 w-11/12 h-64 mx-auto mt-8 bg-black-600 opacity-5 roudned-lg sm:h-48'
          style={{ filter: 'blur(114px)' }}
        />
      </div>
    </div>
  )
}

export default Hero

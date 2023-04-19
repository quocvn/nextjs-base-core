import { motion } from 'framer-motion'
import Image from 'next/image'
import React, { useMemo } from 'react'

import ScrollAnimationWrapper from 'components/layout/ScrollAnimationWrapper'
import ButtonOutline from 'components/ui/ButtonOutline'
import ButtonPrimary from 'components/ui/ButtonPrimary'

import { getScrollAnimation } from 'utils/getScrollAnimation'

import Testimoni from './Testimoni'

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div className='w-full bg-gradient-to-b from-white-300 to-white-500 py-14' id='pricing'>
      <div className='flex flex-col justify-center w-full max-w-screen-xl px-6 mx-auto text-center sm:px-8 lg:px-16'>
        <div className='flex flex-col w-full'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='text-2xl font-medium leading-relaxed sm:text-3xl lg:text-4xl text-black-600'
            >
              Choose Your Plan
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='w-10/12 mx-auto my-2 leading-normal text-center sm:w-7/12 lg:w-6/12'
            >
              Let choose the package that is best for you and explore it happily and cheerfully.
            </motion.p>
          </ScrollAnimationWrapper>
          <div className='grid grid-flow-row grid-cols-1 gap-4 px-6 py-8 sm:grid-flow-col sm:grid-cols-3 lg:gap-12 lg:py-12 sm:px-0 lg:px-6'>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col items-center justify-center px-6 py-4 border-2 border-gray-500 rounded-xl lg:px-12 xl:px-20'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='p-4 mt-6 lg:p-0 lg:mt-16'>
                  <Image src='/assets/images/Free.png' width={145} height={165} alt='Free Plan' />
                </div>
                <p className='my-2 text-lg font-medium capitalize text-black-600 sm:my-7'>
                  Free Plan
                </p>
                <ul className='flex flex-col items-start justify-start flex-grow pl-6 text-left list-inside xl:pl-0 text-black-500'>
                  <li className='relative my-2 check custom-list'>Unlimited Bandwitch</li>
                  <li className='relative my-2 check custom-list'>Encrypted Connection</li>
                  <li className='relative my-2 check custom-list'>No Traffic Logs</li>
                  <li className='relative my-2 check custom-list'>Works on All Devices</li>
                </ul>
                <div className='flex flex-col justify-center flex-none w-full mt-12 mb-8'>
                  <p className='mb-4 text-2xl text-center text-black-600 '>Free</p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col items-center justify-center px-6 py-4 border-2 border-gray-500 rounded-xl lg:px-12 xl:px-20'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='p-4 mt-6 lg:p-0 lg:mt-16'>
                  <Image
                    src='/assets/images/Standard.png'
                    width={145}
                    height={165}
                    alt='Standard Plan'
                  />
                </div>
                <p className='my-2 text-lg font-medium capitalize text-black-600 sm:my-7'>
                  Standard Plan{' '}
                </p>
                <ul className='flex flex-col items-start justify-start flex-grow pl-6 text-left list-inside xl:pl-0 text-black-500'>
                  <li className='relative my-2 check custom-list'>Unlimited Bandwitch</li>
                  <li className='relative my-2 check custom-list'>Encrypted Connection</li>
                  <li className='relative my-2 check custom-list'>No Traffic Logs</li>
                  <li className='relative my-2 check custom-list'>Works on All Devices</li>
                  <li className='relative my-2 check custom-list'>Connect Anyware </li>
                </ul>
                <div className='flex flex-col justify-center flex-none w-full mt-12 mb-8'>
                  <p className='mb-4 text-2xl text-center text-black-600 '>
                    $9 <span className='text-black-500'>/ mo</span>
                  </p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col items-center justify-center px-6 py-4 border-2 border-gray-500 rounded-xl lg:px-12 xl:px-20'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='p-4 mt-6 lg:p-0 lg:mt-16'>
                  <Image
                    src='/assets/images/Premium.png'
                    width={145}
                    height={165}
                    alt='Premium Plan'
                  />
                </div>
                <p className='my-2 text-lg font-medium capitalize text-black-600 sm:my-7'>
                  Premium Plan{' '}
                </p>
                <ul className='flex flex-col items-start justify-start flex-grow pl-6 text-left list-inside xl:pl-0 text-black-500'>
                  <li className='relative my-2 check custom-list'>Unlimited Bandwitch</li>
                  <li className='relative my-2 check custom-list'>Encrypted Connection</li>
                  <li className='relative my-2 check custom-list'>No Traffic Logs</li>
                  <li className='relative my-2 check custom-list'>Works on All Devices</li>
                  <li className='relative my-2 check custom-list'>Connect Anyware </li>
                  <li className='relative my-2 check custom-list'>Get New Features </li>
                </ul>
                <div className='flex flex-col justify-center flex-none w-full mt-12 mb-8'>
                  <p className='mb-4 text-2xl text-center text-black-600 '>
                    $12 <span className='text-black-500'>/ mo</span>
                  </p>

                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className='flex flex-col w-full my-16'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='w-9/12 mx-auto text-2xl font-medium leading-relaxed sm:text-3xl lg:text-4xl text-black-600 sm:w-6/12 lg:w-4/12'
            >
              Huge Global Network of Fast VPN{' '}
            </motion.h3>
            <motion.p
              className='w-10/12 mx-auto my-2 leading-normal sm:w-7/12 lg:w-6/12'
              variants={scrollAnimation}
            >
              See LaslesVPN everywhere to make it easier for you when you move locations.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className='w-full px-8 py-12 mt-16' variants={scrollAnimation}>
              <Image
                className='w-full h-auto'
                src='/assets/images/HugeGlobal.svg'
                width={800}
                height={400}
                alt='Maps'
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className='flex flex-wrap items-center w-full mt-4 justify-evenly lg:flex-nowrap'
              variants={scrollAnimation}
            >
              {/* <Netflix className="w-auto h-18" /> */}
              <img
                src='/assets/icon/template/amazon.png'
                className='w-auto mt-4 h-14 lg:mt-2'
                alt=''
              />
              <img
                src='/assets/icon/template/netflix.png'
                className='w-auto mt-2 h-14 lg:mt-0'
                alt=''
              />
              <img
                src='/assets/icon/template/reddit.png'
                className='w-auto h-12 mt-2 lg:mt-0'
                alt=''
              />
              <img
                src='/assets/icon/template/discord.png'
                className='w-auto mt-2 h-14 lg:mt-0'
                alt=''
              />
              <img
                src='/assets/icon/template/spotify.png'
                className='w-auto h-12 mt-2 lg:mt-0'
                alt=''
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className='flex flex-col w-full my-16' id='testimoni'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='w-9/12 mx-auto text-2xl font-medium leading-normal sm:text-3xl lg:text-4xl text-black-600 sm: lg:w-4/12'
            >
              Trusted by Thousands of Happy Customer{' '}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='w-10/12 mx-auto mt-4 mb-2 leading-normal sm:w-7/12 lg:w-6/12'
            >
              These are the stories of our customers who have joined us with great pleasure when
              using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className='flex flex-col w-full py-12'>
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className='relative w-full mt-16'>
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className='absolute z-10 flex flex-col items-center justify-between w-full px-6 py-8 rounded-xl sm:py-14 sm:px-12 lg:px-16 sm:flex-row bg-white-500'>
                <div className='flex flex-col w-10/12 mb-6 text-left sm:w-7/12 lg:w-5/12 sm:mb-0'>
                  <h5 className='text-xl font-medium leading-relaxed text-black-600 sm:text-2xl lg:text-3xl'>
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>Let subscribe with us and find the fun.</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className='absolute top-0 left-0 right-0 w-11/12 mx-auto mt-8 bg-black-600 opacity-5 roudned-lg h-60 sm:h-56'
                style={{ filter: 'blur(114px)' }}
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  )
}

export default Pricing

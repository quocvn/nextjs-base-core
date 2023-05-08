import { motion } from 'framer-motion'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'
import React, { useMemo } from 'react'

import ScrollAnimationWrapper from 'components/layout/ScrollAnimationWrapper'
import ButtonOutline from 'components/ui/button/ButtonOutline'
import ButtonPrimary from 'components/ui/button/ButtonPrimary'
import { getScrollAnimation } from 'utils/getScrollAnimation'

import Preview from './Preview'

const Pricing = () => {
  const { t } = useTranslation('common')

  const scrollAnimation = useMemo(() => getScrollAnimation(), [])

  return (
    <div
      className='w-full bg-gradient-to-b from-template-white-300 to-template-white-500 py-14'
      id='pricing'
    >
      <div className='container mx-auto flex w-full flex-col justify-center px-8 text-center xl:px-16'>
        <div className='flex w-full flex-col'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='text-2xl font-medium leading-relaxed text-template-black-600 sm:text-3xl lg:text-4xl'
            >
              {t('Choose your plan', { ns: 'common' })}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='mx-auto my-2 w-10/12 text-center leading-normal sm:w-7/12 lg:w-6/12'
            >
              {t(
                'Let choose the package that is best for you and explore it happily and cheerfully.'
              )}
            </motion.p>
          </ScrollAnimationWrapper>
          <div className='grid grid-flow-row grid-cols-1 gap-4 px-6 py-8 sm:grid-flow-col sm:grid-cols-3 sm:px-0 lg:gap-12 lg:px-6 lg:py-12'>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col items-center justify-center rounded-xl border-2 border-template-gray-500 px-6 py-4 lg:px-12 xl:px-20'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='mt-6 p-4 lg:mt-16 lg:p-0'>
                  <Image src='/assets/images/Free.png' width={145} height={165} alt='Free Plan' />
                </div>
                <p className='my-2 text-lg font-medium capitalize text-template-black-600 sm:my-7'>
                  Free Plan
                </p>
                <ul className='flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left text-template-black-500 xl:pl-0'>
                  <li className='check custom-list relative my-2'>Unlimited Bandwitch</li>
                  <li className='check custom-list relative my-2'>Encrypted Connection</li>
                  <li className='check custom-list relative my-2'>No Traffic Logs</li>
                  <li className='check custom-list relative my-2'>Works on All Devices</li>
                </ul>
                <div className='mb-8 mt-12 flex w-full flex-none flex-col justify-center'>
                  <p className='mb-4 text-center text-2xl text-template-black-600 '>Free</p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col items-center justify-center rounded-xl border-2 border-template-gray-500 px-6 py-4 lg:px-12 xl:px-20'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='mt-6 p-4 lg:mt-16 lg:p-0'>
                  <Image
                    src='/assets/images/Standard.png'
                    width={145}
                    height={165}
                    alt='Standard Plan'
                  />
                </div>
                <p className='my-2 text-lg font-medium capitalize text-template-black-600 sm:my-7'>
                  Standard Plan{' '}
                </p>
                <ul className='flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left text-template-black-500 xl:pl-0'>
                  <li className='check custom-list relative my-2'>Unlimited Bandwitch</li>
                  <li className='check custom-list relative my-2'>Encrypted Connection</li>
                  <li className='check custom-list relative my-2'>No Traffic Logs</li>
                  <li className='check custom-list relative my-2'>Works on All Devices</li>
                  <li className='check custom-list relative my-2'>Connect Anyware </li>
                </ul>
                <div className='mb-8 mt-12 flex w-full flex-none flex-col justify-center'>
                  <p className='mb-4 text-center text-2xl text-template-black-600 '>
                    $9 <span className='text-template-black-500'>/ mo</span>
                  </p>
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className='flex justify-center'>
              <motion.div
                variants={scrollAnimation}
                className='flex flex-col items-center justify-center rounded-xl border-2 border-template-gray-500 px-6 py-4 lg:px-12 xl:px-20'
                whileHover={{
                  scale: 1.1,
                  transition: {
                    duration: 0.2,
                  },
                }}
              >
                <div className='mt-6 p-4 lg:mt-16 lg:p-0'>
                  <Image
                    src='/assets/images/Premium.png'
                    width={145}
                    height={165}
                    alt='Premium Plan'
                  />
                </div>
                <p className='my-2 text-lg font-medium capitalize text-template-black-600 sm:my-7'>
                  Premium Plan{' '}
                </p>
                <ul className='flex flex-grow list-inside flex-col items-start justify-start pl-6 text-left text-template-black-500 xl:pl-0'>
                  <li className='check custom-list relative my-2'>Unlimited Bandwitch</li>
                  <li className='check custom-list relative my-2'>Encrypted Connection</li>
                  <li className='check custom-list relative my-2'>No Traffic Logs</li>
                  <li className='check custom-list relative my-2'>Works on All Devices</li>
                  <li className='check custom-list relative my-2'>Connect Anyware </li>
                  <li className='check custom-list relative my-2'>Get New Features </li>
                </ul>
                <div className='mb-8 mt-12 flex w-full flex-none flex-col justify-center'>
                  <p className='mb-4 text-center text-2xl text-template-black-600 '>
                    $12 <span className='text-template-black-500'>/ mo</span>
                  </p>

                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className='my-16 flex w-full flex-col'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='mx-auto w-9/12 text-2xl font-medium leading-relaxed text-template-black-600 sm:w-6/12 sm:text-3xl lg:w-4/12 lg:text-4xl'
            >
              Huge Global Network of Fast VPN{' '}
            </motion.h3>
            <motion.p
              className='mx-auto my-2 w-10/12 leading-normal sm:w-7/12 lg:w-6/12'
              variants={scrollAnimation}
            >
              See LaslesVPN everywhere to make it easier for you when you move locations.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className='mt-16 w-full px-8 py-12' variants={scrollAnimation}>
              <Image
                className='h-auto w-full'
                src='/assets/images/HugeGlobal.svg'
                width={800}
                height={400}
                alt='Maps'
              />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className='mt-4 flex w-full flex-wrap items-center justify-evenly lg:flex-nowrap'
              variants={scrollAnimation}
            >
              {/* <Netflix className="w-auto h-18" /> */}
              <img
                src='/assets/icons/template/amazon.png'
                className='mt-4 h-14 w-auto lg:mt-2'
                alt=''
              />
              <img
                src='/assets/icons/template/netflix.png'
                className='mt-2 h-14 w-auto lg:mt-0'
                alt=''
              />
              <img
                src='/assets/icons/template/reddit.png'
                className='mt-2 h-12 w-auto lg:mt-0'
                alt=''
              />
              <img
                src='/assets/icons/template/discord.png'
                className='mt-2 h-14 w-auto lg:mt-0'
                alt=''
              />
              <img
                src='/assets/icons/template/spotify.png'
                className='mt-2 h-12 w-auto lg:mt-0'
                alt=''
              />
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className='my-16 flex w-full flex-col' id='preview'>
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className='sm: mx-auto w-9/12 text-2xl font-medium leading-normal text-template-black-600 sm:text-3xl lg:w-4/12 lg:text-4xl'
            >
              Trusted by Thousands of Happy Customer{' '}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className='mx-auto mb-2 mt-4 w-10/12 leading-normal sm:w-7/12 lg:w-6/12'
            >
              These are the stories of our customers who have joined us with great pleasure when
              using this crazy feature.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className='flex w-full flex-col py-12'>
            <motion.div variants={scrollAnimation}>
              <Preview />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className='relative mt-16 w-full'>
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className='absolute z-10 flex w-full flex-col items-center justify-between rounded-xl bg-template-white-500 px-6 py-8 sm:flex-row sm:px-12 sm:py-14 lg:px-16'>
                <div className='mb-6 flex w-10/12 flex-col text-left sm:mb-0 sm:w-7/12 lg:w-5/12'>
                  <h5 className='text-xl font-medium leading-relaxed text-template-black-600 sm:text-2xl lg:text-3xl'>
                    Subscribe Now for <br /> Get Special Features!
                  </h5>
                  <p>{t('Let subscribe with us and find the fun.', { ns: 'common' })}</p>
                </div>
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className='roudned-lg absolute left-0 right-0 top-0 mx-auto mt-8 h-60 w-11/12 bg-template-black-600 opacity-5 sm:h-56'
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

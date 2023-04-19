import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-white-300 pb-24 pt-44'>
      <div className='mx-auto grid w-full max-w-screen-xl grid-flow-row grid-cols-3 grid-rows-6 gap-4 px-6 sm:grid-flow-col sm:grid-cols-12 sm:grid-rows-1 sm:px-8 lg:px-16'>
        <div className='col-start-1 col-end-4 row-span-2 flex flex-col items-start sm:col-span-4 sm:col-end-5 '>
          <Image
            className='mb-6 h-8 w-auto'
            src='/assets/images/Logo.svg'
            alt='Logo'
            height={30}
            width={100}
          />
          <p className='mb-4'>
            <strong className='font-medium'>LaslesVPN</strong> is a private virtual network that has
            unique features and has high security.
          </p>
          <div className='-mx-2 mb-8 mt-2 flex w-full'>
            <div className='mx-2 flex items-center justify-center rounded-full bg-white-500 p-2 shadow-md'>
              <Image
                className='h-6 w-6'
                src='/assets/icon/template/facebook.svg'
                alt='facebook'
                height={30}
                width={30}
              />
            </div>
            <div className='mx-2 flex items-center justify-center rounded-full bg-white-500 p-2 shadow-md'>
              <Image
                className='h-6 w-6'
                src='/assets/icon/template/twitter.svg'
                alt='twitter'
                height={30}
                width={30}
              />
            </div>
            <div className='mx-2 flex items-center justify-center rounded-full bg-white-500 p-2 shadow-md'>
              <Image
                className='h-6 w-6'
                src='/assets/icon/template/instagram.svg'
                alt='instagram'
                height={30}
                width={30}
              />
            </div>
          </div>
          <p className='text-gray-400'>©{new Date().getFullYear()} - LaslesVPN</p>
        </div>
        <div className='row-span-2 flex flex-col sm:col-span-2 sm:col-start-7 sm:col-end-9'>
          <p className='mb-4 text-lg font-medium text-black-600'>Product</p>
          <ul className='text-black-500 '>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>Download </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>Pricing </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>Locations </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>Server </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>Countries </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>Blog </li>
          </ul>
        </div>
        <div className='row-span-2 flex flex-col sm:col-span-2 sm:col-start-9 sm:col-end-11'>
          <p className='mb-4 text-lg font-medium text-black-600'>Engage</p>
          <ul className='text-black-500'>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>
              LaslesVPN ?{' '}
            </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>FAQ </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>Tutorials </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>About Us </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>
              Privacy Policy{' '}
            </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>
              Terms of Service{' '}
            </li>
          </ul>
        </div>
        <div className='row-span-2 flex flex-col sm:col-span-2 sm:col-start-11 sm:col-end-13'>
          <p className='mb-4 text-lg font-medium text-black-600'>Earn Money</p>
          <ul className='text-black-500'>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>Affiliate </li>
            <li className='hover:text-orange-500 my-2 cursor-pointer transition-all'>
              Become Partner{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

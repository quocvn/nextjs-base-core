import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-template-white-300 pb-24 pt-44'>
      <div className='container mx-auto grid w-full grid-flow-row grid-cols-3 grid-rows-6 gap-4 px-8 sm:grid-flow-col sm:grid-cols-12 sm:grid-rows-1 xl:px-16'>
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
            <div className='mx-2 flex items-center justify-center rounded-full bg-template-white-500 p-2 shadow-md'>
              <Image
                className='h-6 w-6'
                src='/assets/icons/template/facebook.svg'
                alt='facebook'
                height={30}
                width={30}
              />
            </div>
            <div className='mx-2 flex items-center justify-center rounded-full bg-template-white-500 p-2 shadow-md'>
              <Image
                className='h-6 w-6'
                src='/assets/icons/template/twitter.svg'
                alt='twitter'
                height={30}
                width={30}
              />
            </div>
            <div className='mx-2 flex items-center justify-center rounded-full bg-template-white-500 p-2 shadow-md'>
              <Image
                className='h-6 w-6'
                src='/assets/icons/template/instagram.svg'
                alt='instagram'
                height={30}
                width={30}
              />
            </div>
          </div>
          <p className='text-template-gray-400'>©{new Date().getFullYear()} - LaslesVPN</p>
        </div>
        <div className='row-span-2 flex flex-col sm:col-span-2 sm:col-start-7 sm:col-end-9'>
          <p className='mb-4 text-lg font-medium text-template-black-600'>Product</p>
          <ul className='text-template-black-500 '>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Download{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Pricing{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Locations{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Server{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Countries{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Blog{' '}
            </li>
          </ul>
        </div>
        <div className='row-span-2 flex flex-col sm:col-span-2 sm:col-start-9 sm:col-end-11'>
          <p className='mb-4 text-lg font-medium text-template-black-600'>Engage</p>
          <ul className='text-template-black-500'>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              LaslesVPN ?{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              FAQ{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Tutorials{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              About Us{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Privacy Policy{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Terms of Service{' '}
            </li>
          </ul>
        </div>
        <div className='row-span-2 flex flex-col sm:col-span-2 sm:col-start-11 sm:col-end-13'>
          <p className='mb-4 text-lg font-medium text-template-black-600'>Earn Money</p>
          <ul className='text-template-black-500'>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Affiliate{' '}
            </li>
            <li className='my-2 cursor-pointer transition-all hover:text-template-orange-500'>
              Become Partner{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

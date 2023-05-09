import Image from 'next/image'
import Link from 'next/link'
import { signOut } from 'next-auth/react'
import React, { useState, useEffect } from 'react'
import { Link as LinkScroll } from 'react-scroll'

import ButtonOutline from 'components/ui/button/ButtonOutline'

const Header = () => {
  const [activeLink, setActiveLink] = useState<string>('')
  const [scrollActive, setScrollActive] = useState<boolean>(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20)
    })
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 z-30 w-full bg-template-white-500 transition-all ${
          scrollActive ? ' pt-0 shadow-md' : ' pt-4'
        }`}
      >
        <nav className='container mx-auto grid grid-flow-col px-8 py-3 sm:py-4 xl:px-16'>
          <div className='col-start-1 col-end-2 flex items-center'>
            <Image
              className='h-8 w-auto'
              src='/assets/images/Logo.svg'
              alt='Logo'
              height={30}
              width={100}
            />
          </div>
          <ul className='col-start-4 col-end-8 hidden items-center text-template-black-500 lg:flex'>
            <LinkScroll
              activeClass='active'
              to='about'
              spy
              smooth
              duration={1000}
              onSetActive={() => {
                setActiveLink('about')
              }}
              className={`animation-hover mx-2 inline-block cursor-pointer px-4 py-2 relative${
                activeLink === 'about'
                  ? ' animation-active text-template-orange-500 '
                  : ' a text-template-black-500 hover:text-template-orange-500'
              }`}
            >
              About
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='feature'
              spy
              smooth
              duration={1000}
              onSetActive={() => {
                setActiveLink('feature')
              }}
              className={`animation-hover mx-2 inline-block cursor-pointer px-4 py-2 relative${
                activeLink === 'feature'
                  ? ' animation-active text-template-orange-500 '
                  : ' text-template-black-500 hover:text-template-orange-500 '
              }`}
            >
              Feature
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='pricing'
              spy
              smooth
              duration={1000}
              onSetActive={() => {
                setActiveLink('pricing')
              }}
              className={`animation-hover mx-2 inline-block cursor-pointer px-4 py-2 relative${
                activeLink === 'pricing'
                  ? ' animation-active text-template-orange-500 '
                  : ' text-template-black-500 hover:text-template-orange-500 '
              }`}
            >
              Pricing
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='preview'
              spy
              smooth
              duration={1000}
              onSetActive={() => {
                setActiveLink('preview')
              }}
              className={`animation-hover mx-2 inline-block cursor-pointer px-4 py-2 relative${
                activeLink === 'preview'
                  ? ' animation-active text-template-orange-500 '
                  : ' text-template-black-500 hover:text-template-orange-500 '
              }`}
            >
              Preview
            </LinkScroll>
          </ul>
          <div className='col-start-10 col-end-12 flex items-center justify-end font-medium'>
            <Link
              href='/auth/login'
              className='mx-2 capitalize tracking-wide text-template-black-600 transition-all hover:text-template-orange-500 sm:mx-4'
            >
              Sign In
            </Link>
            <ButtonOutline onClick={() => signOut()}>Sign Out</ButtonOutline>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className='fixed bottom-0 left-0 right-0 z-20 px-4 shadow-t sm:px-8 lg:hidden '>
        <div className='bg-template-white-500 sm:px-3'>
          <ul className='flex w-full items-center justify-between text-template-black-500'>
            <LinkScroll
              activeClass='active'
              to='about'
              spy
              smooth
              duration={1000}
              onSetActive={() => {
                setActiveLink('about')
              }}
              className={`mx-1 flex flex-col items-center border-t-2 px-3 py-2 text-xs transition-all sm:mx-2 sm:px-4 ${
                activeLink === 'about'
                  ? '  border-template-orange-500 text-template-orange-500'
                  : ' border-transparent'
              }`}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              About
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='feature'
              spy
              smooth
              duration={1000}
              onSetActive={() => {
                setActiveLink('feature')
              }}
              className={`mx-1 flex flex-col items-center border-t-2 px-3 py-2 text-xs transition-all sm:mx-2 sm:px-4 ${
                activeLink === 'feature'
                  ? '  border-template-orange-500 text-template-orange-500'
                  : ' border-transparent '
              }`}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
                />
              </svg>
              Feature
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='pricing'
              spy
              smooth
              duration={1000}
              onSetActive={() => {
                setActiveLink('pricing')
              }}
              className={`mx-1 flex flex-col items-center border-t-2 px-3 py-2 text-xs transition-all sm:mx-2 sm:px-4 ${
                activeLink === 'pricing'
                  ? '  border-template-orange-500 text-template-orange-500'
                  : ' border-transparent '
              }`}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
              Pricing
            </LinkScroll>
            <LinkScroll
              activeClass='active'
              to='preview'
              spy
              smooth
              duration={1000}
              onSetActive={() => {
                setActiveLink('preview')
              }}
              className={`mx-1 flex flex-col items-center border-t-2 px-3 py-2 text-xs transition-all sm:mx-2 sm:px-4 ${
                activeLink === 'preview'
                  ? '  border-template-orange-500 text-template-orange-500'
                  : ' border-transparent '
              }`}
            >
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
                />
              </svg>
              Preview
            </LinkScroll>
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  )
}

export default Header

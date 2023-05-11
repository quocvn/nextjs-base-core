import { Col, Row } from 'antd'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const LandingPageExample = () => {
  const [scrollActive, setScrollActive] = useState<boolean>(false)

  const handleScroll = () => {
    setScrollActive(window.scrollY > 150)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <header
        className={`top-0 w-full transition-all ${
          scrollActive
            ? 'sticky z-50 animate-fadeInDown bg-white shadow-lg'
            : 'absolute left-0 right-0 top-0 z-10 bg-transparent'
        }`}
      >
        <div className='relative flex items-center justify-between px-10'>
          <div className='left-side flex items-center'>
            <Link className='logo' href='/'>
              <img
                src='https://preview.colorlib.com/theme/calvino/assets/img/logo/logo.png.webp'
                alt='Logo'
              />
            </Link>
            <nav className='ml-5'>
              <ul className='flex items-center'>
                <li className='relative mx-[14px] inline-block'>
                  <Link
                    href='/'
                    className='font animation-hover block px-[7px] py-[29px] hover:text-[#ff4495]'
                  >
                    Home
                  </Link>
                </li>
                <li className='relative mx-[14px] inline-block'>
                  <Link
                    href='/'
                    className='font animation-hover block px-[7px] py-[29px] hover:text-[#ff4495]'
                  >
                    About
                  </Link>
                </li>
                <li className='relative mx-[14px] inline-block'>
                  <Link
                    href='/'
                    className='font animation-hover block px-[7px] py-[29px] hover:text-[#ff4495]'
                  >
                    Services
                  </Link>
                </li>
                <li className='relative mx-[14px] inline-block'>
                  <Link
                    href='/'
                    className='font animation-hover block px-[7px] py-[29px] hover:text-[#ff4495]'
                  >
                    Case Study
                  </Link>
                </li>
                <li className='relative mx-[14px] inline-block'>
                  <Link
                    href='/'
                    className='font animation-hover block px-[7px] py-[29px] hover:text-[#ff4495]'
                  >
                    Blog
                  </Link>
                </li>
                <li className='relative mx-[14px] inline-block'>
                  <Link
                    href='/'
                    className='font animation-hover block px-[7px] py-[29px] hover:text-[#ff4495]'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className='right-side'>
            <button
              type='button'
              className='rounded-[25px] bg-gradient-to-b from-[#ff4495] from-0% via-[#ff6d6d] via-100% to-[#7db9e8] to-100% px-[36px] py-[11px] text-lg font-medium text-white transition-all duration-500 ease-out'
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      </header>

      <main>
        <div className='flex h-[735px] items-center bg-[url("https://preview.colorlib.com/theme/calvino/assets/img/hero/h1_hero1.png.webp")] bg-cover bg-center bg-no-repeat'>
          <div className='container mx-auto px-20'>
            <Row>
              <Col xs={8}>
                <span className='rounded-[20px] border-[1px] border-solid border-[rgba(255,68,149,0.2)] bg-white px-[18px] py-[5px] text-[#ff4495]'>
                  Digital Marketing Expert
                </span>
                <h1 className='mb-[11px] mt-5 text-[58px] font-bold'>We bring you new customers</h1>
                <p className='mb-[48px] text-xl text-[#192839]'>
                  We build effective strategies to help you reach customers and prospects across the
                  entire web.
                </p>
                <button
                  type='button'
                  className='rounded-[30px] bg-gradient-to-b from-[#ff4495] from-0% via-[#ff6d6d] via-100% to-[#7db9e8] to-100% px-[36px] py-[15px] text-lg font-medium text-white transition-all duration-500 ease-out'
                >
                  Explore Services
                </button>
              </Col>
              <Col xs={16} className='text-center' />
            </Row>
          </div>
        </div>
        <section className='relative pb-[120px]'>
          <div className='container mx-auto px-20'>
            <div className='section-tittle mx-auto mb-14 w-[29rem] text-center'>
              <span className='text-[13px] uppercase text-[#ff4495]'>Our Services</span>
              <h2 className='mb-[12px] mt-4 text-[36px] font-bold'>
                Provide Awesome Service With Our Tools
              </h2>
            </div>
            <Row>
              <Col sm={12} lg={8} xl={6}>
                <div className='group relative z-[1] mr-3 rounded-[5px] bg-white px-[21px] py-[40px] shadow-md transition-all duration-[0.4s] ease-out before:absolute before:bottom-0 before:left-0 before:-z-[1] before:h-0 before:w-full before:bg-[#192839] before:duration-[0.6s] before:content-[""] hover:text-white hover:before:h-full'>
                  <h5 className='mb-[21px] text-[22px] font-bold text-[#192839] group-hover:text-white'>
                    Discover, Explore the Product
                  </h5>
                  <div className='flex h-[78px] w-[78px] items-center justify-center rounded-[50px] bg-[#FFE1EE]'>
                    <img
                      src='https://preview.colorlib.com/theme/calvino/assets/img/icon/services1.svg'
                      alt=''
                    />
                  </div>
                  <p className='mt-[50px] text-lg text-[#192839] group-hover:text-white'>
                    Effective strategies to help you reach customers.
                  </p>
                </div>
              </Col>
              <Col sm={12} lg={8} xl={6}>
                <div className='group relative z-[1] mx-3 rounded-[5px] bg-white px-[21px] py-[40px] shadow-md transition-all duration-[0.4s] ease-out before:absolute before:bottom-0 before:left-0 before:-z-[1] before:h-0 before:w-full before:bg-[#192839] before:duration-[0.6s] before:content-[""] hover:text-white hover:before:h-full'>
                  <h5 className='mb-[21px] text-[22px] font-bold text-[#192839] group-hover:text-white'>
                    Discover, Explore the Product
                  </h5>
                  <div className='flex h-[78px] w-[78px] items-center justify-center rounded-[50px] bg-[#FFE1EE]'>
                    <img
                      src='https://preview.colorlib.com/theme/calvino/assets/img/icon/services2.svg'
                      alt=''
                    />
                  </div>
                  <p className='mt-[50px] text-lg text-[#192839] group-hover:text-white'>
                    Effective strategies to help you reach customers.
                  </p>
                </div>
              </Col>
              <Col sm={12} lg={8} xl={6}>
                <div className='group relative z-[1] mx-3 rounded-[5px] bg-white px-[21px] py-[40px] shadow-md transition-all duration-[0.4s] ease-out before:absolute before:bottom-0 before:left-0 before:-z-[1] before:h-0 before:w-full before:bg-[#192839] before:duration-[0.6s] before:content-[""] hover:text-white hover:before:h-full'>
                  <h5 className='mb-[21px] text-[22px] font-bold text-[#192839] group-hover:text-white'>
                    Discover, Explore the Product
                  </h5>
                  <div className='flex h-[78px] w-[78px] items-center justify-center rounded-[50px] bg-[#FFE1EE]'>
                    <img
                      src='https://preview.colorlib.com/theme/calvino/assets/img/icon/services3.svg'
                      alt=''
                    />
                  </div>
                  <p className='mt-[50px] text-lg text-[#192839] group-hover:text-white'>
                    Effective strategies to help you reach customers.
                  </p>
                </div>
              </Col>
              <Col sm={12} lg={8} xl={6}>
                <div className='group relative z-[1] ml-3 rounded-[5px] bg-white px-[21px] py-[40px] shadow-md transition-all duration-[0.4s] ease-out before:absolute before:bottom-0 before:left-0 before:-z-[1] before:h-0 before:w-full before:bg-[#192839] before:duration-[0.6s] before:content-[""] hover:text-white hover:before:h-full'>
                  <h5 className='mb-[21px] text-[22px] font-bold text-[#192839] group-hover:text-white'>
                    Discover, Explore the Product
                  </h5>
                  <div className='flex h-[78px] w-[78px] items-center justify-center rounded-[50px] bg-[#FFE1EE]'>
                    <img
                      src='https://preview.colorlib.com/theme/calvino/assets/img/icon/services4.svg'
                      alt=''
                    />
                  </div>
                  <p className='mt-[50px] text-lg text-[#192839] group-hover:text-white'>
                    Effective strategies to help you reach customers.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
          <div className='absolute left-[3%] top-[13%] -z-[1] block'>
            <img
              src='https://preview.colorlib.com/theme/calvino/assets/img/gallery/shape-1.png'
              alt=''
            />
          </div>
          <div className='absolute -top-[18%] right-[0%] -z-[1] block'>
            <img
              src='https://preview.colorlib.com/theme/calvino/assets/img/gallery/shape-2.png'
              alt=''
            />
          </div>
        </section>
      </main>
    </>
  )
}

export default LandingPageExample

import { Carousel, Col, Radio, Row } from 'antd'
import Image from 'next/image'
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
        <section>
          <Row className='container mx-auto px-20'>
            <Col xs={12}>
              <img
                className='w-3/4'
                src='https://preview.colorlib.com/theme/calvino/assets/img/gallery/about1.png.webp'
                alt=''
              />
            </Col>
            <Col xs={9}>
              <div className='mb-[25px]'>
                <span className='text-[13px] uppercase text-[#ff4495]'>About Us</span>
                <h2 className='mb-[12px] mt-4 text-[36px] font-bold'>
                  We Create a Steps to Build a Successful Digital Product
                </h2>
                <p className='mb-[15px] text-lg text-[#656565]'>
                  With over 50 years of combined experience, our mission is to design with your
                  values and vision in mind. We’re out to create purposeful spaces that balance art
                  and creativity with science and strategy.
                </p>
                <p className='mb-10 mt-[10px] text-lg text-[#656565]'>
                  We’re out to create purposeful spaces that balance art and creativity with science
                  and strategy.
                </p>
              </div>
              <Link
                className='relative font-semibold text-[#192839] transition-all duration-[0.3s] ease-out before:absolute before:-bottom-[11px] before:h-[2px] before:w-full before:bg-[#ff4495] before:content-[""] hover:tracking-[1px]'
                href='/'
              >
                Explore More
              </Link>
            </Col>
          </Row>
        </section>
        <section className='relative py-28'>
          <div className='container mx-auto text-center'>
            <div className='mx-20 bg-[#f8fbfe] pt-[70px]'>
              <span className='text-[13px] uppercase text-[#ff4495]'>Pricing Plan</span>
              <h2 className='mb-[12px] mt-4 text-[36px] font-bold'>
                Choose Your Best Pricing Plan
              </h2>
              <Radio.Group className='bg-white' defaultValue='Yearly' buttonStyle='solid'>
                <Radio.Button value='Yearly' className='rounded-l-[20px] uppercase'>
                  Yearly
                </Radio.Button>
                <Radio.Button value='Monthly' className='rounded-r-[20px] uppercase'>
                  Monthly
                </Radio.Button>
              </Radio.Group>
              <Row className='mt-[40px] px-[15px]'>
                <Col xs={8}>
                  <div className='single-card group mx-3 mb-[30px] px-[40px] py-[35px] text-center transition-all duration-[0.4s] ease-out hover:rounded-[15px] hover:bg-white hover:shadow-md'>
                    <div className='card-top flex flex-col items-center justify-center'>
                      <div className='cat-icon flex h-[78px] w-[78px] justify-center rounded-[50px] text-center leading-[78px] text-[#ff4495] shadow-lg'>
                        <img
                          src='https://preview.colorlib.com/theme/calvino/assets/img/icon/price1.svg'
                          alt=''
                        />
                      </div>
                      <span className='mb-[19px] mt-[13px] rounded-[20px] text-[#ff4495]'>
                        Basic
                      </span>
                    </div>
                    <div className='card-mid mb-[8px]'>
                      <h4 className='mb-[20px] text-[30px] font-bold text-[#192839]'>$ 05.00</h4>
                    </div>
                    <div className='card-bottom'>
                      <ul>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          Increase traffic 50%
                        </li>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          Social Media Marketing
                        </li>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          10 Free Optimization
                        </li>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          {' '}
                          24/7 support
                        </li>
                      </ul>
                      <button
                        type='button'
                        className='mt-[30px] rounded-[40px] bg-gradient-to-b from-[#ff4495] from-0% via-[#ff6d6d] via-100% to-[#7db9e8] to-100% px-[23px] py-[11px] text-lg font-medium text-white transition-all duration-500 ease-out group-hover:border-[1px] group-hover:border-[#ff4495] group-hover:bg-none group-hover:text-[#ff4495]'
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className='single-card group mx-3 mb-[30px] px-[40px] py-[35px] text-center transition-all duration-[0.4s] ease-out hover:rounded-[15px] hover:bg-white hover:shadow-md'>
                    <div className='card-top flex flex-col items-center justify-center'>
                      <div className='cat-icon flex h-[78px] w-[78px] justify-center rounded-[50px] text-center leading-[78px] text-[#ff4495] shadow-lg'>
                        <img
                          src='https://preview.colorlib.com/theme/calvino/assets/img/icon/price2.svg'
                          alt=''
                        />
                      </div>
                      <span className='mb-[19px] mt-[13px] rounded-[20px] text-[#ff4495]'>
                        Basic
                      </span>
                    </div>
                    <div className='card-mid mb-[8px]'>
                      <h4 className='mb-[20px] text-[30px] font-bold text-[#192839]'>$ 05.00</h4>
                    </div>
                    <div className='card-bottom'>
                      <ul>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          Increase traffic 50%
                        </li>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          Social Media Marketing
                        </li>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          10 Free Optimization
                        </li>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          {' '}
                          24/7 support
                        </li>
                      </ul>
                      <button
                        type='button'
                        className='mt-[30px] rounded-[40px] bg-gradient-to-b from-[#ff4495] from-0% via-[#ff6d6d] via-100% to-[#7db9e8] to-100% px-[23px] py-[11px] text-lg font-medium text-white transition-all duration-500 ease-out group-hover:border-[1px] group-hover:border-[#ff4495] group-hover:bg-none group-hover:text-[#ff4495]'
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </Col>
                <Col xs={8}>
                  <div className='single-card group mx-3 mb-[30px] px-[40px] py-[35px] text-center transition-all duration-[0.4s] ease-out hover:rounded-[15px] hover:bg-white hover:shadow-md'>
                    <div className='card-top flex flex-col items-center justify-center'>
                      <div className='cat-icon flex h-[78px] w-[78px] justify-center rounded-[50px] text-center leading-[78px] text-[#ff4495] shadow-lg'>
                        <img
                          src='https://preview.colorlib.com/theme/calvino/assets/img/icon/price3.svg'
                          alt=''
                        />
                      </div>
                      <span className='mb-[19px] mt-[13px] rounded-[20px] text-[#ff4495]'>
                        Basic
                      </span>
                    </div>
                    <div className='card-mid mb-[8px]'>
                      <h4 className='mb-[20px] text-[30px] font-bold text-[#192839]'>$ 05.00</h4>
                    </div>
                    <div className='card-bottom'>
                      <ul>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          Increase traffic 50%
                        </li>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          Social Media Marketing
                        </li>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          10 Free Optimization
                        </li>
                        <li className='mb-[10px] text-[18px] font-extralight text-[#192839]'>
                          {' '}
                          24/7 support
                        </li>
                      </ul>
                      <button
                        type='button'
                        className='mt-[30px] rounded-[40px] bg-gradient-to-b from-[#ff4495] from-0% via-[#ff6d6d] via-100% to-[#7db9e8] to-100% px-[23px] py-[11px] text-lg font-medium text-white transition-all duration-500 ease-out group-hover:border-[1px] group-hover:border-[#ff4495] group-hover:bg-none group-hover:text-[#ff4495]'
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <section className='pb-28'>
          <div className='container mx-auto px-20'>
            <div className='text-center'>
              <span className='text-[13px] uppercase text-[#ff4495]'>Case Study</span>
              <h2 className='mb-[12px] mt-4 text-[36px] font-bold'>Some Of Our Awesome Stuffs</h2>
            </div>

            <Carousel
              slidesToShow={3}
              slidesToScroll={1}
              infinite
              speed={500}
              autoplay
              arrows={false}
              dots={false}
              className='mt-[60px] flex items-center justify-center'
            >
              {Array.from({ length: 4 }).map((_, index: number) => {
                return (
                  <div className='relative px-3' key={index}>
                    <Image
                      className='h-[350px] w-[450px]'
                      src={`https://preview.colorlib.com/theme/calvino/assets/img/gallery/stuffs${
                        index + 1 === 4 ? 2 : index + 1
                      }.jpg.webp`}
                      alt=''
                      height={250}
                      width={250}
                    />
                    <div className='absolute bottom-10 left-10'>
                      <p className='mb-[15px] text-white'>Marketing</p>
                      <h3 className='text-[22px] font-bold text-white'>
                        Discover, Explore
                        <br /> the Product
                      </h3>
                    </div>
                  </div>
                )
              })}
            </Carousel>

            <Carousel
              slidesToShow={1}
              slidesToScroll={1}
              infinite
              speed={800}
              autoplay
              autoplaySpeed={3500}
              arrows={false}
              dots={false}
              cssEase='linear'
              className='mt-[80px]'
            >
              {Array.from({ length: 3 }).map((_, index: number) => {
                return (
                  <div className='testimonial-caption text-center' key={index}>
                    <div className='testimonial-top-cap mx-auto flex max-w-[55rem] flex-col items-center justify-center text-center'>
                      <img
                        src='https://preview.colorlib.com/theme/calvino/assets/img/gallery/t-woner.png.webp'
                        alt=''
                      />
                      <p className='mt-[50px] px-[26px] text-[25px] font-light text-[#232f55]'>
                        Even the all-powerful Pointing has no control about the blind texts it is an
                        almost un real orthographic eaque ipsa quae elit small batch freegan sed.
                        Craft beer elit seitan exercitation
                      </p>
                    </div>
                    <p className='mt-[30px] text-[18px] font-normal text-[#192839]'>
                      - Robert . Creative Director at Colorlib
                    </p>
                  </div>
                )
              })}
            </Carousel>
          </div>
        </section>
      </main>
    </>
  )
}

export default LandingPageExample

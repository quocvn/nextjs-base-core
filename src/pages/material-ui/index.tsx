import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Bars2Icon,
} from '@heroicons/react/24/outline'
import {
  Navbar,
  MobileNav,
  Typography,
  MenuItem,
  IconButton,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'

import { BlogCard } from 'components/template/material-ui/card/BlogCard'
import { BookingCard } from 'components/template/material-ui/card/BookingCard'
import { LoginCard } from 'components/template/material-ui/card/LoginCard'
import { PayFormCard } from 'components/template/material-ui/card/PayFormCard'
import { ProfileCard } from 'components/template/material-ui/card/ProfileCard'
import { SimpleFooter } from 'components/template/material-ui/footer'
import { NavListMenu } from 'components/template/material-ui/menu/NavListMenu'
import { ProfileMenu } from 'components/template/material-ui/menu/ProfileMenu'

// nav list component
const navListItems = [
  {
    label: 'Account',
    icon: UserCircleIcon,
  },
  {
    label: 'Blocks',
    icon: CubeTransparentIcon,
  },
  {
    label: 'Docs',
    icon: CodeBracketSquareIcon,
  },
]

const NavList = () => {
  return (
    <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center'>
      {/* nav list menu */}
      <NavListMenu />
      {navListItems.map(({ label, icon }) => (
        <Typography
          key={label}
          as='a'
          href='#'
          variant='small'
          color='blue-gray'
          className='font-normal'
        >
          <MenuItem className='flex items-center gap-2 lg:rounded-full'>
            {React.createElement(icon, { className: 'h-[18px] w-[18px]' })} {label}
          </MenuItem>
        </Typography>
      ))}
    </ul>
  )
}

const MaterialExample = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false)
  const [open, setOpen] = useState(1)

  const handleOpen = (value: number) => {
    setOpen(open === value ? 0 : value)
  }

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  }

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur)

  useEffect(() => {
    window.addEventListener('resize', () => window.innerWidth >= 960 && setIsNavOpen(false))
  }, [])

  return (
    <>
      <Navbar className='sticky inset-0 z-10 mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6'>
        <div className='relative mx-auto flex items-center text-blue-gray-900'>
          <Typography as='a' href='#' className='ml-2 mr-4 cursor-pointer py-1.5 font-medium'>
            Material Tailwind
          </Typography>
          <div className='absolute left-2/4 top-2/4 hidden -translate-x-2/4 -translate-y-2/4 lg:block'>
            <NavList />
          </div>
          <IconButton
            size='sm'
            color='blue-gray'
            variant='text'
            onClick={toggleIsNavOpen}
            className='ml-auto mr-2 lg:hidden'
          >
            <Bars2Icon className='h-6 w-6' />
          </IconButton>
          {/* profile menu component */}
          <ProfileMenu />
        </div>
        <MobileNav open={isNavOpen} className='overflow-scroll'>
          <NavList />
        </MobileNav>
      </Navbar>

      <div className='container mx-auto px-8'>
        <div className='py-10'>
          <Accordion open={open === 1} animate={customAnimation}>
            <AccordionHeader onClick={() => handleOpen(1)}>
              What is Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to
              express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 2} animate={customAnimation}>
            <AccordionHeader onClick={() => handleOpen(2)}>
              How to use Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to
              express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion open={open === 3} animate={customAnimation}>
            <AccordionHeader onClick={() => handleOpen(3)}>
              What can I do with Material Tailwind?
            </AccordionHeader>
            <AccordionBody>
              We&apos;re not always in the position that we want to be at. We&apos;re constantly
              growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to
              express ourselves and actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>

        <div className='grid grid-cols-1 content-center gap-5 lg:grid-cols-3'>
          <ProfileCard />
          <BookingCard />
          <BlogCard />
          <PayFormCard />
          <LoginCard />
        </div>
        {/* Footer */}
        <SimpleFooter />
      </div>
    </>
  )
}

export default MaterialExample

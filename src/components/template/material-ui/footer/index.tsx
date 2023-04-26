import { Typography } from '@material-tailwind/react'
import Image from 'next/image'

export const SimpleFooter = () => {
  return (
    <footer className='mt-10 w-full bg-white py-8'>
      <div className='flex flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 bg-white text-center md:justify-between'>
        <Image className='h-6 w-auto' src='/next.svg' alt='Next Logo' height={100} width={100} />
        <ul className='flex flex-wrap items-center gap-x-8 gap-y-2'>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as='a'
              href='#'
              color='blue-gray'
              className='font-normal transition-colors hover:text-blue-500 focus:text-blue-500'
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className='my-8 border-blue-gray-50' />
      <Typography color='blue-gray' className='text-center font-normal'>
        &copy; 2023 Material Tailwind
      </Typography>
    </footer>
  )
}

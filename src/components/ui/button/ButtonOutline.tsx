import React, { ComponentPropsWithoutRef } from 'react'

type ButtonProps = {
  children: React.ReactNode
} & ComponentPropsWithoutRef<'button'>

const ButtonOutline = (props: ButtonProps) => {
  return (
    <button
      type='button'
      className='rounded-l-full rounded-r-full border border-template-orange-500 bg-template-white-500 px-5 py-2 font-medium capitalize tracking-wide text-template-orange-500 outline-none transition-all hover:bg-template-orange-500 hover:text-template-white-500 hover:shadow-orange sm:px-8'
      {...props}
    >
      {props.children}
    </button>
  )
}

export default ButtonOutline

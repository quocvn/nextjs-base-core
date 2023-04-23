import React from 'react'

const ButtonPrimary = ({
  children,
  addClass,
}: {
  children: React.ReactNode
  addClass?: string
}) => {
  return (
    <button
      type='button'
      className={`rounded-lg bg-template-orange-500 px-12 py-3 font-semibold text-template-white-500 outline-none transition-all hover:shadow-orange-md lg:px-16 lg:py-4 ${addClass}`}
    >
      {children}
    </button>
  )
}

export default ButtonPrimary

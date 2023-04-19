const ButtonOutline = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type='button'
      className='text-orange-500 border-orange-500 hover:bg-orange-500 rounded-l-full rounded-r-full border bg-white-500 px-5 py-2 font-medium capitalize tracking-wide outline-none transition-all hover:text-white-500 hover:shadow-orange sm:px-8 '
    >
      {' '}
      {children}
    </button>
  )
}

export default ButtonOutline

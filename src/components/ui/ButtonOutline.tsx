const ButtonOutline = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type='button'
      className='px-5 py-2 font-medium tracking-wide text-orange-500 capitalize transition-all border border-orange-500 rounded-l-full rounded-r-full outline-none sm:px-8 bg-white-500 hover:bg-orange-500 hover:text-white-500 hover:shadow-orange '
    >
      {' '}
      {children}
    </button>
  )
}

export default ButtonOutline

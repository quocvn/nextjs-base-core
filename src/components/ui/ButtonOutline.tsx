const ButtonOutline = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      type='button'
      className='rounded-l-full rounded-r-full border border-template-orange-500 bg-template-white-500 px-5 py-2 font-medium capitalize tracking-wide text-template-orange-500 outline-none transition-all hover:bg-template-orange-500 hover:text-template-white-500 hover:shadow-orange sm:px-8 '
    >
      {' '}
      {children}
    </button>
  )
}

export default ButtonOutline

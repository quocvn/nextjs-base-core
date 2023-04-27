import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <section className='mx-5 my-2 flex h-screen flex-col items-center justify-center space-y-10 md:mx-0 md:my-0 md:flex-row md:space-x-16 md:space-y-0'>
      <div className='max-w-sm md:w-1/3'>
        <img
          src='https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp'
          alt='Sample'
        />
      </div>
      <div className='max-w-sm md:w-1/3'>
        <input
          className='w-full rounded border border-solid border-gray-300 px-4 py-2 text-sm'
          type='text'
          placeholder='Email Address'
        />
        <input
          className='mt-4 w-full rounded border border-solid border-gray-300 px-4 py-2 text-sm'
          type='password'
          placeholder='Password'
        />
        <div className='mt-4 flex justify-between text-sm font-semibold'>
          <label className='flex cursor-pointer text-slate-500 hover:text-slate-600'>
            <input className='mr-1' type='checkbox' />
            <span>Remember Me</span>
          </label>
          <Link
            className='text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4'
            href='/'
          >
            Forgot Password?
          </Link>
        </div>
        <div className='text-center md:text-left'>
          <button
            className='mt-4 rounded bg-blue-600 px-4 py-2 text-xs uppercase tracking-wider text-white hover:bg-blue-700'
            type='submit'
          >
            Login
          </button>
        </div>
        <div className='mt-4 text-center text-sm font-semibold text-slate-500 md:text-left'>
          Do not have an account?{' '}
          <Link className='text-red-600 hover:underline hover:underline-offset-4' href='/'>
            Register
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Login

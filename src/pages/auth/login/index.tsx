import { Form, Input, Select, Space } from 'antd'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/react'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React, { useState } from 'react'

import { ClapSpinner } from 'components/ui/spinners'

const { Option } = Select

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['login'])),
  },
})

const Login = (_props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter()
  const { t } = useTranslation('login')
  const [isLoading, setLoading] = useState<boolean>(false)

  const onSubmit = async (values: any) => {
    try {
      setLoading(true)
      const response = await signIn('credentials', {
        username: values.email,
        password: values.password,
        redirect: false,
      })

      if (response && response.ok) {
        setTimeout(() => {
          router.replace('/')
          setLoading(false)
        }, 1500)
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log('Login error: ', error)
      setLoading(false)
    }
  }

  const handleChangeLanguage = (value: string) => {
    router.replace(router.pathname, undefined, {
      locale: value,
    })
  }

  return (
    <section className='flex min-h-screen items-stretch text-white '>
      <div
        className='relative hidden w-1/2 items-center bg-gray-500 bg-cover bg-no-repeat lg:flex'
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)',
        }}
      >
        <div className='absolute inset-0 z-0 bg-black opacity-60' />
        <div className='z-10 w-full px-24'>
          <h1 className='text-left text-5xl font-bold tracking-wide'>
            {t('Keep it special', { ns: 'login' })}
          </h1>
          <p className='my-4 text-3xl'>
            {t('Capture your personal memory in unique way, anywhere.', { ns: 'login' })}
          </p>
        </div>
        <div className='absolute bottom-0 left-0 right-0 flex justify-center space-x-4 p-4 text-center'>
          <span>
            <svg
              fill='#fff'
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
            >
              <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
            </svg>
          </span>
          <span>
            <svg
              fill='#fff'
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
            >
              <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
            </svg>
          </span>
          <span>
            <svg
              fill='#fff'
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              viewBox='0 0 24 24'
            >
              <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
            </svg>
          </span>
        </div>
      </div>
      <div
        className='z-0 flex w-full items-center justify-center px-0 text-center md:px-16 lg:w-1/2'
        style={{ backgroundColor: '#161616' }}
      >
        <div
          className='absolute inset-0 z-10 items-center bg-gray-500 bg-cover bg-no-repeat lg:hidden'
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1577495508048-b635879837f1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80)',
          }}
        >
          <div className='absolute inset-0 z-0 bg-black opacity-60' />
        </div>
        <div className='absolute right-10 top-10 z-[25]'>
          <Select
            showArrow={false}
            defaultValue={router.locale}
            className='w-[135px] text-left'
            optionLabelProp='children'
            onChange={handleChangeLanguage}
          >
            <Option value='en' label='English'>
              <Space>
                <span role='img' aria-label='English'>
                  🇺🇸
                </span>
                English
              </Space>
            </Option>
            <Option value='vi' label='Vietnamese'>
              <Space>
                <span role='img' aria-label='Vietnamese'>
                  🇻🇳
                </span>
                Vietnamese
              </Space>
            </Option>
          </Select>
        </div>
        <div className='z-20 w-full py-6'>
          <h1 className='my-6'>
            <svg viewBox='0 0 247 31' className='inline-flex h-7 w-auto sm:h-8'>
              <path
                fill='rgba(99,102,241, .8)'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M25.517 0C18.712 0 14.46 3.382 12.758 10.146c2.552-3.382 5.529-4.65 8.931-3.805 1.941.482 3.329 1.882 4.864 3.432 2.502 2.524 5.398 5.445 11.722 5.445 6.804 0 11.057-3.382 12.758-10.145-2.551 3.382-5.528 4.65-8.93 3.804-1.942-.482-3.33-1.882-4.865-3.431C34.736 2.92 31.841 0 25.517 0zM12.758 15.218C5.954 15.218 1.701 18.6 0 25.364c2.552-3.382 5.529-4.65 8.93-3.805 1.942.482 3.33 1.882 4.865 3.432 2.502 2.524 5.397 5.445 11.722 5.445 6.804 0 11.057-3.381 12.758-10.145-2.552 3.382-5.529 4.65-8.931 3.805-1.941-.483-3.329-1.883-4.864-3.432-2.502-2.524-5.398-5.446-11.722-5.446z'
              />
              <path
                fill='#fff'
                fillRule='evenodd'
                clipRule='evenodd'
                d='M76.546 12.825h-4.453v8.567c0 2.285 1.508 2.249 4.453 2.106v3.463c-5.962.714-8.332-.928-8.332-5.569v-8.567H64.91V9.112h3.304V4.318l3.879-1.143v5.937h4.453v3.713zM93.52 9.112h3.878v17.849h-3.878v-2.57c-1.365 1.891-3.484 3.034-6.285 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.285 2.999V9.112zm-5.674 14.636c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm16.016-17.313c-1.364 0-2.477-1.142-2.477-2.463a2.475 2.475 0 012.477-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.879v17.849h-3.879zm8.368 0V.9h3.878v26.06h-3.878zm29.053-17.849h4.094l-5.638 17.849h-3.807l-3.735-12.03-3.771 12.03h-3.806l-5.639-17.849h4.094l3.484 12.315 3.771-12.315h3.699l3.734 12.315 3.52-12.315zm8.906-2.677c-1.365 0-2.478-1.142-2.478-2.463a2.475 2.475 0 012.478-2.463 2.475 2.475 0 012.478 2.463c0 1.32-1.113 2.463-2.478 2.463zm-1.939 20.526V9.112h3.878v17.849h-3.878zm17.812-18.313c4.022 0 6.895 2.713 6.895 7.354V26.96h-3.878V16.394c0-2.713-1.58-4.14-4.022-4.14-2.55 0-4.561 1.499-4.561 5.14v9.567h-3.879V9.112h3.879v2.285c1.185-1.856 3.124-2.749 5.566-2.749zm25.282-6.675h3.879V26.96h-3.879v-2.57c-1.364 1.892-3.483 3.034-6.284 3.034-4.884 0-8.942-4.105-8.942-9.389 0-5.318 4.058-9.388 8.942-9.388 2.801 0 4.92 1.142 6.284 2.999V1.973zm-5.674 21.775c3.232 0 5.674-2.392 5.674-5.712s-2.442-5.711-5.674-5.711-5.674 2.392-5.674 5.711c0 3.32 2.442 5.712 5.674 5.712zm22.553 3.677c-5.423 0-9.481-4.105-9.481-9.389 0-5.318 4.058-9.388 9.481-9.388 3.519 0 6.572 1.82 8.008 4.605l-3.34 1.928c-.79-1.678-2.549-2.749-4.704-2.749-3.16 0-5.566 2.392-5.566 5.604 0 3.213 2.406 5.605 5.566 5.605 2.155 0 3.914-1.107 4.776-2.749l3.34 1.892c-1.508 2.82-4.561 4.64-8.08 4.64zm14.472-13.387c0 3.249 9.661 1.285 9.661 7.89 0 3.57-3.125 5.497-7.003 5.497-3.591 0-6.177-1.607-7.326-4.177l3.34-1.927c.574 1.606 2.011 2.57 3.986 2.57 1.724 0 3.052-.571 3.052-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.909-5.462 6.572-5.462 2.945 0 5.387 1.357 6.644 3.713l-3.268 1.82c-.647-1.392-1.904-2.035-3.376-2.035-1.401 0-2.622.607-2.622 1.892zm16.556 0c0 3.249 9.66 1.285 9.66 7.89 0 3.57-3.124 5.497-7.003 5.497-3.591 0-6.176-1.607-7.326-4.177l3.34-1.927c.575 1.606 2.011 2.57 3.986 2.57 1.724 0 3.053-.571 3.053-2 0-3.176-9.66-1.391-9.66-7.781 0-3.356 2.908-5.462 6.572-5.462 2.944 0 5.386 1.357 6.643 3.713l-3.268 1.82c-.646-1.392-1.903-2.035-3.375-2.035-1.401 0-2.622.607-2.622 1.892z'
              />
            </svg>
          </h1>
          <Form
            name='loginForm'
            layout='vertical'
            className='mx-auto mt-10 w-full px-4 text-left sm:w-2/3 lg:px-0'
            initialValues={{ email: '', password: '' }}
            onFinish={onSubmit}
            autoComplete='off'
          >
            <Form.Item
              label={
                <label htmlFor='email' className='text-lg font-bold text-white'>
                  {t('Email', { ns: 'login' })}
                </label>
              }
              name='email'
              required={false}
              rules={[
                { required: true, message: `${t('Please input your email', { ns: 'login' })}` },
                { type: 'email', message: `${t('Email is invalid', { ns: 'login' })}` },
              ]}
            >
              <Input
                id='email'
                className='placeholder-white-500 mt-2 h-[50px] w-full rounded-lg border border-indigo-600 bg-black p-3 text-lg leading-none text-white'
              />
            </Form.Item>

            <Form.Item
              label={
                <label htmlFor='password' className='text-lg font-bold text-white'>
                  {t('Password', { ns: 'login' })}
                </label>
              }
              name='password'
              required={false}
              rules={[
                { required: true, message: `${t('Please input your password!', { ns: 'login' })}` },
              ]}
            >
              <Input
                id='password'
                type='password'
                className='placeholder-white-500 mt-2 h-[50px] w-full rounded-lg border border-indigo-600 bg-black p-3 text-lg leading-none text-white'
              />
            </Form.Item>

            <div className='text-right'>
              <Link href='/' className='text-[15px] text-gray-400 hover:text-gray-100'>
                {t('Forgot your password?', { ns: 'login' })}
              </Link>
            </div>
            <div className='px-4 pt-10'>
              <button
                type='submit'
                disabled={isLoading}
                className='relative block w-full rounded-full bg-indigo-600 p-4 text-lg uppercase text-white hover:bg-indigo-700 focus:outline-none disabled:cursor-not-allowed disabled:bg-indigo-400'
              >
                {isLoading && (
                  <div className='absolute left-1/4 top-1/2 -translate-y-1/2'>
                    <ClapSpinner size={20} frontColor='#fff' backColor='#fff' />
                  </div>
                )}
                {t('Sign in', { ns: 'login' })}
              </button>
            </div>
            <div className='left-0 right-0 mt-16 flex justify-center space-x-4 p-4 text-center lg:hidden '>
              <Link href='/'>
                <svg
                  fill='#fff'
                  xmlns='http://www.w3.org/2000/svg'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                >
                  <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z' />
                </svg>
              </Link>
              <Link href='/'>
                <svg
                  fill='#fff'
                  xmlns='http://www.w3.org/2000/svg'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                >
                  <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z' />
                </svg>
              </Link>
              <Link href='/'>
                <svg
                  fill='#fff'
                  xmlns='http://www.w3.org/2000/svg'
                  width={24}
                  height={24}
                  viewBox='0 0 24 24'
                >
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' />
                </svg>
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </section>
  )
}

export default Login

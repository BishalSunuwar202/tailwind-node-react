import React from 'react'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
  return (
    <>
    <MainNavigation />
    <div className='m-4 text-center'>
        <h1 className='text-lg font-bold m-4'>An error occured!</h1>
        <p>Could not find this page</p> 
    </div>
    </>
  )
}

export default ErrorPage
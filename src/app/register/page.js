import React from 'react'

export default function RegisterPage() {
  return (
   <>
    <section className='mt-8'>
      <h1 className='text-center text-red-500 text-4xl mb-4'>
        Register
      </h1>

      <form className='block max-w-sm mx-auto'>
        <input type="email" placeholder='email'/>
        <input type="password" placeholder='password'/>
        <button type="submit">Register</button>
        <div className='my-4 text-center text-gray-500'>
          or login with provider
        </div>
        <button className='flex gap-4 justify-center'>
          {/* Place a Google icon with image */}
          Login with Google
        </button>
      </form>

     

    </section>
   </>
  )
}

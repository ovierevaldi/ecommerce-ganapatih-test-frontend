import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

export default function LoginPage() {
  return (
    <div>
        <div className='mb-10'>
            <p className='text-2xl text-center py-4 font-bold'>Sign In</p>
            <p className='text-center text-sm text-gray-500'>Hi! Welcome back, you've been missed</p>
        </div>

        <div className='space-y-6'>
            <div className=''>
                <p className='text-sm mb-2'>Email</p>
                <Input type="email" placeholder="example@gmail.com" className='rounded-full'/>
            </div>

            <div className='text-sm'>
                <p className='text-sm mb-2'>Password</p>
                <Input type="password" placeholder="********" className='rounded-full'/>
            </div>

            <div className=''>
                <p className='text-right text-primary text-sm'>Forgot Password</p>
            </div>
            <Button className='w-full rounded-full py-5'>Sign In</Button>
        </div>

            <p className='text-center text-sm mt-10 text-gray-500'>Dont have account? <Link href={''} className='underline text-primary'>Sign Up</Link></p>
    </div>
  )
}

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import Link from 'next/link'
import React from 'react'

export default function SignUpPage() {
  return (
    <div>
        <div className='mb-10'>
            <p className='text-2xl text-center py-4 font-bold'>Create Account</p>
            <p className='text-center text-sm text-gray-500'>Fill your information below or register with your social account</p>
        </div>

        <div className='space-y-5'>
            <div className=''>
                <p className='text-sm mb-2'>Name</p>
                <Input type="text" placeholder="John Doe" className='rounded-full'/>
            </div>

            <div className=''>
                <p className='text-sm mb-2'>Email</p>
                <Input type="email" placeholder="example@gmail.com" className='rounded-full'/>
            </div>

            <div className='text-sm'>
                <p className='text-sm mb-2'>Password</p>
                <Input type="password" placeholder="********" className='rounded-full'/>
            </div>

            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    Accept with <span className='underline text-primary'>Terms and Conditions</span>
                </label>
            </div>
        </div>
        <Button className='w-full rounded-full py-5 mt-10'>Sign Up</Button>
    </div>
  )
}

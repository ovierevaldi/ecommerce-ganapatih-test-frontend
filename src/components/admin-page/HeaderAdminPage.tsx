// Icons
import userIcon from '@/../public/icons/user.svg'
import powerIcon from '@/../public/icons/power.svg'

import React from 'react'
import Image from 'next/image'

// Components
import { Button } from '../ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function HeaderAdminPage() {
  return (
    <div className='grid grid-cols-3 items-center border-b'>
      <div className='col-span-1'>

      </div>
      <p className='text-4xl text-center p-5 font-semibold col-span-1'>Admin Page</p>

      <div className='col-span-1 text-right pr-4'>
        <DropdownMenu>
          <DropdownMenuTrigger> 
          <Button className='p-6' variant='outline'>
            <Image src={userIcon} width={25} alt='account icon'/> <span> Username</span>
          </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='min-w-[180px] -translate-x-4'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className='p-2'>
            <Button className='flex justify-between w-full' variant='ghost'>
            <span> Log Out</span> <Image src={powerIcon} width={20} alt='account icon'/> 
            </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  ) 
}

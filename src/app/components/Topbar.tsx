import { Link } from '@nextui-org/react'
import { Clock, LocateIcon, Phone } from 'lucide-react'
import React from 'react'
import SocialIcons from './SocialIcons'

const Topbar = () => {
    return (
        <div className='bg-black w-full p-2'>

            <div className="container mx-auto flex justify-between text-white text-xs">
                <div className='flex gap-6'>
                    <Link href='#' className='flex items-center gap-2'>
                        <Phone className='h-6 w-6' /><span>+38 (050) 12 34 567</span>
                    </Link>
                    <Link href='#' className='hidden sm:flex items-center gap-2'>
                        <LocateIcon className='h-6 w-6' /><span> Ukraine, Kyiv,Khreshchatyk</span>
                    </Link>
                    <Link href='#' className='hidden sm:flex items-center gap-2'>
                        <Clock className='h-6 w-6' /><span> All week 24/7</span>
                    </Link>

                  

                </div>
                <SocialIcons />
            </div>
        </div>
    )
}

export default Topbar

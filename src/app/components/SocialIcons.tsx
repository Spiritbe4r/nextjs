import { Link } from '@nextui-org/react'
import { Facebook, FacebookIcon, Instagram, LucideFacebook, LucideInstagram, LucideLinkedin, Twitter } from 'lucide-react'
import React from 'react'



const SocialIcons = (props: any) => {
    return (
        <div className='flex gap-4' {...props}>
            <Link href="#">  <LucideFacebook className='h-6 w-6' /></Link>
            <Link href="#">  <Twitter className='h-6 w-6' /></Link>
            <Link href="#">  <LucideInstagram className='h-6 w-6' /></Link>
            <Link href="#">  <LucideLinkedin className='h-6 w-6' /></Link>

        </div>
    )
}

export default SocialIcons
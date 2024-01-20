import React from 'react'
import { Menu, Button, Link } from '@nextui-org/react';
import Image from 'next/image';
import { Globe2, Search, ShoppingBag, User2 } from 'lucide-react';


const Header = () => {
    return (
        // <header className="flex w-full justify-between items-center space-x-4 border-b-2 border-black p-4">
        <header className="flex w-full justify-between items-center space-x-4 border-b-2 p-4  border-gray-200">
            <div className="mt-4 mb-4">
                {/* Contenido del componente */}
                <Image src={'logo.svg'} alt={''} width={100} height={100}/>
            </div>


            <nav>
                <ul className="flex space-x-4 gap-8">
                    <li><Link href="/about" className="hover:underline">About Us</Link></li>
                    <li><Link href="/women" className="hover:underline">Women</Link></li>
                    <li><Link href="/men" className="hover:underline">Men</Link></li>
                    <li><Link href="/accessories" className="hover:underline">Accessories</Link></li>
                    <li><Link href="/blog" className="hover:underline">Blog</Link></li>
                    <li><Link href="/contact" className="hover:underline">Contact</Link></li>
                </ul>
            </nav>
            <div className='ecommerce-menu'>
                <ul className="flex space-x-4 gap-6">
                    <li><Link href="/about" className="hover:underline"><Search/></Link></li>
                    <li><Link href="/about" className="hover:underline"><Globe2/></Link></li>
                    <li><Link href="/about" className="hover:underline"><User2/></Link></li>
                    <li><Link href="/about" className="hover:underline"><ShoppingBag/></Link></li>
                </ul>
            </div>

        </header>
    )
}

export default Header
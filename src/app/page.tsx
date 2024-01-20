"use client"

import { Button, Link } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Header from './components/Header';
import Topbar from './components/Topbar';
import Image from 'next/image';
import { slugify } from '@/utils/slugify';

type Categories = "electronics" | "jewelery" | "men's clothing" | "womens's clothing";

type Props = {
  products: any[];
  categories: Categories[]
}



type Product = {
  id: number,
  title: string,
  price: number;
  description: number;
  category: number;
  image: string;
  rating: {
    count: number;
    rate: number;
  }
}
type Rating = Product['rating'];

const getProducts = async (): Promise<Product[]> => {
  const { data } = await axios.get<Product[]>('https://fakestoreapi.com/products')
  return data;
}


const getCategories = async (): Promise<Categories[]> => {
  const { data } = await axios.get<Categories[]>('https://fakestoreapi.com/products/categories')
  return data;
}

export default function Home() {

  const { data: products = [] } = useQuery({ queryKey: ['products'], queryFn: getProducts })
  const { data: categories = [] } = useQuery({ queryKey: ['categories'], queryFn: getCategories })



  const areaClasses: { [key: string]: string } = {
    cat1: 'md:col-span-2 md:row-span-2',
    cat2: '',
    cat3: '',
    cat4: 'md:col-span-2',
  };

  return (
    <main>
      <Topbar />
      <Header />
      {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"> */}
      <div className="grid grid-cols-2 grid-rows-3 gap-2 md:grid-cols-3 md:grid-rows-2 md:gap-4 lg:gap-8">
        {categories.map((cat, index) => {
          const slug = slugify(cat); // Ensure you have a 'slugify' function or package
          const imageUrl = `/pic-categories-${slug}.jpg`;

          // Define the area names based on the index
          const areaClasses = {
            'cat1': 'md:col-span-2 md:row-span-2',
            'cat2': '',
            'cat3': '',
            'cat4': 'md:col-span-2'
          };

          // Conditional classes for different categories based on their index

          const key = `cat${index + 1}`;
          const gridAreaClass = key in areaClasses ? areaClasses[key as keyof typeof areaClasses] : '';

          return (
            <Link href={`/category/${cat}`} key={index} className={`relative block w-full h-full ${gridAreaClass}`}>
              <a className="w-full h-full relative font-medium text-lg md:text-xl">
                <Image src={imageUrl} alt={''} width={200} height={200} />
                <div className="flex items-center justify-center absolute inset-0">
                  <span className="text-white text-center">{cat}</span> {/* CenteredLabel equivalent */}
                </div>
              </a>
            </Link>
          );
        })}
      </div>



      {/* <ol>
        {
          products.map(product => {
            return <li className='font-inter' key={product.id}> {product.title}</li>
          })
        }
      </ol> */}



    </main>
  )
}

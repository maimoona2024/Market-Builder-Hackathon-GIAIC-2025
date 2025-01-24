import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { BsFacebook } from 'react-icons/bs';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import Header from '@/app/components/header';
import { urlFor } from '@/sanity/lib/image';
const ProductDetails = ({product}:{product:Product}) => {
  return (
    <div>
        <div className="max-w-screen-2xl container mx-auto pb-8 px-4">
            <Header />
            <nav className="text-gray-700 text-xl flex items-center space-x-2">
                <Link href="/" className="font-bold hover:underline">
                    Home
                </Link>
                <span className="font-bold">{'>'}</span>
                <Link href="/shop" className="hover:underline">
                    Shop
                </Link>
                <span className="font-bold">{'>'}</span>
                <span>{product.name}</span>
            </nav>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div>
                    <Image
                        src={urlFor(product.image).url()}
                        alt={product.name}
                        height={500}
                        width={400}
                        className="w-full mt-4 rounded-lg"
                    />
    </div>


                <div>
                    <h3 className="text-2xl font-medium">{product.name}</h3>
                    <p className="text-xl text-gray-500">{product.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                        <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                        <span className="text-gray-700">(5 Customer Reviews)</span>
                    </div>
                    <p className="mt-4 text-gray-700">
                    {product.description}
                    </p>

                    <div className="mt-4">
                        <h4 className="font-semibold">Size</h4>
                        </div>
                    </div>

                    <div className="mt-4">
                        <h4 className="font-semibold">Color</h4>
                        
                    </div>

                    <div className="flex items-center gap-4 mt-6">
                        <div className="flex items-center border p-2 gap-4">
                            <button>-</button>
                            <span>1</span>
                            <button>+</button>
                        </div>
                        <button className="bg-primary text-white px-6 py-2 rounded hover:bg-opacity-90">
                            Add To Cart
                        </button>
                    </div>

                    <hr className="my-6" />

                    <div>
                        <div className="flex justify-between">
                            <span>SKU:</span>
                            <span>SS001</span>
                        </div>
                        <div className="flex justify-between">
                            <span>{product.category}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Tags:</span>
                            <span>Sofa, Chair, Home, Shop</span>
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span>Share:</span>
                            <div className="flex space-x-2">
                                <BsFacebook className="text-blue-600 cursor-pointer" />
                                <FaLinkedin className="text-blue-700 cursor-pointer" />
                                <FaTwitter className="text-blue-400 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductDetails
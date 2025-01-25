import Header from '@/app/components/header'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import product from '@/sanity/schemaTypes/product'
import React from 'react'
import Image from 'next/image'
const page = async({params:{id}}:{params:{id:string}}) => {
    const query = `*[_type == "product" && _id == $id]{
    name,
    price,
    description,
    category,
    "image":image.asset._ref,
    "id":_id
    }[0]`

    const product:Product | null = await client.fetch(query, {id})

    if(!product){
        return(
            <div>
                <h1>Sorry! Product not found.</h1>
            </div>
        )
    }
  return (
    <div key={product.id}>
        <div className="overflow-x-hidden">
      {/* Updated Header with better responsiveness */}
      <Header />
      
      <div className="flex flex-col lg:flex-row gap-8 mt-8">
                {/* Left Side: Small Images */}
                <div
              key={product.id}
              className="flex flex-col text-left h-[250px] w-[150px] sm:h-[300px] sm:w-[300px]"
            >
              <Image
                src={urlFor(product.image).url()}
                alt={product.name}
                height={300}
                width={300}
                className="rounded-lg object-cover"
              />
              
            </div>

          {/* Right Side: Product Details */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl sm:text-2xl font-medium">{product.name}</h3>
            <p className="text-lg sm:text-xl text-gray-500">{product.price}</p>
            <div className="flex items-center space-x-2 mt-2">
              <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              <span className="text-gray-700 text-sm sm:text-base">(5 Customer Reviews)</span>
            </div>
            <p className="mt-4 text-gray-700 text-sm sm:text-base">
             {product.description}
            </p>

            {/* Size Options */}
            

            {/* Color Options */}
            

            {/* Quantity and Add to Cart */}
            <div className="flex items-center gap-4 mt-6 flex-wrap">
              <div className="flex items-center border p-2 gap-4">
                <button aria-label="Decrease quantity">-</button>
                <span>1</span>
                <button aria-label="Increase quantity">+</button>
              </div>
              
            </div>

            <hr className="my-6" />

            {/* Additional Information */}
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>SKU:</span>
                <span>SS001</span>
              </div>
              <div className="flex justify-between">
                <span>Category:</span>
                <span>{product.category}</span>
              </div>
              <div className="flex justify-between">
                <span>Tags:</span>
                <span>Sofa, Chair, Home, Shop</span>
              </div>
              <div className="flex justify-between items-center mt-4">
                <span>Share:</span>
                
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8" />

        {/* Description Section */}
        <div>
          <h3 className="text-xl sm:text-2xl font-medium my-10 flex justify-center space-x-8">
            <span>Description</span>
            <span className="text-gray-400">Additional Information</span>
            <span className="text-gray-400">Reviews [5]</span>
          </h3>
          <p className="text-sm sm:text-base leading-6">
            
            {product.description}
          </p>
        </div>

        {/* Related Products */}
        <h2 className="text-2xl sm:text-3xl font-medium mt-8">
          Related Products
        </h2>
        
            
         
        </div>
   </div>  
  )
}

export default page
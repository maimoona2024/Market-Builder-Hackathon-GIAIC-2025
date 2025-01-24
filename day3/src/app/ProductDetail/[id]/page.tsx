import ProductDetails from '@/app/components/productDetails';
import { client } from '@/sanity/lib/client';
import React from 'react';

async function fetchProductById(id: string): Promise<Product | null> {
  const query = `*[_type == "product" && _id == $id]{
    category,
    _id,
    price,
    description,
    stockLevel,
    imagePath,
    discountPercentage,
    isFeaturedProduct,
    name,
    "image": image.asset._ref
  }[0]`;
  const product = await client.fetch(query, { id });
  return product;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <ProductDetails product={product} />
    </div>
  );
};

export default ProductDetail;

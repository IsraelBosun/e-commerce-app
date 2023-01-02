import React from 'react'
import Link from "next/link"; //use to link to the product details page


import { urlFor } from '../lib/client';    // to get the image url from our sanity dashboar

const product = ({product:{image, name, slug, price} }) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='product-card'>
          <img 
          src={urlFor(image && image[0])} alt="headphone"
          width={250}
          height ={250}
          className = "product-image"
          />
        <p className='product-name'>{name}</p>
        <p className='product-price'>${price}</p>
        </div>
      </Link>
    </div>
  )
}

export default product
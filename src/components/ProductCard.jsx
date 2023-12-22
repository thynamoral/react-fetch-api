import React from 'react'

const ProductCard = (props) => {
    const { img, title, price, category } = props;
  return (
    <div className='product-card'>
        <img
            src={img}
            alt={title}
            className="product-card-img"
            loading="lazy"
        />
        <div className="product-card-info">
              <p className='product-title'><strong>{title.split(" ").slice(0,3).join(" ")}</strong></p>
              <p className="product-price">${price}</p>
              <p className="product-category">{category}</p>  
        </div>
    </div>
  )
}

export default ProductCard
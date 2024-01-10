const ProductCard = (props) => {
  const { image, title, price, category } = props;
  return (
    <div className="product-card">
      <img
        src={image}
        alt={title}
        className="product-card-img"
        loading="lazy"
      />
      <div className="product-card-info">
        <p className="product-title">{title}</p>
        <p className="product-price">${price}</p>
        <p className="product-category">{category}</p>
      </div>
    </div>
  );
};

export default ProductCard;

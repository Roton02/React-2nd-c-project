import PropTypes from 'prop-types';
const SingleProduct = ({products,cartsdata}) => {
    // console.log(cartsdata);
    const {description, image, price, title} = products;
    return (
        <div className="card  bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl w-36" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title.slice(0, 20)}</h2>
    <p>{description.slice(0,65)}</p>
    <div className="flex justify-between items-center ">
        <p className="text-xl font-bold">price: {price} $</p>
      <button onClick={()=>cartsdata(products, products.id)} className="btn btn-primary ml-20">Add to cart</button>
    </div>
  </div>
</div>
    );
};

export default SingleProduct;
SingleProduct.propTypes={
    products:PropTypes.object,
    cartsdata:PropTypes.func,
    id:PropTypes.string
}
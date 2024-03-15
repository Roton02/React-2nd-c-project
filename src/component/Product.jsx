import { useEffect } from "react";
import { useState } from "react";
import SingleProduct from "./SingleProduct";
import PropTypes from 'prop-types';
const Product = ({cartsdata}) => {
    const [products, setProducts]=useState([])
    useEffect(()=>{
        fetch('product.json')
        .then((res) => res.json())
        .then(data => setProducts(data))
    }, [])
    // console.log(products);
    return (
        <div className=" w-2/3 grid grid-cols-2 gap-5">
            
        {
            products.map(p => <SingleProduct 
                key={p.id}
                cartsdata={cartsdata}
                 products={p}>
                 </SingleProduct>)
        }

        </div>

    );
};

export default Product;
Product.propTypes={
    cartsdata:PropTypes.object,
    id:PropTypes.number
}
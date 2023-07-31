import React from 'react';
import Loading from '../Loading/Loading';

const ProductDetails = ({ product }) => {
    // const { item_imgs, title, price, pic_url, num_iid, orginal_price } = product;
    return (
        <>
            {
                product && <div className='w-full flex justify-center items-center pt-7'>
                    <div className="flex flex-col md:flex-row gap-3 w-2/3 h-96 bg-base-100 shadow-xl">
                        <div className='w-full md:w-2/5 mx-auto'>
                            <img className='w-full h-full' src={product?.pic_url} alt={product?.pic_url} />
                        </div>
                        <div className="w-full md:w-3/5 mx-auto p-5">
                            <h2 className="card-title">{product?.title}</h2>
                            <p>Price: {product?.price}</p>
                            <p>num_iid: {product?.num_iid}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default ProductDetails;
import React, { useEffect, useState } from 'react';
import AddProductLink from '../../Components/AddProductLink/AddProductLink';
import { FaAngleDoubleDown } from 'react-icons/fa';
import ProductDetails from '../../Components/ProductDetails/ProductDetails';
import Loading from '../../Components/Loading/Loading';
const Home = () => {
    const [itemID, setItemID] = useState(null);
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(false);


    console.log("Item ID", itemID);

    const apiKey = 'd5227a4d75d4e397254e059c2b1bf982';
    const apiUrl = `https://www.lovbuy.com/1688api/getproductinfo.php?key=${apiKey}&item_id=${itemID}&lang=en`;

    useEffect(() => {
        setLoading(true);
        // Fetch data using the GET method
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => {
                setProductData(data);
                setLoading(false);
            })

            .catch((error) => console.error('Error fetching data:', error));
    }, [apiUrl]);


    console.log(productData);

    const product = productData && productData?.productinfo;

    console.log("product", product);

    return (
        <div className='w-full h-full'>
            <AddProductLink setItemID={setItemID} />

            <h3 className="text-rose-600 font-semibold text-center text-3xl flex gap-2 items-center justify-center">Deatils About This Product <FaAngleDoubleDown /></h3>

            {
                loading ? <Loading /> : <ProductDetails product={product} />
            }

        </div>
    );
};

export default Home;
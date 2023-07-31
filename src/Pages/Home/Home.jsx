import React, { useEffect, useState } from 'react';
import AddProductLink from '../../Components/AddProductLink/AddProductLink';

const Home = () => {
    const [itemID, setItemID] = useState();
    const [productData, setProductData] = useState(null);


    console.log("Item ID", itemID);

    const apiKey = 'd5227a4d75d4e397254e059c2b1bf982';
    const apiUrl = `https://www.lovbuy.com/1688api/getproductinfo.php?key=${apiKey}&item_id=${itemID}&lang=en`;

    useEffect(() => {
        // Fetch data using the GET method
        fetch(apiUrl)
            .then((response) => response.json())
            .then((data) => setProductData(data))
            .catch((error) => console.error('Error fetching data:', error));
    }, [apiUrl]);

    console.log(productData);

    return (
        <div className='w-full h-full'>
            <AddProductLink setItemID={setItemID} />

            <h3 className="text-rose-600 font-bold text-center text-7xl">This is Home Page</h3>
        </div>
    );
};

export default Home;
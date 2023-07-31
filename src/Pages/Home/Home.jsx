import React, { useState } from 'react';
import AddProductLink from '../../Components/AddProductLink/AddProductLink';

const Home = () => {
const [itemID, setItemID] = useState();

    // console.log("Item ID", itemId);
    return (
        <div className='w-full h-full'>
            <AddProductLink itemID={itemID} setItemID={setItemID} />

            <h3 className="text-rose-600 font-bold text-center text-7xl">This is Home Page</h3>
        </div>
    );
};

export default Home;
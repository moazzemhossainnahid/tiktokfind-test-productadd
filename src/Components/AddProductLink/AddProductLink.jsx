import React from 'react';

const AddProductLink = ({ setItemID }) => {
    const link = 'https://detail.1688.com/offer/664956936566.html';

    // Extract the item ID from the link using the split() method
    // const itemId = link.split('/').pop().replace('.html', '');

    const getId = (e) => {
        e.preventDefault();

        const itemid = e.target.itemlink.value;
        // Extract the item ID from the link using the split() method
        const extId = link.split('/').pop().replace('.html', '');
        // console.log(itemid);
        // console.log(extId);
        setItemID(extId);

    };

    return (
        <div className='w-full py-7'>
            <h3 className="pb-5 text-3xl text-center text-gray-600">Enter Product Details URL</h3>
            <form className='w-full flex gap-3 justify-center items-center' onSubmit={getId} action="">
                <input name='itemlink' type="text" placeholder="Type here" className="input input-bordered w-full max-w-md rounded" />
                <button type='submit' className="btn btn-outline btn-info rounded">Get Info</button>
            </form>
        </div>
    );
};

export default AddProductLink;
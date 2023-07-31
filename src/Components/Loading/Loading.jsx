import React from 'react';
import { PuffLoader } from 'react-spinners';

const Loading = () => {
    return (
        <div className='w-full mx-auto flex justify-center items-center py-10'>
            <PuffLoader color="#36d7b7" />
        </div>
    );
};

export default Loading;
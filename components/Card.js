import React from 'react';
import Image from 'next/image'

const Card = () => {
    return (
        <div className='w-[300px] h-[400px] bg-blue-100 rounded-3xl '>
            <div>
                <Image src={'/Visual-1.jpg'} alt='image carousel' height={'400'} width={'300'} />
            </div>
            <div className='px-2'>
                <h3 className='mt-3 text-xl font-medium '> Highly Extensible </h3>
                <p className='mt-2 text-xs text-black/75  '> Lorem ipsum dolor sit amet, consectetur adipiscing  elit. Semper a nunc sit ac mi. Auctor risus erat fauci. </p>
                <a className='mt-3 text-xs font-bold capitalize ' href='#'> read more  </a>
            </div>

        </div>
    );
}

export default Card;

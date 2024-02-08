import React from 'react';
import Heading from '../Layout/Heading';
import ReviewCard from '../Layout/ReviewCard';
import img1 from '../assets/images/pic1.png';
import img2 from '../assets/images/pic2.png';
import img3 from '../assets/images/pic3.png';

const Reviews = () => {
    return (
        <div className='min-h-[80vh] flex flex-col items-center justify-center md:px-32 px-5'>
            <Heading title1='Our' title2='Reviews'></Heading>

            <div className='flex flex-col md:flex-row gap-5 mt-5'>
                <ReviewCard img={img1}></ReviewCard>
                <ReviewCard img={img2}></ReviewCard>
                <ReviewCard img={img3}></ReviewCard>
            </div>
        </div>
    );
};

export default Reviews;
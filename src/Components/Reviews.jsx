import React from 'react';
import Heading from '../Layout/Heading';
import ReviewCard from '../Layout/ReviewCard';
import img1 from '../assets/images/pic1.png';
import img2 from '../assets/images/pic2.png';
import img3 from '../assets/images/pic3.png';

const Reviews = () => {
    return (
        <div>
            <Heading title1='Our' title2='Reviews'></Heading>

            <div>
                <ReviewCard img={img1}></ReviewCard>
                <ReviewCard img={img2}></ReviewCard>
                <ReviewCard img={img3}></ReviewCard>
            </div>
        </div>
    );
};

export default Reviews;
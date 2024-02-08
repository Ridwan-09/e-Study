import React from 'react';
import Heading from '../Layout/Heading';
import ReviewCard from '../Layout/ReviewCard';
import img from '../assets/images/pic1'

const Reviews = () => {
    return (
        <div>
            <Heading title1='Our' title2='Reviews'></Heading>

            <div>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </div>
        </div>
    );
};

export default Reviews;
import React from 'react';
import { Link } from 'react-scroll';
import Button from '../Layout/Button';

const Home = () => {
    return (
        <div>
            <div>
                <h2>Knowledge With</h2>
                <span>eStudy</span>

                <p>
                    eStudy is your gateway to a world of limitless learning possibilities. With our cutting-edge eLearning platform, you can explore a vast library of courses, from academic subjects to practical skills, all designed to help you achieve your goals
                </p>

                <Link to="contact" spy={true} smooth={true} duration={500}>
                    <Button></Button>
                </Link>
            </div>
        </div>
    );
};

export default Home;
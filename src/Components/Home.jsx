import { Link } from 'react-scroll';
import Button from '../Layout/Button';
import img from '../assets/hero.svg';

const Home = () => {
    return (
        <div className='min-h-[70vh] flex flex-col md:flex-row md:justify-between items-center md:mx-32 mx-5 mt-10'>
            <div className='md:w-2/4 text-center'>
                <h2 className='text-6xl font-bold leading-tight'>Knowledge With</h2>
                <span className='text-brightGreen text-3xl font-bold'>eStudy</span>

                <p className='text-lightText mt-5 text-start'>
                    eStudy is your gateway to a world of limitless learning possibilities. With our cutting-edge eLearning platform, you can explore a vast library of courses, from academic subjects to practical skills, all designed to help you achieve your goals
                </p>

                <Link to="contact" spy={true} smooth={true} duration={500}>
                    <Button title='Contact Us'></Button>
                </Link>
            </div>

            <div className='w-full md:m-2/4'>
                <img src={img} alt="img" />
            </div>
        </div>
    );
};

export default Home;
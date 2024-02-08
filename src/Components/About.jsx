import img from '../assets/about.svg'
import { Link } from 'react-scroll';
import Button from '../Layout/Button';
import Heading from '../Layout/Heading';

const About = () => {
    return (
        <div className='md:min-h-screen flex flex-col-reverse md:flex-row items-center gap-5 md:mx-32 mx-5 mt-14'>
            <div className='w-full md:m-2/4'>
                <img src={img} alt="img" />
            </div>

            <div className='w-full md:m-2/4 text-center space-y-2'>
                <Heading title1='About' title2='Us?'></Heading>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias numquam repellendus, placeat ea, facilis facere maxime reprehenderit sapiente sunt quas quaerat ratione aperiam. Harum enim saepe sunt recusandae excepturi nulla.
                </p>

                <Link to='contact' spy={true} smooth={true} duration={500}>
                    <Button title='Contact Us'></Button>
                </Link>
            </div>
        </div>
    );
};

export default About;
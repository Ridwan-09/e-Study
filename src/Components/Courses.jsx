import Heading from '../Layout/Heading';
import webImg from '../assets/web-dev.svg';
import appImg from '../assets/App-dev.svg';
import graphicImg from '../assets/graphic.svg';
import digitalImg from '../assets/digital.svg';
import CoursesCard from '../Layout/CoursesCard';

const Courses = () => {
    return (
        <div className='min-h-screen flex flex-col items-center md:px-32 px-5 my-10'>
            <Heading title1='Our' title2='Courses'></Heading>

            <div className='flex flex-wrap justify-center gap-6 mt-6'>
                <CoursesCard img={webImg} title='Web Development'></CoursesCard>
                <CoursesCard img={appImg} title='App Development'></CoursesCard>
                <CoursesCard img={graphicImg} title='Graphic Designing'></CoursesCard>
                <CoursesCard img={digitalImg} title='Digital Marketing'></CoursesCard>
            </div>

        </div>
    );
};

export default Courses;
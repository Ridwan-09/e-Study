import React from 'react';
import Heading from '../Layout/Heading';

const Contact = () => {
    return (
        <div>
            <Heading title1='Contact' title2='Us'></Heading>

            <div>
                <form>
                    <div>
                        <label htmlFor="userName">Your Name</label>
                        <input
                            className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                            type='text'
                            name='userName'
                            id='userName'
                            placeholder='enter your name' />
                    </div>
                    <div>
                        <label htmlFor="userEmail">Your Email</label>
                        <input
                            className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                            type='text'
                            name='userEmail'
                            id='userEmail'
                            placeholder='enter your email' />
                    </div>
                    <div>
                        <label htmlFor="userNumber">Your Number</label>
                        <input
                            className='py-3 px-2 rounded-lg hover:shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transition-all'
                            type='text'
                            name='userNumber'
                            id='userNumber'
                            placeholder='enter your Number' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;
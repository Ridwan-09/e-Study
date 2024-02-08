const Heading = (props) => {
    return (
        <div>
            <h3 className='text-6xl font-bold'>
                {props.title1}
                <span className='text-6xl font-bold text-brightGreen'> {props.title2} </span>
            </h3>
            

        </div>
    );
};

export default Heading;
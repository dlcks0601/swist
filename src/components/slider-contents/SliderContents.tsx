import sampleImg from '@/assets/images/sampleimg.jpg';

const SliderContents = () => {
    return (
        <div
            className='w-full h-[30vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] bg-cover bg-center'
            style={{ backgroundImage: `url(${sampleImg})` }}
        ></div>
    );
};

export default SliderContents;

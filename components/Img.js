import Image from 'next/image';

const Img = () => {
    return (
        <div className="home__img">
            <Image src="/jb.png" alt="Picture of Julia" 
                width={400} height={345} 
                layout='fill'
                quality={80}
                />
        </div>
        
    );
};

export default Img;

// 
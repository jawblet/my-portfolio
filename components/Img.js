import Image from 'next/image';

const Img = () => {
    return (
        <div className="img">
            <Image src="/jb.png" alt="Picture of Julia" 
                width={400} height={345} 
                quality={100}
                />
        </div>
        
    );
};

export default Img;
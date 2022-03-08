import Image from 'next/image';
import styles from "../styles/Banner.module.scss";

const Img = () => {
    return (
    <Image src="/jb.png" alt="Picture of Julia" 
        quality={80}
        layout="fill"
        className={styles.image}
        objectFit="scale-down"
        />                
    );
};

export default Img;

// 
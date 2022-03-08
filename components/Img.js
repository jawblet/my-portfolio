import { useEffect, useState } from 'react'
import Image from 'next/image';
import styles from "../styles/Banner.module.scss";
import useTimeout from '../utils/useTimeout'

const time = 1500;

const Img = ({setImg}) => {
    const [hasTimeElapsed, setHasTimeElapsed] = useState(false);
  
    useTimeout(() => {
      setHasTimeElapsed(true);
    }, time);

    useEffect(() => {
      hasTimeElapsed && setImg(null);
  }, [hasTimeElapsed]);

    return (
    <Image src="/jb.png" alt="Picture of Julia" 
        quality={80}
        width={200}
        height={300}
        objectFit="contain"
        className={styles.image}
        />                
    );
};

export default Img;

// 
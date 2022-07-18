import { useState } from "react";
import styles from "../styles/Images.module.scss";
import Image from 'next/image';
import SwitchFade from './SwitchFade';

const ImageGallery = ({imgs}) => {
    const [index, setIndex] = useState(0);

    return(
    <div className={styles.gallery}>
        <SwitchFade switch={index}>
            <Image src={imgs[index]} className={styles.fade}/>   
        </SwitchFade>
        
        <div className={styles.gallery_lower}>
        {imgs.map((el, i) => 
         {return <div key={i} className={index == i ? styles.photo_active : styles.photo} 
                    onClick={() => setIndex(i)}>
                <Image src={el}/>
            </div>}
            )}
        </div>
    </div>)
}

export default ImageGallery;
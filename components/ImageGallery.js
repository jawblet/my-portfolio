import { useState } from "react";
import styles from "../styles/Images.module.scss";
import Image from 'next/image';

const ImageGallery = ({imgs}) => {
    const [index, setIndex] = useState(0);

    return(
    <div className={styles.gallery}>
            <Image src={imgs[index]} className={styles.fade}/>
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
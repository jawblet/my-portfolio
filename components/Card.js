import { useState, useRef, useEffect } from "react";
import styles from "../styles/Card.module.scss";
import CardFront from "./CardFront";

const CardBack = () => {
    return(
        <div className={styles.card_back}>
            <h3>
                julia bell likes software.
                she went to penn, and is now a product manager at piano.
                she lives in brooklyn.
            </h3>
        </div>
    )
}

const Card = (props) => {
    const { banner, setBanner } = props;
    const [front, setFront] = useState(true);

    const starRef = useRef(null);
    const emailRef = useRef(null);

    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
             return await navigator.clipboard.writeText(text);
        } else {
              return document.execCommand('copy', true, text);
        }
    }

    const handleClick = (e) => {
        // if starRef is clicked 
        if(starRef.current && starRef.current.contains(e.target)) {
            if(banner === "stars") {
               return setBanner(null);
            }
            return setBanner("stars");
        }

        if(emailRef.current && emailRef.current.contains(e.target)) {
            copyTextToClipboard("juliabell021@gmail.com");
            return setBanner("email");
         }

         setFront(!front);

    }

    return (
        <div className={styles.container}>
            <div className={`${styles.card} noselect`} onClick={(e) => handleClick(e)}>
                {front 
                    ? <CardFront starRef={starRef}
                                ref={emailRef}
                                {...props} />
                    : <CardBack/>}
            </div>
        </div>
      
    );
};

export default Card;


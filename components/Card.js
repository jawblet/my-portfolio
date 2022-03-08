import { useState, useRef } from "react";
import CardFront from "./CardFront";
import CardBack from './CardBack';
import styles from "../styles/Card.module.scss";

const Card = (props) => {
    const { banner, setBanner } = props;
    const [front, setFront] = useState(true);

    const starRef = useRef(null);
    const emailRef = useRef(null);

    // copy email to clipboard 
    async function copyTextToClipboard(text) {
        if ('clipboard' in navigator) {
             return await navigator.clipboard.writeText(text);
        } else {
              return document.execCommand('copy', true, text);
        }
    }

    const handleClick = (e) => {
        // if emailRef is clicked 
        if(emailRef.current && emailRef.current.contains(e.target)) {
            copyTextToClipboard("juliabell021@gmail.com");
            return setBanner("email");
        }

        // if starRef is clicked 
        if(starRef.current && starRef.current.contains(e.target)) {
            if(banner === "stars") {
               return setBanner(null);
            }
            return setBanner("stars");
        }

         // if card is flipped when stars are open 
         if(starRef.current && !starRef.current.contains(e.target)) {
            setBanner(null);
         }
       
         setFront(!front);
    }

    return (
        <div className="home__card">
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


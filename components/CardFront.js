import { forwardRef } from 'react';
import styles from "../styles/Card.module.scss";
import Stars from "./Stars";

const CardFront = (props, ref) => {
    return ( 
        <div className={styles.card_front}>
                <div className={styles.card_head}>
                    <Stars {...props} ref={props.starRef}/>
                </div>
                <div className={styles.card_title}>
                    <h1>julian bell</h1>
                    <h5 className={`${styles.email} select`} ref={ref}>
                        8311julian@gmail.com
                    </h5>
                </div>
                <div className={styles.card_bottom}>
                    <a href="https://www.linkedin.com/in/jawblet/" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        <h4>linkedin</h4>
                    </a>
                    <a href="https://github.com/jawblet" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        <h4>github</h4>
                    </a>
                    <a href="https://medium.com/@jawblet" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        <h4>medium</h4>
                    </a>
                </div>
        </div>
    );
};

export default forwardRef(CardFront);
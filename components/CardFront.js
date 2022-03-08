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
                    <h1>julia bell</h1>
                    <h5 className={`${styles.email} select`} ref={ref}>
                        julia.bell@piano.io
                    </h5>
                </div>
                <div className={styles.card_bottom}>
                    <a href="https://www.linkedin.com/in/jawblia/" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        <h4>linkedin</h4>
                    </a>
                    <a href="https://github.com/jawblia" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        <h4>github</h4>
                    </a>
                    <a href="https://medium.com/@jawblia" target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                        <h4>medium</h4>
                    </a>
                </div>
        </div>
    );
};

export default forwardRef(CardFront);
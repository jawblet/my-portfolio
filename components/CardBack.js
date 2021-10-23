import styles from "../styles/Card.module.scss";

const CardBack = () => {
    return (
        <div className={styles.card_back}>
            <h3>
                julia bell likes software.
                she went to penn, and is a product manager at piano.
                she lives in brooklyn.
            </h3>
        </div>
    );
};

export default CardBack;
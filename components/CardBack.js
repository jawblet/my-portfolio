import styles from "../styles/Card.module.scss";

const CardBack = () => {
    return (
        <div className={styles.card_back}>
            <p>
                Julia Bell likes software. She is a Master's candidate in Computer Science at Columbia. Previously, she was a Product Manager at <a href="https://piano.io/">Piano</a>.
                She lives in Brooklyn, NY.
            </p>
        </div>
    );
};

export default CardBack;
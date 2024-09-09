import styles from "../styles/Card.module.scss";

const CardBack = () => {
    return (
        <div className={styles.card_back}>
            <p>
                Julian Bell likes software. They are a Master's candidate in Computer Science at Columbia. Previously, they were a Product Manager at <a href="https://piano.io/">Piano</a>.
                They live in Brooklyn, NY.
            </p>
        </div>
    );
};

export default CardBack;
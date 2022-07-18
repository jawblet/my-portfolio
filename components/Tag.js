import styles from '../styles/Projects.module.scss';

const Tag = (props) => {
    return(
    <div className={styles.tag}>
        {props.text}
    </div>
    )
}

export default Tag; 
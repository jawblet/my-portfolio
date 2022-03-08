import { useRouter } from 'next/router'
import styles from '../styles/Home.module.scss'


const Nav = ({ img, setImg }) => {
    const router = useRouter();

    return(
    <div className={styles.nav}>
        <h2 className="biglink" onClick={() => router.push({pathName: "", hash: "resume"})}>Resume</h2>
        <h2 className="biglink" 
            //onMouseEnter={() => { setImg(true) }}
            //onMouseLeave={() => setImg(false)}
            onClick={() => setImg(!img)}
            >
            &#9786;
        </h2>
    </div>
)
};

export default Nav;

//    <h2 className="biglink">Misc.</h2>
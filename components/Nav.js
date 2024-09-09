import { useRouter } from 'next/router'

const Nav = ({ img, setImg, setBanner }) => {
    const router = useRouter();

    return(
    <div className="home__nav">
        <h2 className="biglink" onClick={() => {setBanner(null); setImg(!img)}}>
            &#9786;
        </h2>
        <h2 className="biglink">
            <a className='plain' href="JB_RESUME.pdf" target="_blank">
                Resume&nbsp;<sup>&#8599;</sup>
            </a>
        </h2>
        <h2 className="biglink" onClick={() => router.push({pathName: "", hash: "projects"})}>
            Projects &#8628;
        </h2>
    </div>
)
};

export default Nav;
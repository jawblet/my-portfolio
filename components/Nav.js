import { useRouter } from 'next/router'

const Nav = ({ img, setImg }) => {
    const router = useRouter();

    return(
    <div className="home__nav">
        <h2 className="biglink" onClick={() => setImg(!img)}>
            &#9786;
        </h2>
        <h2 className="biglink">
            <a href="JuliaBell_resume.pdf" target="_blank">
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

//    <h2 className="biglink">Misc.</h2>
//    onMouseEnter={() => { setImg(true) }}
//    onMouseLeave={() => setImg(false)}
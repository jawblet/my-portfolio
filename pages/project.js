import Back from '../components/Back';
import styles from '../styles/Projects.module.scss';
import gradient_0 from '../styles/pics/gradient/0.png'; 
import gradient_1 from '../styles/pics/gradient/1.png'; 
import gradient_2 from '../styles/pics/gradient/2.png'; 
import ImageGallery from '../components/ImageGallery';
import denimaize from '../styles/pics/denimaize/denimaize.png';
import skylight from '../styles/pics/skylight/skylight.png';
import Tag from '../components/Tag';
import { useRouter } from 'next/router';
import Image from 'next/image';

const Arrive = () => {
    return (
        <div className={styles.project} id="#arrive_anywhere">
            <h2 className={styles.title}>Arrive Anywhere</h2>
            <code>2020-2021</code>
            <p>Description TBD</p>
        </div>
    )
}

const Denimaize = () => {

    return(
        <div className={styles.project} id="denimaize">
            <h2 className={styles.title}>Denimaize</h2>
            <code>2019</code>
            <p className={styles.text}>
            <a className="link_main" href="https://denimaize.webflow.io/" target="_blank">Denimaize</a> repurposed natural corn husk waste through biological transformation and weaving it into textile. Our group demonstrated the circular systems that exist between different consumptive industries by showing possibilities for agricultural waste re-uptake by the fashion industry.
            <br/> <br/> 
            <Image src={denimaize}/>
       <br/> <br/> 
            Denimaize awards + exhibits: 
        <br/>
        <blockquote>
            <a href="https://www.opencell.bio/ldf/denimaize" target="_blank">London Design Festival 2019, Biodesign Here Now</a><br/>
            <a href="https://www.biodesignchallenge.org/upenn-2019" target="_blank">BioDesign Challenge 2019, Finalist team</a><br/>
            <blockquote>
            - Presented at MoMA, NY <br/>
            - Exhibited at Parsons the New School, NY <br/> <br/>
            </blockquote>
        </blockquote>
            Denimaize was an independent group project at the University of Pennsylvania, advised by Orkan Telhan and Karen Hogan. 
            </p>
        </div>
    )
}

const Gradient = () => {
const imgs = [gradient_0, gradient_1, gradient_2]; 
    return (
        <div className={styles.project} id="gradient">
        <h2 className={styles.title}>Gradient tool</h2>
        <code>2021</code>
        <p className={styles.text}>
            This <a className="link_main" href="https://gradient-editor.vercel.app/" target="_blank">gradient tool</a> is generated based on the sentiment of the contents entered into the text editor. 
            The colors are determined by converting sentiment analysis data retrieved from a free natural language processing API. The proportion of each color is determined by how much text reflects that sentiment. 
        </p>
        <ImageGallery imgs={imgs}>
        </ImageGallery>
        <h5 style={{paddingBottom:"1rem"}}>Texts: "With the Beatles" Haruki Murakami, "Daughter accidentally spilled jello" Reddit r/offmychest, "Response to Art" Agnes Martin</h5>
        <Tag text="React"/> <Tag text="Next.js"/>
        </div>
    )
}

const Skylight = () => {
    return ( <div className={styles.project} id="skylight">
        <h2 className={styles.title}>Skylight</h2>
        <code>2021</code>
        <p className={styles.text}> 
            <a className="link_main" href="https://skylight-react.netlify.app/" target="_blank">Skylight</a> is a component library I built with React for personal use and made accessible through <a>npm</a>. <br/><br/>
            All code snippets on the site are pulled from the source repo directly using the public GitHub API.
            <br/><br/>
            <Image src={skylight}/>
            <br/><br/>
            <a href="https://levelup.gitconnected.com/publish-react-components-as-an-npm-package-7a671a2fb7f">🔗 A tutorial</a> I wrote on publishing a React component as an npm package. 
            <br/>
            <a href="https://jawblet.medium.com/use-the-github-api-to-display-code-in-a-react-app-51f1aebb5a4">🔗 Another one</a> on using the GitHub API to dynamically fetch code snippets.   
        </p>
        <div className={styles.tags}>
        <Tag text="React"/>
        <Tag text="npm"/>
        </div>
        </div>
    )
}

const project = (props) => {
    const router = useRouter();
    const query = router.asPath.split('#')[1];
    console.log(query);

    const getProject = (q) => {
        switch (q) {
            case 'skylight':
                return <Skylight />;
            case 'gradient':
                return <Gradient />;
            case 'denimaize':
                return <Denimaize/>;
            case 'arrive_anywhere':
                return <Arrive/>;
            default:
          return null;
            }
    }

    return(
    <div className={styles.projects}>
       <Back/>
        {getProject(query)}
        </div>
        )
}

export default project;
import styles from '../styles/Projects.module.scss';
import { useRouter } from 'next/router';
import Link from 'next/link';

const icon_skylight = <h3 style={{display:"inline"}}>&#9728;</h3>;
const icon_gradient = <h3 style={{display:"inline"}}>&#9677;</h3>; 
const icon_arrive = <h3 style={{display:"inline"}}>&#8984;</h3>;
const icon_denimaize = <h3 style={{display:"inline"}}>&#9640;</h3>
const icon_tutorial = <h3 style={{display:"inline"}}>&#10000;</h3>

const ProjectSummary = () => {
    const router = useRouter(); 

    return( 
    <div id="projects" className={styles.project_summary}>
        <h1>Selected projects</h1>
        <br/>
        <h3> 
        <a href="/project#skylight"> A React component library called Skylight {icon_skylight}&nbsp;&nbsp;&nbsp;</a>
        <a href="/project#gradient">A text editor that generates a gradient from the text's sentiment {icon_gradient}&nbsp;&nbsp;&nbsp;</a>
        <a href="/project#arrive_anywhere">Arrive Anywhere, a project on quarantine emails {icon_arrive}&nbsp;&nbsp;&nbsp;</a>
        <a href="/project#denimaize">A biodesign project on alternative textiles {icon_denimaize}&nbsp;&nbsp;&nbsp;</a>
        </h3>
    </div>
    )
}

export default ProjectSummary;

//  <a>Several React tutorials {icon_tutorial}. &nbsp;&nbsp;</a>
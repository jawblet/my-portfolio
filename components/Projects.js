import styles from '../styles/Projects.module.scss';

const project_array = [
    { description: <p>
        Made a public component library, <a href="https://skylight-react.netlify.app/" target="_blank">Skylight</a>, 
        in React and published on <a href="https://www.npmjs.com/package/skylight-react" target="_blank">npm</a>&nbsp;
        (<a href="https://github.com/jawblia/skylight" target="_blank">GitHub</a>,&nbsp; 
        <a href="https://www.npmjs.com/package/skylight-react" target="_blank">Medium</a>).</p>
    },
    { description: <p>Presented a project on quarantine emails at the annual <a href="https://www.4sonline.org/meeting/" target="_blank">4S meeting</a>. 
        Built project site with Next.js and MongoDB 
        (<a href="https://github.com/jawblia/arrive-anywhere-demo" target="_blank">GitHub</a>).</p>
    },
    { description: <p>Co-presented <a href="https://denimaize.webflow.io/" target="_blank">a project </a> in Parsons and MoMa for the <a href="https://www.biodesignchallenge.org/upenn-2019" target="_blank"> 2019 Biodesign Challenge</a> and was a finalist. 
    Also exhibited this project at the <a href="https://www.opencell.bio/ldf/denimaize" target="_blank">2019 London Design Festival</a>.</p>
    },
    { description: <p>Plated Fig Newtons on <a href="https://www.instagram.com/fignudes/" target="_blank">an Instagram</a> that reached 9K followers at its peak 
    (<a href="https://philly.eater.com/2018/12/12/18136343/instagram-philadelphia-restaurants-fignudes" target="_blank">Eater</a>,&nbsp; 
    <a href="https://news.yahoo.com/plating-account-fig-newtons-genuinely-220608168.html" target="_blank">Mashable</a>).</p>
    },

];

const Projects = () => {
    return(
        <div id="projects" className={styles.projects}>
            <h2 className={styles.projects_title}>Selected projects</h2>
                <div className={styles.projects_body}>
                    {project_array.map((el) => 
                    <div> {el.description} </div>
                    )}
                </div>

        </div>
    )
}

export default Projects;
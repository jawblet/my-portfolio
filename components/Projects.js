import styles from '../styles/Projects.module.scss';

const project_array = [
    { description: <p>Made a public component library in React and published on npm (GitHub, Medium).</p>
    },
    { description: <p>Presented a project on quarantine emails at the 4S meeting. Built project site with Next.js and MongoDB.</p>
    },
    { description: <p>Co-presented a project in Parsons and MoMa for the 2019 Biodesign Challenge and was a finalist. Also exhibited this project at the 2019 London Design Festival.</p>
    },
    { description: <p>Plated Fig Newtons on an Instagram that reached 9K followers at its peak (Eater, Mashable).</p>
    },

];

const Projects = () => {
    return(
        <div id="projects" className={styles.projects}>
            <h2>Selected projects</h2>
                {project_array.map((el) => 
                    <div> {el.description} </div>
                )}
        </div>
    )
}

export default Projects;
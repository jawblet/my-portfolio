import styles from "../styles/Resume.module.scss"

const Resume = () => {
    return (
        <div id="resume" className={styles.resume}>
            <div className={styles.resume_col1}>
                <div className={styles.section}>
                    <h1 className={styles.name}>Julia Bell</h1>
                    <a href="https://www.linkedin.com/in/jawblia/" rel="noreferrer" target="_blank">
                        <p className="link">linkedin.com/in/jawblia</p>
                    </a>
                    <a href="mailto:jawbliabell@gmail.com">
                        <p className="link">jawbliabell@gmail.com</p>
                    </a>
                </div>
                <div className={styles.section}>
                    <p className={styles.section_title}>
                        EDUCATION
                    </p>
                    <p><b>University of Pennsylvania</b></p>
                    <p>English BA &nbsp; <sup style={{marginLeft:0}}>[ 2015 - 2019 ]</sup></p>
                    <p>3.76/4 GPA</p>
                    <p>Magna Cum Laude</p>
                    <p>Minors in Environmental Studies & Fine Arts</p>
                </div>
                <div className={styles.section}>
                    <p className={styles.section_title}>
                        SKILLS
                    </p>
                    <p><em>Working proficiency in</em></p>
                    <p>React</p>
                    <p>JavaScript/Node.js</p>
                    <p>HTML + CSS/Sass</p>
                    <p>MongoDB</p>
                    <p>SQL</p>
                    <p>Jira</p>
                    <p>GitHub</p>
                    <p>Figma</p>
                </div>
                <div className={styles.section}>
                    <p className={styles.section_title}>
                        INTERESTS + ACTIVITIES
                    </p>
                    <p>City biking, computing history, programming, fashion.</p>
                </div>
            </div>
            <div className={styles.resume_col2}>
                <div style={{alignSelf:"flex-end", paddingBottom:"3rem", position:"absolute", right:0, top:0}}>
                    <a href="./JuliaBell_resume.pdf" target="_blank" className="link">
                        OPEN AS PDF ↱
                    </a>
                </div>
                <div className={styles.section}>
                    <p className={styles.section_title}>
                        WORK
                    </p>
                    <div className={styles.section_sub}>
                        <p className="bold">Piano Software</p>
                        <p style={{paddingLeft:"1rem"}}>
                            Product Manager <sup>[ 2020 - CURRENT ]</sup>
                        </p>
                        <ul style={{paddingBottom:"1rem"}}>
                            <li>Build and manage product roadmap for user management within <a href="https://piano.io/" target="_blank" rel="noreferrer" className="link">Piano</a>, a customer experience + subscription commerce software serving clients in media. </li>
                            <li>Develop feature requirements and manage feature through development and release.</li>
                            <li>Work with developers, client services, and clients to determine product direction + priorities.  </li>
                        </ul>
                        <p style={{paddingLeft:"1rem"}}>
                            Business Analyst, Product <sup>[ 2019 - 2020 ]</sup>
                        </p>
                        <ul>
                            <li>Created feature requirements and user stories based on industry research. </li>
                            <li>Prioritized Jira backlog for agile development team.</li>
                        </ul>
                    </div>
                   <div className={styles.section_sub}>
                        <p className="bold">Wharton Interactive</p>
                        <p style={{paddingLeft:"1rem"}}>
                            Wharton Computing Intern <sup>[ 2018 - 2019 ]</sup>
                        </p>
                        <ul>
                            <li>Developed + refined requirements for classroom software, <a href="https://simulations.wharton.upenn.edu/idea-machine/" target="_blank" rel="noreferrer" className="link">IdeaMachine</a>, released by Penn for its Wharton 101 class and for license.</li>
                            <li>Documented all actions and their outcomes per screen. </li>
                        </ul>
                   </div>
                   <div className={styles.section_sub}>
                        <p className="bold">Nickelodeon</p>
                        <p style={{paddingLeft:"1rem"}}>
                            Product Intern, Consumer Products <sup>[ 2018 ]</sup>
                        </p>
                        <ul>
                            <li>Strategized new market opportunities for products tied to Nickelodeon’s existing franchises.</li>
                            <li>Researched product and market trends for to establish retail presence for new programs. </li>
                        </ul>
                   </div>
                </div>
                <div className={styles.section}>
                    <p className={styles.section_title}>
                        RECOGNITION + OTHER EXPERIENCE
                    </p>
                    <div>
                        <p className="bold">
                            <a href="https://www.4sonline.org/meeting/" target="_blank" rel="noreferrer" className="link">4S</a> (Society for Social Studies of Science) exhibitor <sup>[ 2021 ]</sup></p>
                        <ul>
                            <li className="ital body">Project on quarantine communication (made in ReactJS, MongoDB) shown as part of group exhibit on experimental information design.  </li>
                        </ul>
                    </div>
                    <div>
                        <p className="bold"><a href="https://sfpc.io/" target="_blank" rel="noreferrer" className="link">School for Poetic Computation</a> participant <sup>[ 2020 ]</sup></p>
                        <ul>
                            <li className="ital body">Online class on digital communication tools + practices.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="bold"><a href="https://www.londondesignfestival.com/" target="_blank" rel="noreferrer" className="link">London Design Festival</a> exhibitor <sup>[ 2019 ]</sup></p>
                        <ul>
                            <li className="ital body">Biodesign Challenge project chosen for exhibition in <a href="https://www.opencell.bio/biodesignherenow/home" target="_blank" rel="noreferrer" className="link">biodesign section</a>. </li>
                        </ul>
                    </div>
                    <div>
                        <p className="bold"><a href="https://www.biodesignchallenge.org/" target="_blank" rel="noreferrer" className="link">Biodesign Challenge</a> finalist<sup>[ 2019 ]</sup></p>
                        <ul>
                            <li className="ital body">Presented final project as part of Penn team in Museum of Modern Art.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="bold">NPR Next Generation Philadelphia fellow <sup>[ 2017 ]</sup></p>
                        <ul>
                            <li className="ital body">One of five students in PHL batch of national digital media fellowship.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
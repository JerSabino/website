import styles from "./Projects.module.css";
import { motion } from 'framer-motion';
import { getImageUrl } from '../../utils';

import projects from "../../data/projects.json"

export const Projects = () => {

  const onViewVariants = {
    offscreen: {
      y: 100,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5
      }
    }
  };


  return (
    <div>
      <motion.div
        variants={onViewVariants}
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.1}}>
        <div className={styles.primaryContainer} id="projects">
          <div className={styles.container}>
            <div className={styles.title}>
              <h4>03.</h4>
              <h2>My Projects</h2>
            </div>
            <ul className={styles.projectList}>
              {
                projects.map((projectItem, id) => {
                  const completed = projectItem.completed
                  return (
                    <motion.div
                      variants={onViewVariants}
                      initial="offscreen"
                      whileInView="onscreen"
                      viewport={{once: true, amount: 0.1}}>
                      <li className={styles.projectItem} key={id}>
                        <div className={styles.projectItemDetails}>{
                          completed ? (
                            <div >
                              <img className={styles.projectImage} src={getImageUrl(`${projectItem.imageSrc}`)} alt={projectItem.title}/>
                            </div>
                          ) : (
                            <a className="material-symbols-outlined" id={styles['construction']}>construction</a>
                          )
                        }
                          <div className={styles.info}> 
                            <div className={styles.links}> 
                            {
                              completed ? (
                                <>
                                  <a className={styles.projectLink} href={projectItem.demo_link}>
                                    {`${projectItem.title}`}
                                  </a>
                                  <a className={styles.githubLink} href="https://github.com/JerSabino/taskit">
                                    <img src={getImageUrl('contact/github.svg')} id={styles["icon"]} alt="Github Icon" />
                                  </a>
                                </>
                              ) : (
                                <>
                                  <a className={styles.unfinished}>
                                    {`${projectItem.title}`}
                                  </a>
                                  <span className={styles.githubLinkUnfinished} href="https://github.com/JerSabino/taskit">
                                    <img src={getImageUrl('contact/github.svg')} id={styles["icon"]} alt="Github Icon" />
                                  </span>
                                </>
                              )
                            }
                            </div>
                            <p className={styles.projectDescription}>{`${projectItem.desc}`}</p>
                            <div className={styles.techBox}>{
                              projectItem.tech.map((tech, id) => {
                                  return (
                                      <li className={styles.tech} key={id}>{tech}</li>
                                  );
                              })}
                            </div>
                          </div>
                        </div>
                      </li>
                    </motion.div>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
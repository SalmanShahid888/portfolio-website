import React from 'react'
import styles from './Projects.module.css'
import ProjectsGrid from './ProjectsGrid'

const Projects = () => {


  return (
    <>
    <div className={styles.Projects__section}>
      <h1 id="projects" className={styles.projects__heading}>Projects</h1>
      <div className={styles.projects__grid}>
      <ProjectsGrid/>
      </div>
    </div>
    </>
  )
}

export default Projects

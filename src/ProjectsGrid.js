
import {React} from 'react';
import { useEffect } from 'react';
import projectData from './ProjectData';
import  "./ProjectGrid.module.css"

const ProjectsGrid = () => {
    
        useEffect(()=>{
            const nav = document.getElementById("nav")     
        for (const link of nav.getElementsByTagName('a')){
            link.onmousemove = e => {
                const rect = link.getBoundingClientRect();
                const img = link.querySelector('img');
                
                img.style.left= `${e.clientX - rect.left}px`;
                img.style.top=  `${e.clientY - rect.top}px`;     
            }
        }
        window.onmousemove = e => {
            const percent = e.clientY / window.innerHeight;   
            nav.animate({
              transform: `translateY(${percent * nav.offsetHeight * -1 * 0.8}px)`
            }, {
              fill: "forwards",
              duration: 4000
            })
          }
      },[])
      
  return (
    <>
    <nav id="nav">
    <a href={projectData.nausy.url} target="_blank" rel='noreferrer'>
    <span>{projectData.nausy.title}</span>
    <img src={projectData.nausy.image} alt={`Project ${projectData.nausy.title}`}/> 
    </a> 
    <a href={projectData.chute.url} target="_blank" rel='noreferrer'>
    <span>{projectData.chute.title}</span>
    <img src={projectData.chute.image} alt={`Project ${projectData.chute.title}`}/> 
    </a> 
    <a href={projectData.cream.url} target="_blank" rel='noreferrer'>
    <span>{projectData.cream.title}</span>
    <img src={projectData.cream.image} alt={`Project ${projectData.cream.title}`}/> 
    </a> 
    <a href={projectData.luxe.url} target="_blank" rel='noreferrer'>
    <span>{projectData.luxe.title}</span>
    <img src={projectData.luxe.image} alt={`Project ${projectData.luxe.title}`}/> 
    </a> 
    <a href={projectData.wellrooted.url} target="_blank" rel='noreferrer'>
    <span>{projectData.wellrooted.title}</span>
    <img src={projectData.wellrooted.image} alt={`Project ${projectData.wellrooted.title}`}/> 
    </a> 
    <a href={projectData.pornScience.url} target="_blank" rel='noreferrer'>
    <span>{projectData.pornScience.title}</span>
    <img src={projectData.pornScience.image} alt={`Project ${projectData.pornScience.title}`}/> 
    </a> 
    </nav>
    </>
  )
}

export default ProjectsGrid
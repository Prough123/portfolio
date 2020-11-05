import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import React from "react";
import {initialState} from "../initialState";
import Project from "./Project/Project";
import arrowUp from '../../img/arrowUp.svg'
import styleContainerSkills from '.././MySkills/MySkills.module.scss'

const Projects = () => {

    const arrProjects = initialState.projects
    return (
        <section className={style.projectsBlock} id={"href"}>
            <article className={`${styleContainer.container} ${styleContainerSkills.skillsContainer}`}>
                <div>
                    <div>
                        <img src={arrowUp} alt=""/>
                        <p>.Главная</p>
                    </div>
                    <div>.Проекты</div>
                </div>
                <div className={style.projects}>
                    {arrProjects.map(el => <Project title={el.title} description={el.description}/>)}
                </div>
            </article>
        </section>
    )
}

export default Projects;
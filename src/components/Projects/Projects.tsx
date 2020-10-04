import style from "./Projects.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import React from "react";
import {initialState} from "../initialState";
import Project from "./Project/Project";

const Projects = () => {

    const arrProjects = initialState.projects
    return (
        <section className={style.projectsBlock}>
            <article className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Проекты</h2>
                <div className={style.projects}>
                    {arrProjects.map(el => <Project title={el.title} description={el.description}/>)}
                </div>
            </article>
        </section>
    )
}

export default Projects;
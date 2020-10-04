import React from 'react'
import style from './MySkills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import {initialState} from "../initialState";

const Skills = () => {
    const arrSkills = initialState.skills
    return (
        <section className={style.myskillsBlock}>
            <article className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    {arrSkills.map(el => <Skill title={el.title} description={el.description}/>)}
                </div>
            </article>
        </section>
    )
}


export default Skills;
import React from 'react'
import style from './MySkills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./Skill/Skill";
import arrowUp from '../../img/arrowUp.svg'
import {initialState} from "../initialState";

const Skills = () => {
    const arrSkills = initialState.skills
    return (
        <section className={style.mySkillsBlock}>
            <article className={`${styleContainer.container} ${style.skillsContainer}`}>
                <div className={style.nameBlock}>
                    <div className={style.navMenu}>
                        <img src={arrowUp} alt=""/>
                        <p>.Главная</p>
                    </div>
                    <div className={style.descrBlock}>.Скиллы</div>
                </div>
                <div className={style.skills}>
                    {arrSkills.map(el => <Skill title={el.title} description={el.description}/>)}
                </div>
            </article>
        </section>
    )
}


export default Skills;
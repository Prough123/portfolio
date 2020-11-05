import React from 'react'
import style from './Skill.module.scss'

export type SkillType = {
    title: string
    description: string
}

const Skill = (props:SkillType) => {
    return (
        <div className={style.skill}>
            <h3>{props.title}</h3>
        </div>
    )
}


export default Skill;
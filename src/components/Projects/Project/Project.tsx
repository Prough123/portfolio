import React from 'react'
import style from './Project.module.scss'
import arrowDown from '../../../img/arrowDown.svg'

export type SkillType = {
    title: string
    description: string
}

const Project = (props:SkillType) => {
    return (
        <div className={style.project}>
            <div className={style.blockImg}>
                <div className={style.title}>{props.title}</div>
            </div>
            <p className={style.description}>{props.description}
                <img src={arrowDown} alt=""/>
            </p>

        </div>
    )
}


export default Project;
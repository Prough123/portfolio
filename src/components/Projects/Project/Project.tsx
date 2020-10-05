import React from 'react'
import style from './Project.module.scss'

export type SkillType = {
    title: string
    description: string
}

const Project = (props:SkillType) => {
    return (
        <div className={style.project}>
            <div className={style.blockImg}>
                <button>Смотреть</button>
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>

        </div>
    )
}


export default Project;
import React from 'react'
import style from './AboutMe.module.scss'
import styleContainer from '../common/styles/Container.module.scss'

const AboutMe = () => {
    return (
        <section className={style.aboutMeBlock}>
            <article className={styleContainer.container}>
                <div className={style.text}>
                    <span>Приветули лошки</span>
                    <h1>Я Илья Божок</h1>
                    <p>Development</p>
                </div>
                <div className={style.photo}>

                </div>
            </article>
        </section>
    )
}


export default AboutMe;
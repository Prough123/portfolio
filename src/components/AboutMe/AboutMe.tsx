import React from 'react'
import style from './AboutMe.module.scss'
import arrow from '../../img/arrow.svg'
import styleCommon from '../common/styles/Container.module.scss'

const AboutMe = () => {
    return (
        <section className={style.aboutMeBlock}>
            <div className={style.wrapperBackground}>
                <article className={style.container}>
                    <div className={`${style.itemHome} ${styleCommon.wrapper}`}>
                        <a href="">.home</a>
                    </div>
                    <div className={`${style.itemSkills} ${styleCommon.wrapper}`}>
                        <a href="">.skills</a>
                        <img src={arrow} alt=""/>
                    </div>
                    <div className={style.itemAboutMe}>
                        <div className={style.specialization}>Frontend Developer</div>
                        <div className={style.initials}>Ilya Bozhok</div>
                    </div>
                    <div className={style.itemPhoto}>
                        <div className={style.photo}></div>
                    </div>
                    <div className={`${style.itemProjects} ${styleCommon.wrapper}`}>
                        <a href="">.projects</a>
                        <img src={arrow} alt=""/>
                    </div>
                    <div className={`${style.itemContacts} ${style.wrapper}`}>
                        <a href="">.contacts</a>
                        <div className={style.block}>
                            <div><a href="">Linkedin</a></div>
                            <div><a href="">+375445551213</a></div>
                            <div><a href="">bozhokilia@gmail.com</a></div>
                        </div>
                    </div>
                </article>
            </div>

        </section>
    )
}


export default AboutMe;
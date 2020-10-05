import React from 'react'
import styleContainer from "../common/styles/Container.module.scss";
import style from "../Footer/Footer.module.scss";
import Socials from "./Socials/Socials";


const Footer = () => {
    return (
        <footer className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2 className={style.title}>Илья Божок</h2>
                <div className={style.contacts}>
                    <Socials/>
                </div>
               <span>2019 Все права защищены</span>
            </div>
        </footer>
    )
}


export default Footer;
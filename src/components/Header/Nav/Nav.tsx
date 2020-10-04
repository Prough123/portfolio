import React from 'react'
import style from './Nav.module.scss'
const Nav = () => {
    return (
            <nav className={style.nav}>
                <a href="">Главная</a>
                <a href="">Скиллы</a>
                <a href="">Работы</a>
                <a href="">Контакты</a>
            </nav>
    )
}
export default Nav;
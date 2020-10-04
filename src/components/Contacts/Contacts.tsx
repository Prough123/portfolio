import React from 'react'
import style from "../Contacts/Contacts.module.scss";
import styleContainer from "../common/styles/Container.module.scss";
import Contact from "./Contact/Contact";


const Contacts = () => {
    return (
        <section className={style.contactsBlock}>
            <article className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2 className={style.title}>Контакты</h2>
                <div className={style.contacts}>
                    <Contact/>
                </div>
                <button>
                    <span>Отправить</span>
                </button>
            </article>
        </section>
    )
}


export default Contacts;
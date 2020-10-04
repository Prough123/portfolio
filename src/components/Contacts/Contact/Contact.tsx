import React from 'react'
import style from "../Contact/Contact.module.scss";


const Contact = () => {
    return (
        <form className={style.form}>
            <div className={style.contact}>
                <input type="text"/>
                <input type="text"/>
                <textarea/>
            </div>
        </form>
    )
}

export default Contact;
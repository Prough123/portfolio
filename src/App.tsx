import React from 'react';
import Header from "./components/Header/Header";
import style from './App.module.scss'
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/MySkills/MySkills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";


function App() {
    return (
        <div >
            <Header/>
            <main className={style.main}>
                <AboutMe/>
                <Skills/>
                <Projects/>
                <Contacts/>
            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;

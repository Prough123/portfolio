import React from 'react';
import style from './App.module.scss'
import AboutMe from "./components/AboutMe/AboutMe";
import Skills from "./components/MySkills/MySkills";
import Projects from "./components/Projects/Projects";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import {HashRouter} from "react-router-dom";


function App() {
    return (
        <HashRouter>
            <main className={style.main}>
                <AboutMe/>
                <Skills/>
                <Projects/>
                {/*<Contacts/>*/}
            </main>
            {/*<Footer/>*/}
        </HashRouter>
    );
}

export default App;

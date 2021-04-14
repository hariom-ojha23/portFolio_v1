import React from 'react';
import About from './aboutComponent';
import Achievements from './achievementComponent';
import Contact from './contactComponent';
import Project from './project';
import Skills from './skillsComponent';
import Navbar from './navComponent';
import { Switch, Route } from 'react-router-dom';

const Routing = () => {
    return (
        <Switch>
            <Route exact path="/"><About /></Route>
            <Route path="/achievements"><Achievements /></Route>
            <Route path="/projects"><Project /></Route>
            <Route path="/skills"><Skills /></Route>
            <Route path="/contact"><Contact /></Route>
        </Switch>
    );
}

const Main = () => {
    return (
        <>
        <Navbar />
        <Routing />
        </>
    );
}

export default Main;
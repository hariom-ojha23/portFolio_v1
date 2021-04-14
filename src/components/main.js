import React from 'react';
import About from './aboutComponent';
import Achievements from './achievementComponent';
import Contact from './contactComponent';
import Project from './project';
import Skills from './skillsComponent';
import { Switch, Route } from 'react-router-dom';

const Routing = () => {
    return (
        <Switch>
            <Route path="/"><About /></Route>
            <Route path="/achievement"><Achievements /></Route>
            <Route path="/project"><Project /></Route>
            <Route path="/skills"><Skills /></Route>
            <Route path="/contact"><Contact /></Route>
        </Switch>
    )
}

const Main = () => {
    return (
        <>
        <Routing />
        </>
    );
}

export default Main;
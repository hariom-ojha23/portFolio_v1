import React from 'react';
import About from './aboutComponent';
import Achievements from './achievementComponent';
import Contact from './contactComponent';
import Project from './projectComponent';
import Skills from './skillsComponent';
import Navbar from './navComponent';
import { Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Main = () => {

    const location = useLocation();
    return (
        <div style={{overflow: "hidden"}}>
            <Navbar />
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="page" timeout={600}>
                    <Switch>
                        <Route exact path="/"><About /></Route>
                        <Route path="/achievements"><Achievements /></Route>
                        <Route path="/projects"><Project /></Route>
                        <Route path="/skills"><Skills /></Route>
                        <Route path="/contact"><Contact /></Route>
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default Main;
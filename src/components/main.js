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
        <>
        <Navbar />
        <div style={{overflow: "hidden"}}>
            <TransitionGroup>
                <CSSTransition key={location.key} classNames="page" timeout={500}>
                    <Switch location={location}> 
                        <Route exact path="/" component={About} />
                        <Route path="/achievements" component={Achievements} />
                        <Route path="/projects" component={Project} />
                        <Route path="/skills" component={Skills} />
                        <Route path="/contact" component={Contact} />
                    </Switch>
                </CSSTransition>
            </TransitionGroup>
        </div>
        </>
    );
}

export default Main;
import React from 'react';
import {Switch,Route } from 'react-router-dom';
import WelcomePage from './Components/welcomepage';
import Aboutme from './Components/aboutme';
import Contactus from './Components/contactus';
import Projects from './Components/projects';
import Resume from './Components/resume';

const Routes = () => (
    
    <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/aboutme" component={Aboutme} />
        <Route exact path="/contactus" component={Contactus} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/resume" component={Resume} />
    </Switch>
    
)



export default Routes;
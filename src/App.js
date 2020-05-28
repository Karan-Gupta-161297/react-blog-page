import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Routes from "./routes";
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout style={{ background: 'url(https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60) center / cover' }}>
        <Header transparent title="My Portfolio" scroll>
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contactus">Contact Us</Link>
          </Navigation>
        </Header>
        <Drawer title="My Portfolio">
          <Navigation>
            <Link to="/">Home</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/projects">Projects</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Routes />
        </Content>
      </Layout>
    </div>
  );
}

export default App;

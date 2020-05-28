import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import ProfilePic from '../Assets/ProfilePic.png';

class WelcomePage extends Component {
    render() {
        return (

            <div styles={{ width: '100%', margin: 'auto' }}>
                <Grid className="welcomepage-grid">
                    <Cell col={12}>
                        <img
                            src={ProfilePic}
                            alt="profile"
                            className="profile-img"
                        />

                        <div className="banner-text">
                            <h1 className="banner-text h1">" Frontend Developer "</h1>

                            <hr />
                            <p>ReactJs | Javascript (Intermediate) | Bootstrap (Intermediate) | HTML/CSS (Intermediate)</p>


                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/karan-kumar-gupta-839937156/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                {/* GitHub */}
                                <a href="https://github.com/Karan-Gupta-161297" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                {/* BitBucket */}
                                <a href="https://bitbucket.org/dashboard/repositories" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-bitbucket-square" aria-hidden="true" />
                                </a>

                                {/* YouTube */}
                                <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square" aria-hidden="true" />
                                </a>
                            </div>


                        </div>

                    </Cell>
                </Grid>
            </div>

        );

    }
}

export default WelcomePage;
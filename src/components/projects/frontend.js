import React from 'react';
import calc from '../../images/calc.png';
import rqm from '../../images/rqm.png';
import felix from '../../images/felix.png';

const Frontend = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={rqm} alt="random-quote-machine" title="random-quote-machine" />
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                random quote machine, frontend was created using Reactjs. you can pick your favourite
                                quote from 8 categories and can share to your loved ones and friends.
                            </p>
                            <button>
                                <a href="https://github.com/hariom-ojha23" target="_blank">github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img className="project-img" src={felix} alt="Felix-social_media_app" title="Felix_socail_media_app" />
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                felix, a social media app, frontend created using react and backend with nodejs and 
                                express, with database using MongoDB. You can create account, login using credentials,
                                create post, follow and unfollow others and many more things.
                            </p>
                            <button>
                                <a href="https://github.com/hariom-ojha23" target="_blank">github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img className="project-img" src={calc} alt="calculator" title="claculator" />
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                simple calculator created in reactjs, takes value when click buttons and gives
                                the computed result.
                            </p>
                            <button>
                                <a href="https://github.com/hariom-ojha23" target="_blank">github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Frontend;
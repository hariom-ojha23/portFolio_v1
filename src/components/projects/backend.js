import React from 'react';
import felix from '../../images/felix.png';

const Backend = () => {
    return (
        <div className="content-item">
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
        </div>
    )
}

export default Backend;
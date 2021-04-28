import React from 'react';
import blog from '../../images/blog.png';
import pixel from '../../images/pixel.png';

const Html = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={blog} alt="blog-site" title="blog-site" />
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                template of a blog site created using HTML5 and CSS3 which contain different pages 
                                such as about, contact, login and signup, home page etc. 
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://github.com/hariom-ojha23/Blog-webpage" target="_blank">github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project-card">
                <img className="project-img" src={pixel} alt="pixelMaker" title="pixelMaker" />
                <div className="overlay">
                    <div className="text">
                        <div className="overlay-content">
                            <p className="description">
                                pixel art maker, one can choose grid row and width and pick their favorite 
                                color and start creating different arts.
                            </p>
                            <button>
                                <a rel="noreferrer" href="https://github.com/hariom-ojha23/Pixel-art-maker-" target="_blank">github</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Html;
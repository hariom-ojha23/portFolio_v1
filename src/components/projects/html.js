import React from 'react';
import blog from '../../images/blog.png';
import pixel from '../../images/pixel.png';

const Html = () => {
    return (
        <div className="content-item">
            <div className="project-card">
                <img className="project-img" src={blog} alt="blog-site" title="blog-site" />
            </div>
            <div className="project-card">
                <img className="project-img" src={pixel} alt="pixelMaker" title="pixelMaker" />
            </div>
        </div>
    )
}

export default Html;
import React from 'react';
import nanoid from 'nanoid';

export default ({projects}) => (
  <div className="projectListRoot">
    {
      projects.map(project => (
        <div key={nanoid()} className="imgWrapper">
          <img src={project.img} className='img'/>
        </div>
      ))
    }
  </div>
);
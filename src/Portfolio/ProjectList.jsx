import React from 'react';
import PropTypes from 'prop-types';
import nanoid from 'nanoid';

const ProjectList = ({projects}) => (
  <div className="projectListRoot">
    {
      projects.map(project => {
        const alt = project.img.split('/').pop().split('.')[0];
        
        return (
          <div key={nanoid()} className="imgWrapper">
            <img src={project.img} className='img' alt={alt} />
          </div>
        )
      })
    }
  </div>
);

ProjectList.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      img: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired
    }),
  )
}

export default ProjectList;
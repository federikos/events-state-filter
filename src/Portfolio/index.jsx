import React from 'react';
import projects from './data';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

class Portfolio extends React.Component {
  render() {
    return (
      <div className="root">
        <Toolbar />
        <ProjectList projects={projects}/>
      </div>
    )
  }
}

export default Portfolio;
import React, { Component } from 'react';
import projects from './data';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

const FilterType = {
  ALL: 'All', 
  WEBSITES: 'Websites', 
  FLAYERS: 'Flayers', 
  BUSINESS_CARDS: 'Business Cards'
};

class Portfolio extends Component {

  state = {
    activeFilter: FilterType.ALL,
  }

  onSelectFilter = (filter) => {
    this.setState({activeFilter: filter})
  };

  render() {
    const filteredProjects = this.state.activeFilter === FilterType.ALL
      ? projects
      : projects.filter(project => project.category === this.state.activeFilter);

    return (
      <div className="root">
        <Toolbar filters={Object.values(FilterType)} selected={this.state.activeFilter} onSelectFilter={this.onSelectFilter} />
        <ProjectList projects={filteredProjects}/>
      </div>
    )
  }
}

export default Portfolio;
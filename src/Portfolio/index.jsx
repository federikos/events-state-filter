import React, { Component } from 'react';
import data from './data';
import ProjectList from './ProjectList';
import Toolbar from './Toolbar';

class Portfolio extends Component {
  state = {
    filters: ['All', 'Websites', 'Flayers', 'Business Cards'],
    activeFilter: 'All',
  }

  render() {
    const onSelectFilter = (filter) => {
      this.setState({activeFilter: filter})
    };

    const projects = data.filter(project => {
      if (this.state.activeFilter !== 'All') {
        return project.category === this.state.activeFilter
      }
      return true;
    });

    return (
      <div className="root">
        <Toolbar filters={this.state.filters} selected={this.state.activeFilter} onSelectFilter={onSelectFilter} />
        <ProjectList projects={projects}/>
      </div>
    )
  }
}

export default Portfolio;
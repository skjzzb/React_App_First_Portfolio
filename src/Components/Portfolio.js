import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var projects = this.props.data.projects.map(function (project) {
        var projectImage = 'images/portfolio/' + project.image;
        return (
          <div key={project.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={project.url} title={project.title} target="_blank" rel="noopener noreferrer">
                <img alt={project.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{project.title}</h5>
                    <p>{project.category}</p>
                  </div>
                </div>
                <div className="link-icon">
                  <i className="fa fa-link"></i>
                </div>
              </a>
              {project.tech && (
                <div className="project-tech">
                  {project.tech.split(', ').map(function (t) {
                    return <span key={t} className="tech-tag">{t}</span>;
                  })}
                </div>
              )}
            </div>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Projects & Work</h1>
            <p className="portfolio-intro">
              A selection of enterprise and personal projects I've contributed to.
            </p>
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;

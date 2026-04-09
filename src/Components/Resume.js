import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;

      var education = this.props.data.education.map(function (edu) {
        return (
          <div key={edu.school} className="resume-item">
            <h3>{edu.school}</h3>
            <p className="info">
              {edu.degree} <span>&bull;</span>
              <em className="date">{edu.graduated}</em>
            </p>
            <p>{edu.description}</p>
          </div>
        );
      });

      var work = this.props.data.work.map(function (job) {
        return (
          <div key={job.company + job.years} className="resume-item">
            <h3>{job.company}</h3>
            <p className="info">
              {job.title}
              <span>&bull;</span>
              <em className="date">{job.years}</em>
            </p>
            <p>{job.description}</p>
          </div>
        );
      });

      var skills = this.props.data.skills.map(function (skill) {
        var className = 'bar-expand ' + skill.name.toLowerCase().replace(/[^a-z]/g, '');
        return (
          <li key={skill.name}>
            <span style={{ width: skill.level }} className={className}></span>
            <em>{skill.name}</em>
          </li>
        );
      });

      var awards = this.props.data.awards
        ? this.props.data.awards.map(function (award) {
            return (
              <div key={award.title + award.year} className="resume-item award-item">
                <h3>
                  <i className="fa fa-trophy"></i> {award.title}
                </h3>
                <p className="info">
                  <em className="date">{award.year}</em>
                </p>
                <p>{award.description}</p>
              </div>
            );
          })
        : null;
    }

    return (
      <section id="resume">
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>
          <div className="nine columns main-col">{work}</div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">{education}</div>
            </div>
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>{skillmessage}</p>
            <div className="bars">
              <ul className="skills">{skills}</ul>
            </div>
          </div>
        </div>

        {awards && (
          <div className="row awards">
            <div className="three columns header-col">
              <h1><span>Awards</span></h1>
            </div>
            <div className="nine columns main-col">{awards}</div>
          </div>
        )}
      </section>
    );
  }
}

export default Resume;

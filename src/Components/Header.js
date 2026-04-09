import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: '',
      currentIndex: 0,
      isDeleting: false,
      loopNum: 0,
    };
    this.roles = [
      'Senior Full-Stack Developer',
      'Java & Spring Boot Expert',
      'React & Angular Developer',
      'Problem Solver',
    ];
    this.typingSpeed = 80;
    this.deletingSpeed = 40;
    this.pauseTime = 1800;
  }

  componentDidMount() {
    this.typeEffect();
  }

  componentWillUnmount() {
    clearTimeout(this.typeTimer);
  }

  typeEffect = () => {
    const { loopNum, isDeleting, typedText } = this.state;
    const currentRole = this.roles[loopNum % this.roles.length];

    if (!isDeleting && typedText === currentRole) {
      this.typeTimer = setTimeout(() => {
        this.setState({ isDeleting: true }, this.typeEffect);
      }, this.pauseTime);
      return;
    }

    if (isDeleting && typedText === '') {
      this.setState(
        { isDeleting: false, loopNum: loopNum + 1 },
        this.typeEffect
      );
      return;
    }

    const nextText = isDeleting
      ? currentRole.substring(0, typedText.length - 1)
      : currentRole.substring(0, typedText.length + 1);

    this.setState({ typedText: nextText }, () => {
      this.typeTimer = setTimeout(
        this.typeEffect,
        isDeleting ? this.deletingSpeed : this.typingSpeed
      );
    });
  };

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var description = this.props.data.description;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target="_blank" rel="noopener noreferrer">
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">Home</a>
            </li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">
              Hi, I'm <span className="name-highlight">{name}</span>
            </h1>
            <h2 className="typewriter">
              <span className="typed-text">{this.state.typedText}</span>
              <span className="cursor">|</span>
            </h2>
            <h3>{description}</h3>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;

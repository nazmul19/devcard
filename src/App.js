import React from 'react';
import './App.css';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { BiBorderRadius } from 'react-icons/bi';

function App() {
  return (
    <div className="App">
      <div className="dev-card">
        <div className="name-title-container">
          <NameAndTitle />
        </div>
        <div className="profile-avatar-container">
          <ProfileAvatar />
        </div>
        <SocialConnects />
        <div className="left-aligned-container small-font">
          <TopLanguages />
          <GithubStars />
        </div>
      </div>
    </div>
  );
}

function ProfileAvatar() {
  return <img className="profile-avatar" width="44" src="https://avatars.githubusercontent.com/u/3656288?v=4" alt="Profile Avatar" />;
}

function SocialConnects() {
  return (
    <div className="social-icons">
      <a href="https://x.com/nazmulhassan19" aria-label="Twitter"><FaTwitter /></a>
      <a href="https://www.linkedin.com/in/md-nazmul-hassan-173a5917/" aria-label="LinkedIn"><FaLinkedin /></a>
      <a href="https://github.com/nazmul19" aria-label="GitHub"><FaGithub /></a>
    </div>
  );
}

function TopLanguages() {
  return <div>Java, Spring Boot, SQL</div>;
}

function GithubStars() {
  return <div>70+ Repositories</div>;
}

function NameAndTitle() {
  return (
    <div>
      <div className="name">Md Nazmul Hassan</div>
      <div className="title">Software Engineer</div>
    </div>
  );
}

export default App;

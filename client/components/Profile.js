import React, { Component } from 'react';
import ProfilePic from '../containers/profilePicContainer';
import AboutMe from '../containers/aboutMeContainer';

export default class Profile extends Component {
  render() {
    return (
      <div>
        <ProfilePic />
        <AboutMe />
      </div>
    );
  }
}

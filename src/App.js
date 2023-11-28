import React, { Component } from 'react';

class App extends Component {
  state = {
    person: {
      fullName: "Rami Dridi",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FLuigi&psig=AOvVaw3Q8a31HjOJ2DAwCs_nWjlO&ust=1701225007807000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOCusZTT5YIDFQAAAAAdAAAAABAE",
      profession: "student"
    },
    show: false,
    lastMountedTime: null
  };

  componentDidMount() {
    this.setState({ lastMountedTime: new Date().toLocaleTimeString() });
    this.interval = setInterval(() => {
      this.setState({ lastMountedTime: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, lastMountedTime } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {show && (
          <div>
            <img src={imgSrc} alt="Profile" />
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
        <p>Last Mounted Time: {lastMountedTime}</p>
      </div>
    );
  }
}
export default App;

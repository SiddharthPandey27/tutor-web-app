import React from 'react';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

class App extends React.Component {

  state = {
    active: 'home',
  }

  changeLink = (e) => {
    this.setState({
      active: e.target.id
    });
  }

  render () {
    // Background
    // Navbar
    // Footer

    const { active } = this.state;

    return (
      <div className="home">
        <div className="home-container">
          <Navbar 
            active={active}
            click={this.changeLink}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;

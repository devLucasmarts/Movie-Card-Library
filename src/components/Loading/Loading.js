import React, { Component } from 'react';
import './loading.css';

class Loading extends Component {
  render() {
    return (
      <div className="loading-section">
        <img src="https://media.wired.com/photos/592744d3f3e2356fd800bf00/master/w_2560%2Cc_limit/Netflix_LoadTime.gif" alt="Carregando..." />
      </div>
    );
  }
}

export default Loading;

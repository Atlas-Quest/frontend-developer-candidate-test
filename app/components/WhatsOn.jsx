import React, { Component } from "react";
import PropTypes from "prop-types";
import EventList from "./Events/EventList.jsx";

class WhatsOn extends Component {
  render() {
    return (
      <div className="container-fluid bg-blue">
        <h2 className="whats-on-title">What's On</h2>
        <EventList {...this.props} />
      </div>
    );
  }
}

WhatsOn.propTypes = {
  events: PropTypes.array.isRequired,
};

export default WhatsOn;

import React, { Component } from "react";
import PropTypes from "prop-types";

class Event extends Component {
  render() {
    const { event, onClick, active } = this.props;
    return (
      <li className="event-item divider bg-blue">
        { active && <div
          className="event-image"
          style={{ backgroundImage: `url(${event.image})` }}
        ></div>
        }

        <div className="event-header" onClick={onClick.bind(this)}>
          <p className="event-date">{event.date}</p>
          <p className="event-title">{event.title}</p>
        </div>

        <div className={`event-body ${!active ? 'hide' : 'show'}`}>
          <p className="event-text">{event.text}</p>
          <div className="learn-more-link">
            <a>Learn more</a>
          </div>
        </div>
      </li>
    );
  }
}

Event.propTypes = {
  event: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired
};

export default Event;

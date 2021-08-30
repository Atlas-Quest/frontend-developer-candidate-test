import React, { Component } from "react";
import PropTypes from "prop-types";
import Event from "./Event.jsx";

class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }
  onClick(index) {
    this.setState({ activeIndex: index });
  }
  render() {
    return (
      <div className="md-bg-white">
      <div className="md-d-flex">
        <div className="col-1 desktop-hidden"><div className="bg-blue container-margin h-100"></div></div>
        <div className="col-5 desktop-hidden" style={{ backgroundImage: `url(${this.props.events[this.state.activeIndex].image})` }}></div>
        <div className="col-1 desktop-hidden"><div className="bg-blue container-margin h-100"></div></div>
        <div className="md-col-5">
          <ul className="list-container md-bg-blue md-container-margin">
            {this.props.events.map((event, index) => {
              return (
                <Event
                  active={index === this.state.activeIndex}
                  event={event}
                  key={event.id}
                  onClick={() => this.onClick(index)}
                />
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList;

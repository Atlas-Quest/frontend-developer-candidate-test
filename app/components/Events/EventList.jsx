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
      <div className="desktop-full-height">
        <div className="bg-lg-white">
          <div className="d-flex my-lg-5 col-lg-12 flex-row align-items-stretch">
            <div className="d-flex align-items-center col-lg-1 bg-lg-blue my-5">
              <h2 className="on-desktop-title">What's On</h2>
            </div>
            <div
              className="col-lg-5 desktop-event-image"
              style={{
                backgroundImage: `url(${
                  this.props.events[this.state.activeIndex].image
                })`,
              }}
            ></div>
            <div className="bg-lg-blue col-lg-1 my-5"></div>
            <div className=" d-flex col-lg-5">
              <ul className="bg-lg-blue list-container my-5">
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
      </div>
    );
  }
}

EventList.propTypes = {
  events: PropTypes.array.isRequired,
};

export default EventList;

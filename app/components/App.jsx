import React, { Component } from "react";
import WhatsOn from "./WhatsOn.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: "1",
          title: "Vivid Sydney",
          image: "./images/vivid-sydney.jpg",
          alt: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ac sagittis tristique platea praesent leo a porttitor.",
          date: "14-18 Aug",
        },
        {
          id: "2",
          title: "Queen's Birthday",
          image: "./images/queens-birthday-celebrations.jpg",
          alt: "",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ac sagittis tristique platea praesent leo a porttitor.",
          date: "16 June",
        },
        {
          id: "3",
          title: "Father's Day",
          image: "./images/fathers-day-dining.jpg",
          alt: "Seafood dish in pan at Restaurant",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ac sagittis tristique platea praesent leo a porttitor.",
          date: "9 Sep",
        },
      ],
    };
  }
  render() {
    return <WhatsOn {...this.state} />;
  }
}

export default App;

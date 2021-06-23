import React, { Component } from "react";
import actionCable from "actioncable";

export default class Chatbox extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
    };
    this.cable = actionCable.createConsumer("ws://localhost:3000/cable");
  }

  componentDidMount() {
    this.fetchMessages();
    this.createSubscription();
  }

  fetchMessages = () => {
    fetch("https://this-is-internet.herokuapp.com/messages")
      .then((response) => response.json())
      // .then((messages) => console.log(messages, "messages"));
      .then((messages) => this.setState({ messages: messages }));
  };

  createSubscription = () => {
    this.cable.subscriptions.create(
      { channel: "MessagesChannel" },
      { received: (message) => this.handleReceivedMessage(message) }
    );
  };

  mapMessages = () => {
    return this.state.messages.map((message, i) => (
      <li key={i}>{message.content}</li>
    ));
  };

  handleReceivedMessage = (message) => {
    console.log(message);
    this.setState({ messages: [...this.state.messages, message] });
  };

  handleMessageSubmit = (e) => {
    e.preventDefault();
    const messageObj = {
      message: {
        content: e.target.message.value,
      },
    };
    const fetchObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageObj),
    };
    fetch("https://this-is-internet.herokuapp.com/messages", fetchObj);
    e.target.reset();
  };

  render() {
    return (
      <div className="ActionCable">
        <div className="ActionCableDiv">
          <ul className="Messages">{this.mapMessages()}</ul>

          <form className="ActionCableForm" onSubmit={this.handleMessageSubmit}>
            <input name="message" type="text" />
            <input type="submit" value="send message" />
          </form>
        </div>
      </div>
    );
  }
}

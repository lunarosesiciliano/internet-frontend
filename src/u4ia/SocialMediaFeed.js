import React, { Component } from "react";
import SMForm from "../u4ia/SMForm";
import SocialMediaContainer from "../u4ia/SocialMediaContainer";
import U4iaCSS from "./U4ia.module.css";

export default class SocialMediaFeed extends Component {
  render() {
    return (
      <div className="SocialMediaFeed">
        <SMForm user={this.props.user} addPost={this.props.addPost} />
        <SocialMediaContainer
          user={this.props.user}
          SMPosts={this.props.SMPosts}
          addLike={this.props.addLike}
        />
      </div>
    );
  }
}

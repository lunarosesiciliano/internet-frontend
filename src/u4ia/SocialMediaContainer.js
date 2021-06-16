import React from "react";
import SocialMediaPost from "./SocialMediaPost";
import U4iaCSS from "./U4ia.module.css";

export default function SocialMediaContainer(props) {
  const displayPosts = () => {
    return props.SMPosts.map((smp) => {
      return (
        <SocialMediaPost user={props.user} post={smp} addLike={props.addLike} />
      );
    });
  };

  return <div className={U4iaCSS.SocialMediaContainer}>{displayPosts()}</div>;
}

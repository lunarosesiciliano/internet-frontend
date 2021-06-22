import React from "react";
import U4iaCSS from "./U4ia.module.css";
import like from "../Images/like.png";

export default function SocialMediaPost(props) {
  const handleClick = (e) => {
    e.preventDefault();
    props.addLike(props.post);
  };
  return (
    <div className={U4iaCSS.SocialMediaPost}>
      <ul>
        <li> {props.post.message}</li>
        <img
          src={props.post.featured_image}
          className={U4iaCSS.FeaturedImage}
          alt={""}
        />
        <li>
          <img
            src={like}
            onClick={handleClick}
            className={U4iaCSS.LikeButton}
            alt={""}
          />
          <h3 className="U4iaH3">{props.post.likes}</h3>
        </li>
      </ul>
    </div>
  );
}

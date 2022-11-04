import React from "react";
import "../App.css";
import PropTypes from "prop-types";

function profile(props) {
  props.handleName(props.fullName);

  return (
    <div className="MyProfile">
      {props.children}
      <p> {props.fullName}</p><br />
      <h2>Bio: </h2> <small>{props.bio}</small>
      <h2>Profession:  </h2><p>{props.profession}</p>
    </div>
  );
}

profile.defaultProps = {
  fullName: "Full Name",
  bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, enim doloribus quia voluptatibus odit minima sequi tempora commodi aliquam odio perferendis officia dolores cumque distinctio, minus architecto dolorem officiis corrupti!",
  profession: "None",
};

profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};

export default profile;

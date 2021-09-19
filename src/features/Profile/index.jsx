import { GET_USER } from "constants/localStorage";
import React from "react";
import { Redirect } from "react-router";
import "./Profile.scss";

const Profile = () => {
  const userLS = localStorage.getItem(GET_USER);
  if (!userLS) return <Redirect to="/home" />;

  return <div>Profile page</div>;
};

export default Profile;

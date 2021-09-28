import { getUserToken, selectAuthUser } from "features/Auth/authSlice";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ProfileForm from "./components/ProfileForm";
import ProfileTable from "./components/ProfileTable";
import "./Profile.scss";

const Profile = () => {
  const [isProfile, setProfile] = useState("profile");
  const user = useSelector(selectAuthUser);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(getUserToken());
  }, []);

  return (
    <div
      style={{ minHeight: "100vh" }}
      className="flex-grow bg-gray-900 shadow overflow-x-auto mt-44 mx-10 rounded"
    >
      <div className="sm:px-7 sm:pt-7 px-4 pt-4 flex flex-col w-full  bg-gray-900 text-white  sticky top-0">
        <div className="flex w-full items-center">
          <div className="flex items-center text-3xl text-white">
            <img
              src={`https://i.pravatar.cc/300?u=${user.hoTen}`}
              className="w-28 mr-4 rounded-full"
              alt="profile"
            />
            {user.hoTen}
          </div>
        </div>
        <div className="flex items-center space-x-3 sm:mt-20 mx-auto mt-7">
          <a
            onClick={() => {
              setProfile("profile");
            }}
            className={`${
              isProfile == "profile" && "activeProfile"
            } px-3  text-sm md:text-lg cursor-pointer  text-gray-400  py-5`}
          >
            Thông tin tài khoản
          </a>
          <a
            onClick={() => {
              setProfile("history");
            }}
            className={`${
              isProfile == "history" && "activeProfile"
            } px-3  text-sm md:text-lg cursor-pointer  text-gray-400  py-5`}
          >
            Lịch sử đặt vé
          </a>
        </div>
      </div>
      {isProfile == "profile" && (
        <div className="mt-10 px-10">
          <ProfileForm user={user} />
        </div>
      )}
      {isProfile == "history" && <ProfileTable user={user} />}
    </div>
  );
};

export default Profile;

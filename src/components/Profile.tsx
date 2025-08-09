import React from "react";
import { useAuth } from "../contexts/AuthContext";
import defaultAvatar from "../assets/default-avatar.png";

const Profile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-bold">You are not logged in</h2>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <img
        src={user.photoURL || defaultAvatar}
        alt="Profile"
        className="h-24 w-24 mx-auto rounded-full border-4 border-blue-500"
      />
      <h2 className="mt-4 text-2xl font-bold">
        {user.displayName || "Anonymous User"}
      </h2>
      <p className="text-gray-600">{user.email || "No email available"}</p>
    </div>
  );
};

export default Profile;

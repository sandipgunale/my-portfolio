import React from "react";
import { useAuth } from "../contexts/AuthContext";
import defaultAvatar from "../assets/default-avatar.png";

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <div className="p-6 text-center">Please log in to view your profile.</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <div className="flex items-center space-x-6">
        <img
          src={user.photoURL || defaultAvatar}
          alt="User Avatar"
          className="h-20 w-20 rounded-full border-2 border-gray-300"
        />
        <div>
          <p className="text-lg font-semibold">{user.displayName || "Anonymous User"}</p>
          <p className="text-gray-600">{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

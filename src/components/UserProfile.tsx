// src/components/UserProfile.tsx
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import defaultAvatar from "../assets/default-avatar.png";

const UserProfile: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <p className="text-center text-gray-600">You are not logged in.</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded p-6 my-6">
      <img
        src={user.photoURL || defaultAvatar}
        alt={user.displayName || "User Avatar"}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-blue-600"
      />
      <h2 className="text-xl font-semibold text-center mb-2">
        {user.displayName || "Anonymous User"}
      </h2>
      <p className="text-center text-gray-700 mb-1">
        <strong>Email:</strong> {user.email || "Not provided"}
      </p>
      <p className="text-center text-gray-500 text-sm">
        UID: {user.uid}
      </p>
    </div>
  );
};

export default UserProfile;

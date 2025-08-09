import React, { useState } from "react";
import { Link } from "react-router-dom";
import defaultAvatar from "../assets/default-avatar.png";
import logo from "../assets/logos/technova-logo.png";
import { User } from "../contexts/AuthContext";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  user: User | null;
  onSignIn: () => Promise<void>;
  onSignOut: () => Promise<void>;
}

const Navbar: React.FC<NavbarProps> = ({ user, onSignIn, onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuLinks = [
    { to: "/", label: "Home" },
    { to: "/technologies", label: "Technologies" },
    { to: "/jobs", label: "Jobs" },
    { to: "/career", label: "Career" },
    { to: "/resources", label: "Resources" },
    { to: "/news", label: "Tech News" },
    { to: "/community", label: "Community" },
  ];

  return (
    <nav className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 w-auto mr-2" />
            <span className="text-xl font-bold">TechNexus</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {menuLinks.map((link) => (
              <Link key={link.to} to={link.to} className="hover:underline">
                {link.label}
              </Link>
            ))}
            {user && (
              <Link to="/profile" className="hover:underline font-semibold">
                Profile
              </Link>
            )}

            {user ? (
              <>
                <img
                  src={user.photoURL || defaultAvatar}
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <span>{user.displayName || "Anonymous User"}</span>
                <button
                  onClick={onSignOut}
                  className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <button
                onClick={onSignIn}
                className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded"
              >
                Login
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-blue-800">
          {menuLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="block hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          {user && (
            <Link
              to="/profile"
              className="block hover:underline font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          )}

          {user ? (
            <>
              <div className="flex items-center space-x-2">
                <img
                  src={user.photoURL || defaultAvatar}
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <span>{user.displayName || "Anonymous User"}</span>
              </div>
              <button
                onClick={onSignOut}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={onSignIn}
              className="bg-green-500 hover:bg-green-600 px-3 py-1 rounded w-full"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

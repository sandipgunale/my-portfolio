import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Menu, X } from "lucide-react";
import GoogleButton from "./GoogleButton";

const Navbar: React.FC = () => {
  const { user, signIn, signOut, error, clearError } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleCredentialResponse = (response: any) => {
    signIn(response.credential).catch(console.error);
  };

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
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold">TechNexus</span>
          </div>

          {/* Desktop menu */}
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
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <span>{user.displayName || "Anonymous User"}</span>
                <button
                  onClick={signOut}
                  className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <GoogleButton onCredentialResponse={handleCredentialResponse} />
            )}
          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
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
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <span>{user.displayName || "Anonymous User"}</span>
              </div>
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <GoogleButton onCredentialResponse={handleCredentialResponse} />
          )}
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="fixed top-16 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
          <button onClick={clearError} className="font-bold ml-2" aria-label="Dismiss error">
            X
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

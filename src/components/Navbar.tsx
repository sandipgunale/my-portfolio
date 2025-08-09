import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const { user, signIn, signOut, error, clearError } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const googleButtonRef = useRef<HTMLDivElement>(null);

  const GOOGLE_CLIENT_ID = "457506540493-altl4l7o94k1kv8e6nbjosrplj3mte36.apps.googleusercontent.com";

  const menuLinks = [
    { to: "/", label: "Home" },
    { to: "/technologies", label: "Technologies" },
    { to: "/jobs", label: "Jobs" },
    { to: "/career", label: "Career" },
    { to: "/resources", label: "Resources" },
    { to: "/news", label: "Tech News" },
    { to: "/community", label: "Community" },
  ];

  const handleCredentialResponse = (response: any) => {
    signIn(response.credential).catch(console.error);
  };

  useEffect(() => {
    const initializeGoogle = () => {
      const google = (window as any).google;
      if (!google || user) return;

      google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: handleCredentialResponse,
        ux_mode: "popup",
      });

      if (googleButtonRef.current) {
        google.accounts.id.renderButton(googleButtonRef.current, {
          theme: "outline",
          size: "large",
          width: 200,
        });
      }
    };

    if ((window as any).google) {
      initializeGoogle();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    script.onload = initializeGoogle;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [user, GOOGLE_CLIENT_ID]);

  return (
    <nav className="bg-blue-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">TechNexus</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
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
              <span>{user.displayName}</span>
              <button
                onClick={signOut}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <div ref={googleButtonRef} />
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col space-y-2 mt-2 bg-blue-800 p-4 rounded max-w-xs mx-auto">
          {menuLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {user && (
            <Link
              to="/profile"
              className="hover:underline font-semibold"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          )}

          {user ? (
            <>
              <div className="flex items-center space-x-2 mt-2">
                <img
                  src={user.photoURL || "https://via.placeholder.com/40"}
                  alt="User Avatar"
                  className="h-10 w-10 rounded-full border-2 border-white"
                />
                <span>{user.displayName}</span>
              </div>
              <button
                onClick={() => {
                  signOut();
                  setIsOpen(false);
                }}
                className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded mt-2 w-full"
              >
                Logout
              </button>
            </>
          ) : (
            <div ref={googleButtonRef} />
          )}
        </div>
      )}

      {/* Error display */}
      {error && (
        <div className="fixed top-16 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
          <button onClick={clearError} className="font-bold ml-2">
            X
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

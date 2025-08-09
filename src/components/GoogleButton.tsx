import React, { useEffect, useRef } from "react";

interface GoogleButtonProps {
  onCredentialResponse: (response: any) => void;
}

const GOOGLE_CLIENT_ID = "457506540493-altl4l7o94k1kv8e6nbjosrplj3mte36.apps.googleusercontent.com";

const GoogleButton: React.FC<GoogleButtonProps> = ({ onCredentialResponse }) => {
  const googleButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGoogleScript = () => {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogleButton;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    };

    const initializeGoogleButton = () => {
      const google = (window as any).google;
      if (!google || !googleButtonRef.current) return;

      google.accounts.id.initialize({
        client_id: GOOGLE_CLIENT_ID,
        callback: onCredentialResponse,
        ux_mode: "popup",
      });

      google.accounts.id.renderButton(googleButtonRef.current, {
        theme: "outline",
        size: "large",
        width: 240,
      });
      google.accounts.id.prompt(); // Optional: show One Tap prompt
    };

    if (!(window as any).google) {
      loadGoogleScript();
    } else {
      initializeGoogleButton();
    }
  }, [onCredentialResponse]);

  return <div ref={googleButtonRef} />;
};

export default GoogleButton;

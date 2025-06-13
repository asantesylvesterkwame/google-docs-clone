import React from "react";

interface AuthPageLayoutProps {
  children: React.ReactNode;
}

const AuthPageLayout = ({ children }: AuthPageLayoutProps) => {
  return (
    <div>
      <p className="w-full bg-red-500 text-white">
        I am in the main layout file
      </p>
      <p className="w-full bg-red-500 text-white">
        I am in the main layout file
      </p>
      <p className="w-full bg-red-500 text-white">
        I am in the main layout file
      </p>
      {children}
    </div>
  );
};

export default AuthPageLayout;

import React from "react";

interface DocumentsPageLayoutProps {
  children: React.ReactNode;
}

const DocumentsPageLayout = ({ children }: DocumentsPageLayoutProps) => {
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

export default DocumentsPageLayout;

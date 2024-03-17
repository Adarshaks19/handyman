import React from "react";
import CategorySideBar from "./_components/CategorySidebar";

function layout({ children }) {
  return (
    <div>
      <div className="grid md:grid-cols-4 mt-8">
        <div className="hidden md:block">
          <CategorySideBar />
        </div>
        <div className="md:col-span-3">{children}</div>
      </div>
    </div>
  );
}

export default layout;

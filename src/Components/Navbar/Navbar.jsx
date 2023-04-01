import React from "react";

const Navbar = () => {
  return (
    <div className="flex py-4 justify-between items-center">
      <div>
        <h1 className="text-3xl font-bold">Programming Boss</h1>
      </div>
      <div>
        <div className="w-24 rounded-full">
          <img src="p1.png" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

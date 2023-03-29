import React from "react";

const Header = () => {
  return (
    <header className="bg-orange-200 w-full">
      <div className="w-[96%] max-w-[1440px] mx-auto h-20 flex justify-center items-center">
        <a href="/">
          <h1 className="text-3xl font-semibold">The Meal DB</h1>
        </a>
      </div>
    </header>
  );
};

export default Header;

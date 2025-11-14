import React from "react";
import Link from "next/link";
import Button from "../common/Button";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-black shadow-md">
      {/* Top banner */}
      <div className="bg-green-500 text-center py-2 px-4 flex justify-center items-center gap-2">
        <p className="text-sm text-white">
          Overseas trip? Get the latest information on travel guides
        </p>
        <Link
          href=""
          className="text-sm bg-black text-white px-2 py-1 rounded hover:underline"
        >
          More Info
        </Link>
      </div>

      {/* Main header */}
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-black hover:underline"
        >
          alx
        </Link>

        {/* Search Section (center) */}
        <div className="flex flex-1 justify-center">
          <div className="flex items-center border rounded-full shadow-sm px-4 py-2 gap-4">
            <input
              type="text"
              placeholder="Location"
              className="outline-none text-sm text-gray-600"
            />
            <input
              type="text"
              placeholder="Check in"
              className="outline-none text-sm text-gray-600"
            />
            <input
              type="text"
              placeholder="Check out"
              className="outline-none text-sm text-gray-600"
            />
            <input
              type="text"
              placeholder="People"
              className="outline-none text-sm text-gray-600"
            />
            <button className="bg-yellow-500 text-white rounded-full p-2">
              🔍
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2">
          <Button variant="primary" size="md" rounded="md">
            Sign in
          </Button>
          <Button variant="secondary" size="md" rounded="md">
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

"use client";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav>
      <div className="text-center flex justify-between mx-20 my-7">
        <Link
          href="/"
          className="font-[ubuntu] font-bold text-4xl text-orange-500 cursor-pointer"
        >
          Blogify
        </Link>
        <button
          onClick={() => window.location.assign("/")}
          className="bg-orange-500 text-white px-5 py-3 rounded-md hover:bg-orange-600 font-medium tracking-wide"
        >
          View Blogs
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

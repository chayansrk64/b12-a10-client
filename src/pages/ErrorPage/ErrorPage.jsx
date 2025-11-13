import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex justify-center items-center gap-3 my-4 hover:bg-[#30b5b2] hover:text-white hover:px-3 hover:py-2 hover:rounded-full">
        <Link to="/" className="flex items-center gap-2 text-xl">
          <FaArrowLeftLong />
          <span className="cursor-pointer font-semibold">Back to Home</span>
        </Link>
      </div>
      <img
        className="my-6"
        src="https://i.ibb.co.com/PswfM0Qt/error-sorry-page-not-found-message-holding-sad-cute-black-cat-vector-76870840.jpg"
        alt="Page not found"
      />
    </div>
  );
};

export default ErrorPage;

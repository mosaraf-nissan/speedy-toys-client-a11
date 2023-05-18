/* eslint-disable react/prop-types */
import React from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/weblogo.png";
import BannerText from "../BannerText/BannerText";
const Header = ({ bgImage }) => {
  // https://wallpaperaccess.com/full/7730137.jpg
  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        height: `${bgImage && "100vh"}`,
      }}
      className="min-h-auto bg-cover"
    >
      <div className="navbar   text-black  font-bold">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow  rounded-box w-52"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/alltoys">All Toys</Link>
              </li>
              <li>
                <Link to="/mytoys">My Toys</Link>
              </li>
              <li>
                <Link to="addtoy">Add a Toy</Link>
              </li>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <img
            className="md:w-40 w-24 cursor-pointer  ms-5 rounded-xl "
            src={logo}
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal space-x-2 px-1">
            <li>
              <Link
                className={`${
                  bgImage
                    ? "bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  text-white"
                    : "text-white"
                }`}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  bgImage
                    ? "bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  text-white"
                    : "text-white"
                }`}
                to="/alltoys"
              >
                All Toys
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  bgImage
                    ? "bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  text-white"
                    : "text-white"
                }`}
                to="/mytoys"
              >
                My Toys
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  bgImage
                    ? "bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  text-white"
                    : "text-white"
                }`}
                to="/"
              >
                Add A Toy
              </Link>
            </li>
            <li>
              <Link
                className={`${
                  bgImage
                    ? "bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  text-white"
                    : "text-white"
                }`}
                to="/blogs"
              >
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to={bgImage ? "login" : "/login"}
            className="btn cursor-pointer bg-gradient-to-r hover:btn-accent from-purple-500 to-pink-500  "
          >
            Login
          </Link>
        </div>
      </div>
      <div>{bgImage && <BannerText></BannerText>}</div>
    </div>
  );
};

export default Header;
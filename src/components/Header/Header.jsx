import { Link, NavLink } from "react-router-dom";
import DropdownImg from "../../assets/images/header-dropdown-item.svg";
import searchInputImg from "../../assets/images/searchIcon.svg";
import WishlistIcon from "../../assets/images/likeIcon.svg";
import cardIcon from "../../assets/images/cartIcon.svg";
import profileIcon from "../../assets/images/profileIcon.svg";
import userIcon from "../../assets/images/userIcon.svg";
import orderIcon from "../../assets/images/orderIcon.svg";
import cancelIcon from "../../assets/images/cancelIcon.svg";
import reviewIcon from "../../assets/images/reviewIcon.svg";
import logoutIcon from "../../assets/images/logoutIcon.svg";
import {LuPhone} from "react-icons/lu"

import "./Header.scss";
import { useEffect, useRef } from "react";
export const Header = () => {
  const user =localStorage.getItem("user")
  const dropRef = useRef();
  useEffect(() => {
    if(user){

      dropRef.current.style.display ="block"
    }
  }, []);
  return (
    <header className="header">
      <div className="header_top bg-[#332942] text-white ">
        <div className="container top_container">
          <div className="top_shopping">

          <LuPhone size="20 "/>



            <p className="flex items-center gap-[15px]">
            <span className="">77 57</span> 
            <div className=" w-[25px] h-[2px] bg-white inline-block "></div>
            Xizmatlarimiz haqida bepul ma’lumot olish uchun qo'ng'iroq qiling! 
            <div className=" w-[25px] h-[2px] bg-white inline-block "></div>
            
            Ish vaqti: 09:00 - 18:00
            </p>
          </div>
          <div className="flex items-center gap-[15px] ">
          <NavLink to={"https://t.me/Muhammadqodir_Programmer"}>YouTube</NavLink>
          <NavLink to={"https://t.me/Muhammadqodir_Programmer"}>Telegram</NavLink>
          <NavLink to={"https://www.instagram.com/muhammadqodirkomilov02/"}>Instagram</NavLink>

          </div>
        </div>
      </div>
      <div className="header_bottom container">
        <div className="logo">
          <Link to={"/"}>Exclusive</Link>
        </div>
        <div className="nav">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/register"}>Sign Up</NavLink>
        </div>

        <div className="menu">
          <div className="searchInputDiv">
            <input
              type="text"
              className="searchInput"
              placeholder="What are you looking for?"
            />
            <img src={searchInputImg} />
          </div>
          <Link to="/wishlist">
            <img className="likeIcon" src={WishlistIcon} />
          </Link>
          <Link to="/cartPage">
            <img className="cartIcon" src={cardIcon} />
          </Link>
          <div className="dropdown" ref={dropRef}>
            <button className="ProfileButton dropbtn">
              <img className="cartIcon" src={profileIcon} />
            </button>
            <div className="dropdown-content">
              <ul>
                <li>
                  <Link to="/account">
                    <img src={userIcon} />
                    Manage My Account
                  </Link>
                </li>
                <li>
                  <Link to="/checkout">
                    <img src={orderIcon} />
                    My Order
                  </Link>
                </li>
                <li>
                  <Link to="/checkout">
                    <img src={cancelIcon} />
                    My Cancellations
                  </Link>
                </li>
                <li>
                  <Link to="/wishlist">
                    <img src={reviewIcon} />
                    My Reviews
                  </Link>
                </li>
                <li>
                  <Link to="/logout">
                    <img src={logoutIcon} />
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

import React from "react";
import { NavLink } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../assets/img/logo.jpg";
import { RxCross2 } from "react-icons/rx";
import { useRef } from "react";
import { useSelector } from "react-redux";
import BasketItem from "../UI/BasketItem";
import { Link } from "react-router-dom";


export default function Header() {
  const menuRef = useRef();
  const basketRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("menuBoxNone");
  const basketToggle = () =>
    basketRef.current.classList.toggle("menuBasketNone");

  const { totalCount ,cartItems,totalAmount} = useSelector((state) => state.cart);

  return (
    <div className="flex  w-full  z-30 fixed bg-white ">
      <div className="boxCenter justify-between  w-full p-2 headerBox">
        <div className=" w-full boxCenter  justify-between containerBox">
          <div className="boxCenter flex-col gap-1 boxCenter">
           <Link to='/'>
           <img
              alt="logo"
              src={logo}
              className="w-10 h-10 object-cover rounded-full"
            />
           </Link>
            <h5 className="font-bold whitespace-nowrap">Tasy Treat</h5>
          </div>
          <div className="flex invisible md:visible w-0 md:w-fit  items-center justify-center">
            <div className="flex p-2 boxCenter  gap-6">
              <NavLink to="/" className="hoverBar">
                Home
              </NavLink>
              <NavLink to="/foods" className="hoverBar">
                Foods
              </NavLink>
              <NavLink to="/cart" className="hoverBar">
                Cart
              </NavLink>
              {/* <NavLink to="/contact" className="hoverBar">
                Contact
              </NavLink> */}
            </div>
          </div>
          <div className="flex gap-3 ">
            <div className=" relative noneBox ">
              <SlBasket
                size={20}
                className="hoverBar "
                onClick={basketToggle}
              />
              <span className="absolute bottom-4 left-3 rounded-full bg-rose-900 text-white w-5 h-5 text-[12px] boxCenter">
                {totalCount}
              </span>
            </div>
            <AiOutlineUser size={20} className="hoverBar noneBox" />
            <AiOutlineMenu
              onClick={menuToggle}
              size={20}
              className="hoverBar visible md:invisible"
            />
          </div>
        </div>
      </div>
      <div className="flex menuBox   w-full fixed" ref={menuRef}>
        <div
          className="w-[50%] p-3  md:w-[65%] lg:w-[80%] flex h-full   bg-black bg-opacity-25 "
          onClick={menuToggle}
        ></div>
        <div className="w-[50%] p-3  md:w-[35%] lg:w-[20%] flex h-full  bg-white ">
          <RxCross2 size={20} className="cursor-pointer" onClick={menuToggle} />
          <div className="flex w-full  items-center justify-center">
            <div className="flex flex-col  p-2 w-full gap-12">
              <NavLink
                to="/"
                className="hoverBar text-lg text-center"
                onClick={menuToggle}
              >
                Home
              </NavLink>
              <NavLink
                to="/foods"
                className="hoverBar text-lg text-center"
                onClick={menuToggle}
              >
                Foods
              </NavLink>
              <NavLink to="/cart" className="hoverBar text-lg text-center">
                Cart
              </NavLink>
              <NavLink
                to="/contact"
                className="hoverBar text-lg text-center"
                onClick={menuToggle}
              >
                Contact
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex menuBox   w-full fixed" ref={basketRef}>
        <div
          className="w-[50%] p-3  md:w-[65%] lg:w-[80%] flex h-full   bg-black bg-opacity-25 "
          onClick={basketToggle}
        ></div>
        <div className="w-[50%] p-3  gap-8 flex-col md:w-[35%] lg:w-[20%] flex h-full  bg-white ">
          <div className="w-full flex">
            <RxCross2
              size={20}
              className="cursor-pointer"
              onClick={basketToggle}
            />
          </div>
          <div className=" w-full  boxStart flex-col justify-between">
            <div className="flex w-full justify-between gap-4 flex-col">
              <div className="w-full flex flex-col h-[580px] gap-3  overflow-y-auto  scroll-none  ">
                <div className="boxCenter w-full flex-col   gap-2 ">
                  {cartItems.length == 0 ? (
                    <h5 className="font-semibold text-lg text-rose-900">Your Cart Is Empty</h5>
                  ) : (
                    cartItems.map((item) => (
                      <BasketItem item={item} key={item.id} />
                    ))
                  )}
                </div>
              </div>

              <div className="w-full flex items-center justify-between  bg-rose-900 p-2">
                <span className="text-sm text-white">
                  SubTotal:<span>{totalAmount}$</span>
                </span>
                <Link to='/login' className="btn p-1">CheckOut</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

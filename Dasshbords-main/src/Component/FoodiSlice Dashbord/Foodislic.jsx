import React from "react";
import "./Foodislic.css"
import arrowright from "./Icon/arrow-right.png"
import chat from "./Icon/chat.png"
import payment from "./Icon/payment.png"
import file from "./Icon/file.png"
import foodservice from "./Icon/food-service.png"
import gear from "./Icon/gear.png"
import logo from "./Icon/logo.png"
import menu from "./Icon/menu.png"
import previous from "./Icon/previous.png"
import star from "./Icon/star.png"
import i_botoom from "./Imag/i-botoom.png"


const Foodislic=()=>{
return(
    <div className="container">
        <div className="header">
            <div className="logo"><img src={logo} alt="" /></div>
            {/* <div className="search-input"><input type="text" placeholder="Search food"/><span className="filter">Filter <img src={filter} alt="" /></span></div> */}
            {/* <div className="user-detail"><span className="r-bell"><img src={rbell} alt="" /></span><span className="user"><img src={user} alt="" /></span><span className="down-arrow"><img src={todown} alt="" /></span><button className="user-button">David Brown</button></div> */}
        </div> 
        <div className="main-container">
            <div className="left-container">
                <div className="main-options">
                    <div className="main-option-f"><span className="menu-icon">< img src={menu} alt=""/></span>Dashbord</div>
                    <div className="main-option"><img src={foodservice} alt=""/>Food Order</div>
                    <div className="main-option"><img src={star} alt="" />FeedBack</div>
                    <div className="main-option"><img src={chat} alt="" />Message</div>
                    <div className="main-option"><img src={file} alt="" />Order History</div>
                    <div className="main-option"><img src={payment} alt="" />Payment details</div>
                    <div className="main-option"><img src={gear} alt="" />Customization</div>
                </div>
                <div className="bottom-details">
                        <span className="b-i"><img src={i_botoom} alt="" /></span>
                        <div className="b-heading">How to order food?</div>
                        <p>Ordering food from our web app is a seanless and delightful experience designed to satisfy you seffortlessly... </p>
                        <div className="arrow-icon">
                        <span className="arrow-i">
                        <img src={previous} alt="" /></span>
                        <span className="arrow-ii">
                        <img src={arrowright} alt="" /></span>                            
                        </div>
                </div>
            </div>
            
                        </div>
                    </div>
)
}
export default Foodislic;
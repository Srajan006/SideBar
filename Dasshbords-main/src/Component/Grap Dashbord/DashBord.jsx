import React from "react";
import "./dashborad.css";
import Logo from "./Images/Logo.png";
import cal from "./Images/cal.png";
import chat from "./Images/chat.png";
import comp from "./Images/comp.png";
import DBox from "./Images/DBox.png";
import downarrow from "./Images/downarrow.png";
import filepen from "./Images/filepen.png";
import Folder from "./Images/Folder.png";
import home from "./Images/home.png";
import mail from "./Images/mail.png";
import search from "./Images/search.png";
import sun from "./Images/sun.png";
import padlock from "./Images/padlock.png";
import totop from "./Images/to-top.png";
import u from "./Images/united-states.png";
import gear from "./Images/gear.png";
import settings from "./Images/settings.png";
import dots from "./Images/dots.png";
import bell from "./Images/bell.png";
import user from "./Images/user.png";
import bag from "./ROImg/bag.png";
import bbag from "./ROImg/bbag.png";
import obag from "./ROImg/obag.png";
import show from "./ROImg/show.png";
import tshirt from "./ROImg/tshirt.png";
import ograp from "./EAImg/ograp.png";
import mgrap from "./MAImg/mgrap.png";
import tuperr from "./MAImg/tuperr.png";
import tlower from "./MAImg/tlower.png";
import ui from "./MAImg/upper-icon.png";
import li from "./MAImg/lower-icon.png";
const DashBord = () => {
  return (
    <div>
      <div className="container">
        <div className="left-container">
          <div className="heading">
            <img src={Logo} alt="" />
            <span>DASHLY</span>
          </div>
          <div className="options-1">
            <div className="option">
              <img src={home} alt="" />
              <img src={totop} alt="" className="down-icon" />
              <button>Dashbords</button>
            </div>
            <div className="sub">
              <div className="sub-options">Default</div>
              <div className="sub-options">E-Commerce</div>
              <div className="sub-options">
                CRM<span>New</span>
              </div>
            </div>
            <div className="option">
              <img src={downarrow} alt="" className="down-icon" />
              <img src={DBox} alt="" />
              <button>Pages</button>
            </div>
            <div className="option">
              <img src={chat} alt="" />
              <button>Chat</button>
              <div className="new"></div>
            </div>
            <div className="option">
              <img src={cal} alt="" />
              <button>Calendar</button>
            </div>
            <div className="option">
              <img src={downarrow} alt="" className="down-icon" />
              <img src={mail} alt="" />
              <button>Email</button>
            </div>
            <div className="option">
              <img src={downarrow} alt="" className="down-icon" />
              <img src={filepen} alt="" />
              <button>Tasks</button>
            </div>
            <div className="option">
              <img src={Folder} alt="" />
              <button>File Manager</button>
            </div>
            <div className="option">
              <img src={downarrow} alt="" className="down-icon" />
              <img src={padlock} alt="" />
              <button>Authentication</button>
            </div>
          </div>
          <div className="options-2">
            <div className="option">
              <img src={filepen} alt="" />
              <button>
                Documentation<span>v1.3</span>
              </button>
            </div>
            <div className="option">
              <img src={comp} alt="" />
              <button>Components</button>
            </div>
          </div>
          <div className="options-img">
            <img src="" alt="" />
          </div>
        </div>
        <div className="right-container">
          <div className="heade">
            <div className="seach-bar">
              <input type="text" placeholder="Search..." name="" id="" />
              <img src={search} alt="" />
            </div>
            <div className="side-nav">
              <div className="icons">
                <img src={sun} alt="" />
              </div>
              <div className="icons">
                <img src={u} alt="" />
              </div>
              <div className="icons">
                <img src={bell} alt="" />
                <spna className="num">20+</spna>
              </div>
              <div className="icons">
                <img src={gear} alt="" />
              </div>
              <div className="icons">
                <img src={settings} alt="" />
              </div>
              <div className="icons">
                <img src={user} alt="" />
                <span className="green"></span>
              </div>
            </div>
          </div>
          <div className="brand">Dashboard</div>
          <div className="bottom-container">
            <div className="colum-1">
              <div className="recent-order">
                <div className="title">
                  <p>RECENT ORDERS</p>
                  <img src={dots} alt="" />
                </div>
                <div className="item-heading">
                  <div className="item-no">No.</div>
                  <div className="item-id">Customer ID</div>
                  <div className="item-name">Product name</div>
                  <div className="item-date">Order date</div>
                  <div className="item-price">Price</div>
                  <div className="item-status">Status</div>
                  <div className="item-customer">Customer</div>
                </div>
                <div className="item-type">
                  <div className="item-no">1</div>
                  <div className="item-id">#321762</div>
                  <div className="item-name">
                    <img src={bag} alt="" />
                    Black Backpack
                  </div>
                  <div className="item-date">03.26.2022</div>
                  <div className="item-price">$205.81</div>
                  <div className="item-status">
                    <span className="paid">Paid</span>
                  </div>
                  <div className="item-customer">Nicole Hendrix</div>
                </div>
                <div className="item-type">
                  <div className="item-no">2</div>
                  <div className="item-id">#943947</div>
                  <div className="item-name">
                    <img src={show} alt="" />
                    Black Sneakers
                  </div>
                  <div className="item-date">08.02.2022</div>
                  <div className="item-price">$170.97</div>
                  <div className="item-status">
                    <span className="paid">Paid</span>
                  </div>
                  <div className="item-customer">Astra Farley</div>
                </div>
                <div className="item-type">
                  <div className="item-no">3</div>
                  <div className="item-id">#618789</div>
                  <div className="item-name">
                    <img src={obag} alt="" />
                    Brown Purse
                  </div>
                  <div className="item-date">03.14.2022</div>
                  <div className="item-price">$261.61</div>
                  <div className="item-status">
                    <span className="pending">Pending</span>
                  </div>
                  <div className="item-customer">Gray Anderson</div>
                </div>
                <div className="item-type">
                  <div className="item-no">4</div>
                  <div className="item-id">#323773</div>
                  <div className="item-name">
                    <img src={bbag} alt="" />
                    Black Fashion Backpack
                  </div>
                  <div className="item-date">03.17.2022</div>
                  <div className="item-price">$390.44</div>
                  <div className="item-status">
                    <span className="shipped">Shipeed</span>
                  </div>
                  <div className="item-customer">Kenyon Hodge</div>
                </div>
                <div className="item-type">
                  <div className="item-no">5</div>
                  <div className="item-id">#748792</div>
                  <div className="item-name">
                    <img src={tshirt} alt="" />
                    Grey T-shirt
                  </div>
                  <div className="item-date">12.15.2022</div>
                  <div className="item-price">$69.82</div>
                  <div className="item-status">
                    <span className="pending">Pending</span>
                  </div>
                  <div className="item-customer">Kiayada Beard</div>
                </div>
              </div>
              <div className="email-activity">
                <div className="ea-head">
                  <p>EMAIL ACTIVITY</p>
                  <img src={dots} alt="" />
                </div>
                <div className="Grap">
                  <img src={ograp} alt="" />
                </div>
                <div className="op">
                  <div className="ops">
                    <span className="opened"></span>Opened
                  </div>
                  <div className="ops">
                    <span className="clicked"></span>Clicked
                  </div>
                  <div className="ops">
                    <span className="bounce"></span>Bounce
                  </div>
                  <div className="ops">
                    <span className="spam"></span>Spam
                  </div>
                </div>
                <div className="para">
                  <p>Activity in the last 30 days</p>
                  <div className="sm-button">
                    <button>See more</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="colum-2">
              <div className="monthly-activity">
                <div className="ma-head">
                  <div className="h">MONTHLY ACTIVITY</div>
                  <div className="s-h">
                    <div className="r-h">
                      <span className="er"></span>
                      <p>EXPECTED REVENUE</p>
                    </div>
                    <div className="r-h">
                      <span className="ar"></span>
                      <p>ACTUAL REVENUE</p>
                    </div>
                  </div>
                </div>
                <div className="a-grap-container">
                  <div className="amounts">
                    <div className="amo">$45k</div>
                    <div className="amo">$40k</div>
                    <div className="amo">$35k</div>
                    <div className="amo">$30k</div>
                    <div className="amo">$25k</div>
                    <div className="amo">$20k</div>
                    <div className="amo">$15k</div>
                    <div className="amo">$10k</div>
                    <div className="amo">$5K</div>
                    <div className="amo-l">0</div>
                  </div>
                  <div className="grap-img">
                    <img src={mgrap} alt="" />
                  </div>
                </div>
                <div className="bottom-grap">
                  <div className="month">Jan</div>
                  <div className="month">Feb</div>
                  <div className="month">Mar</div>
                  <div className="month">Apr</div>
                  <div className="month">May</div>
                  <div className="month">Jun</div>
                  <div className="month">Jul</div>
                  <div className="month">Aug</div>
                  <div className="month">Sep</div>
                  <div className="month">Oct</div>
                  <div className="month">Nov</div>
                  <div className="month-l">Dec</div>
                </div>
              </div>
              <div className="row-2">
                <div className="total-sale">
                  <div className="ts-head">
                    <div className="ts-heading">TOTAL SALES</div>
                    <img src={dots} alt="" />
                  </div>
                  <div className="ts-bottom">
                    <div className="ts-amount">
                      <a href="">$74,935</a>
                      <div className="bottom-amount">
                        <span className="upper">
                          <img src={ui} alt="" /><a href="">12%</a>
                        </span><spna className="from">from : 65,934</spna>
                      </div>
                    </div>
                    <div className="upper-grap"><img src={tuperr} alt="" /></div>
                  </div>
                </div>
                <div className="total-expenses">
                <div className="ts-head">
                    <div className="ts-heading">TOTAL EXPENSES</div>
                    <img src={dots} alt="" />
                  </div>
                  <div className="ts-bottom">
                    <div className="ts-amount">
                      <a href="">$102,192</a>
                      <div className="bottom-amount">
                        <span className="lower">
                          <img src={li} alt="" /><a href="">7%</a>
                        </span><spna className="from">from : 109,887</spna>
                      </div>
                    </div>
                    <div className="upper-grap"><img src={tlower} alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBord;

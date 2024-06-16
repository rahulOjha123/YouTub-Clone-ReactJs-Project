import React from "react";
import "../Navbar/Navbar.css";
function Navbar({setSidebar}) {

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <span className="menu-icon"onClick={()=>setSidebar((prev)=>prev===false?true:false)}>
          <i class="fa-solid fa-bars"></i>
        </span>

        <img
          className="logo"
          src="https://cdn3.iconfinder.com/data/icons/2018-social-media-logotypes/1000/2018_social_media_popular_app_logo_youtube-512.png"
          alt="logo"
        />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="search" />

          {/* search-icon */}
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>

      <div className="nav-right flex-div">
        {/* <img src="" alt="" /> */}
        <span>
          <i class="fa-solid fa-upload"></i>
        </span>

        {/* <img src="" alt="" /> */}

        <span>
          <i class="fa-solid fa-upload"></i>
        </span>
     
        <span>
          <i class="fa-sharp fa-regular fa-bell"></i>
        </span>

        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="img-user"
        />
      </div>
    </nav>
  );
}

export default Navbar;

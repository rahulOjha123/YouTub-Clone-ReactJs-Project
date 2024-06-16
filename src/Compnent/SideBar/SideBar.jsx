import React from "react";
import "../SideBar/SideBar.css";

function SideBar({sidebar,category,setCategory}) {
  return (
    <div className={`sidebar ${sidebar? "":"small-sidebar"}`}>
      <div className="sortcut-links">
        <div className={`side-link ${category===0? "active":""}`}onClick={()=>setCategory(0)}>
          <span className="side-icons">
            <i class="fa-solid fa-house"></i>
          </span>
          <p>Home</p>
        </div>
        <div className={`side-link ${category===20? "active":""}`}onClick={()=>setCategory(20)}>
          <span className="side-icons">
          <i class="fa-solid fa-music"></i>
          </span>
          <p>Gamepad</p>
        </div>
        <div className={`side-link ${category===2? "active":""}`}onClick={()=>setCategory(2)}>
          <span className="side-icons">
          <i class="fa-solid fa-music"></i>
          </span>
          <p>AutoMobiles</p>
        </div>
        <div className={`side-link ${category===17 ? "active":""}`}onClick={()=>setCategory(17)}>
          <span className="side-icons">
          <i class="fa-solid fa-music"></i>
          </span>
          <p>Sports</p>
        </div>
        <div className={`side-link ${category===24? "active":""}`}onClick={()=>setCategory(24)}>
          <span className="side-icons">
            <i class="fa-solid fa-music"></i>
          </span>
          <p>Entertenment</p>
        </div>
        <div className={`side-link ${category===28? "active":""}`}onClick={()=>setCategory(28)}>
          <span className="side-icons">
          <i class="fa-solid fa-music"></i>
          </span>
          <p>Technology</p>
        </div>
        <div className={`side-link ${category===10? "active":""}`}onClick={()=>setCategory(10)}>
          <span className="side-icons">
          <i class="fa-solid fa-music"></i>
          </span>
          <p>Music</p>
        </div>
        <div className={`side-link ${category===22? "active":""}`}onClick={()=>setCategory(22)}>
          <span className="side-icons">
            <i class="fa-solid fa-blog"></i>
          </span>
          <p>Blogs</p>
        </div>
        <div className={`side-link ${category===0? "active":""}`}onClick={()=>setCategory(25)}>
          <span className="side-icons">
            <i class="fa-solid fa-newspaper"></i>
          </span>
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3>Subscribed</h3>
        <div className="side-link">
            <img src="https://t4.ftcdn.net/jpg/02/24/86/95/360_F_224869519_aRaeLneqALfPNBzg0xxMZXghtvBXkfIA.jpg" alt="" />
            <p>PewDiePie</p>
        </div>
        <div className="side-link">
          <img src="https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1369675164.1715299200&semt=sph" alt="" />
            <p>MrBeast</p>
        </div>
        <div className="side-link">
           <img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="" />
    
            <p>Justin Bieber</p>
        </div>
        <div className="side-link">
            <img src="https://img.freepik.com/free-photo/stylish-handsome-indian-man-tshirt-pastel-wall_496169-1571.jpg" alt="" />
            <p>5-Minute Crafts</p>
        </div>
        <div className="side-link">
           <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" alt="" />
           
            <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;

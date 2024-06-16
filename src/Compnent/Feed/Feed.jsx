import React, { useEffect, useState } from "react";
import "../Feed/Feed.css";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";

function Feed({ category }) {

  const [data,setData]=useState([])
  

 
  
  const fetchData = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/video?part=snippet%2CcontentDetails%2Cstatlistics&Cstatistics&chart=mostPopular&maxResults=50&regionCode=India&videoCategoryId= ${category}&key=${API_KEY}`;
    await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
  };
  useEffect(()=>{
    fetchData()
  },[category])

  return (
    <div className="feed">
      <Link to={"video/20/4521"} className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661284807863-89df07cde422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </Link>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661582611532-f3aa2cb5b370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllfGVufDB8fDB8fHww"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1458636689/photo/black-couple-smiling-at-the-cinema.webp?b=1&s=170667a&w=0&k=20&c=oAcAyxGdsYkMRiU8x72mNMLzGHsy63NZdbq7DLgI5IA="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1492206237/photo/happy-couple-buying-popcorn-and-drinks-in-cinema.webp?b=1&s=170667a&w=0&k=20&c=djI8CD8xThlZGU7dKqcss69-VNJS420bzRYcI55soNQ="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://1847884116.rsc.cdn77.org/tamil/gallery/movies/coolie2024/coolie_stills_5.jpg"
          alt="card-pghtimg"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3111/x_0,y_306,w_5000,h_2500,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/crescent-water-park-indore/DSC08993_vq1lji"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661284807863-89df07cde422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661582611532-f3aa2cb5b370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllfGVufDB8fDB8fHww"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1458636689/photo/black-couple-smiling-at-the-cinema.webp?b=1&s=170667a&w=0&k=20&c=oAcAyxGdsYkMRiU8x72mNMLzGHsy63NZdbq7DLgI5IA="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1492206237/photo/happy-couple-buying-popcorn-and-drinks-in-cinema.webp?b=1&s=170667a&w=0&k=20&c=djI8CD8xThlZGU7dKqcss69-VNJS420bzRYcI55soNQ="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://1847884116.rsc.cdn77.org/tamil/gallery/movies/coolie2024/coolie_stills_5.jpg"
          alt="card-pghtimg"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3111/x_0,y_306,w_5000,h_2500,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/crescent-water-park-indore/DSC08993_vq1lji"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661284807863-89df07cde422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661582611532-f3aa2cb5b370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllfGVufDB8fDB8fHww"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1458636689/photo/black-couple-smiling-at-the-cinema.webp?b=1&s=170667a&w=0&k=20&c=oAcAyxGdsYkMRiU8x72mNMLzGHsy63NZdbq7DLgI5IA="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1492206237/photo/happy-couple-buying-popcorn-and-drinks-in-cinema.webp?b=1&s=170667a&w=0&k=20&c=djI8CD8xThlZGU7dKqcss69-VNJS420bzRYcI55soNQ="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://1847884116.rsc.cdn77.org/tamil/gallery/movies/coolie2024/coolie_stills_5.jpg"
          alt="card-pghtimg"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3111/x_0,y_306,w_5000,h_2500,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/crescent-water-park-indore/DSC08993_vq1lji"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661284807863-89df07cde422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661582611532-f3aa2cb5b370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllfGVufDB8fDB8fHww"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1458636689/photo/black-couple-smiling-at-the-cinema.webp?b=1&s=170667a&w=0&k=20&c=oAcAyxGdsYkMRiU8x72mNMLzGHsy63NZdbq7DLgI5IA="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1492206237/photo/happy-couple-buying-popcorn-and-drinks-in-cinema.webp?b=1&s=170667a&w=0&k=20&c=djI8CD8xThlZGU7dKqcss69-VNJS420bzRYcI55soNQ="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://1847884116.rsc.cdn77.org/tamil/gallery/movies/coolie2024/coolie_stills_5.jpg"
          alt="card-pghtimg"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3111/x_0,y_306,w_5000,h_2500,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/crescent-water-park-indore/DSC08993_vq1lji"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661284807863-89df07cde422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661582611532-f3aa2cb5b370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllfGVufDB8fDB8fHww"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1458636689/photo/black-couple-smiling-at-the-cinema.webp?b=1&s=170667a&w=0&k=20&c=oAcAyxGdsYkMRiU8x72mNMLzGHsy63NZdbq7DLgI5IA="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1492206237/photo/happy-couple-buying-popcorn-and-drinks-in-cinema.webp?b=1&s=170667a&w=0&k=20&c=djI8CD8xThlZGU7dKqcss69-VNJS420bzRYcI55soNQ="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://1847884116.rsc.cdn77.org/tamil/gallery/movies/coolie2024/coolie_stills_5.jpg"
          alt="card-pghtimg"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3111/x_0,y_306,w_5000,h_2500,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/crescent-water-park-indore/DSC08993_vq1lji"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661284807863-89df07cde422?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://plus.unsplash.com/premium_photo-1661582611532-f3aa2cb5b370?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllfGVufDB8fDB8fHww"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1458636689/photo/black-couple-smiling-at-the-cinema.webp?b=1&s=170667a&w=0&k=20&c=oAcAyxGdsYkMRiU8x72mNMLzGHsy63NZdbq7DLgI5IA="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://media.istockphoto.com/id/1492206237/photo/happy-couple-buying-popcorn-and-drinks-in-cinema.webp?b=1&s=170667a&w=0&k=20&c=djI8CD8xThlZGU7dKqcss69-VNJS420bzRYcI55soNQ="
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://1847884116.rsc.cdn77.org/tamil/gallery/movies/coolie2024/coolie_stills_5.jpg"
          alt="card-pghtimg"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className="card">
        <img
          src="https://res.cloudinary.com/simplotel/image/upload/w_5000,h_3111/x_0,y_306,w_5000,h_2500,r_0,c_crop,q_80,fl_progressive/w_900,f_auto,c_fit/crescent-water-park-indore/DSC08993_vq1lji"
          alt="card-img"
        />
        <h2>
          Best channel to learn coding that help you to be a web developer
        </h2>
        <h3>Greatestack </h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
    </div>
  );
}

export default Feed;

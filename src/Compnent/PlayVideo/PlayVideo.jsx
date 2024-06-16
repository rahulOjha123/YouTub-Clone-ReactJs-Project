import React from "react";
import "../PlayVideo/PlayVideo.css";

function PlayVideo() {
  return (
    <div className="play-video">
      <iframe
        width="640"
        height="360"
        src="https://www.youtube.com/embed/6Yz4phEt57w"
        title="मेरा आपकी कृपा से सब काम हों रहा | MERA APKI KIRPA SE SAB KAM HO RHA  | Adhista Anushka New Bhajan"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      <h3>Best YouTube Channel To Learn Web Development</h3>
      <div className="play-video-info">
        <p>1525 views &bull; 2days ago</p>
        <div>
          <span>
            <i className="fa-solid fa-thumbs-up"></i>125
          </span>
          <span>
            <i className="fa-solid fa-thumbs-down"></i>2
          </span>
          <span>
            <i className="fa-solid fa-share"></i>Share
          </span>
          <span><i className="fa-solid fa-bookmark"></i>Save</span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src="https://thumbs.dreamstime.com/b/funny-shocked-man-covering-mouth-hand-laughs-making-big-eyes-oops-absurd-accident-frightened-guy-red-sweater-opened-mouth-287432688.jpg"
          alt="hello"
          style={{ width: "40px", height: "40px" }}
        />
        <div>
          <p>GreatStack</p>
          <span>1M Subscribers</span>
        </div>
        <button>Subscriber</button>
      </div>
      <div className="vid-description">
        <p>chanel that makes learning Easy</p>
        <p>Subsribe GratStack to Watch More Tutorials on web Development</p>
        <hr />
        <h4>130 comments</h4>
        <div className="comment">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="hello"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <h3>
              Jack Nichlson <span>1 day ago</span>
            </h3>
            <p>
              A global compter metwor providing a varitety of infomrmtion and of
              interconnected networks using standardize communcation protcols.
            </p>
            <div className="comment-action">
              <span>
                <i class="fa-solid fa-thumbs-up"></i>
              </span>
              <span className="span-like">244</span>
              <i class="fa-sharp fa-solid fa-thumbs-down"></i>
            </div>
          </div>
        </div>
        <div className="comment">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="hello"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <h3>
              Jack Nichlson <span>1 day ago</span>
            </h3>
            <p>
              A global compter metwor providing a varitety of infomrmtion and of
              interconnected networks using standardize communcation protcols.
            </p>
            <div className="comment-action">
              <span>
                <i class="fa-solid fa-thumbs-up"></i>
              </span>
              <span className="span-like">244</span>
              <i class="fa-sharp fa-solid fa-thumbs-down"></i>
            </div>
          </div>
        </div>
        <div className="comment">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="hello"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <h3>
              Jack Nichlson <span>1 day ago</span>
            </h3>
            <p>
              A global compter metwor providing a varitety of infomrmtion and of
              interconnected networks using standardize communcation protcols.
            </p>
            <div className="comment-action">
              <span>
                <i class="fa-solid fa-thumbs-up"></i>
              </span>
              <span className="span-like">244</span>
              <i class="fa-sharp fa-solid fa-thumbs-down"></i>
            </div>
          </div>
        </div>
        <div className="comment">
          <img
            src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
            alt="hello"
            style={{ width: "40px", height: "40px" }}
          />
          <div>
            <h3>
              Jack Nichlson <span>1 day ago</span>
            </h3>
            <p>
              A global compter metwor providing a varitety of infomrmtion and of
              interconnected networks using standardize communcation protcols.
            </p>
            <div className="comment-action">
              <span>
                <i className="fa-solid fa-thumbs-up"></i>
              </span>
              <span className="span-like">244</span>
              <i className="fa-sharp fa-solid fa-thumbs-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlayVideo;

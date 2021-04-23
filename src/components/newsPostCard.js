import React from "react";
import dayjs from "dayjs";
import banglaTimeConverter from "../utils/banglaTimeConverter";

const NewsPostCard = ({ newsData, featuredPost, noImage, noDesc ,className}) => {
  // const col = featuredPost ? "col-lg-8" : "col-lg-4";

  return (
    <>
      <div className={`${className ? className:""}`}>
        <div
          className={`post_card ${featuredPost && "featured_post"} d-flex ${
            noDesc ? "no_desc" : ""
          }`}
        >
          <div className="title_and_desc">
            <h2 className="title">{newsData?.title}</h2>
            {/* hide description news type with no description */}
            {!noDesc && (
              <p className="description">
                {newsData?.description.slice(0, 150) + "........"}
              </p>
            )}
            <p className="description timestamp">
              {banglaTimeConverter(dayjs(newsData?.time).fromNow())}
            </p>
          </div>
          {/* hide image news type with no image */}
          {!noImage && (
            <div className="photo">
              <img style={{ width: "100%" }} src={newsData?.photo} alt="" />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NewsPostCard;

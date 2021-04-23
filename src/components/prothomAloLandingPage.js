import React, { useEffect, useState } from "react";
import NewsPostCard from "./newsPostCard";

const ProthomAloLandingPage = () => {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res?.json())
      .then((data) => setNewsList(data));
  }, []);

  const renderNewsBasedOnType = (newsData, index) => {
    // First News Post type is Featured Type Post
    if (index === 0) {
      return (
        <NewsPostCard className="col-lg-8" newsData={newsData} featuredPost />
      );

      //  Next 4 News Post type is No Image Type Post
    } else if (index > 0 && index < 5) {
      return <NewsPostCard className="col-lg-4" newsData={newsData} noImage />;

      // Rest of the Posts are No Description Type Post
    } else {
      return (
        <NewsPostCard
          className="col-lg-6 col-xl-4"
          newsData={newsData}
          noDesc
        />
      );
    }
  };
  return (
    <>
      <div className="container">
        {/* Site Logo Section*/}
        <div className="text-center logo">
          <img
            src="https://assets.prothomalo.com/prothomalo/assets/palo-bangla-bb996cdb70d2e0ccec8c.svg"
            alt=""
          />
        </div>

        <div className="row">
          <div className="col-md-12 col-lg-9">
            <div className="row nestedBorder">
              {/* Posts Section */}
              {newsList.map((item, index) =>
                renderNewsBasedOnType(item, index)
              )}
            </div>
          </div>
          {/* <div className="col-md-3">
          
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProthomAloLandingPage;

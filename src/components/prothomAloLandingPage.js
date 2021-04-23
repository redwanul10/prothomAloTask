import React, { useEffect, useState } from "react";
import NewsPostCard from "./newsPostCard";

const ProthomAloLandingPage = () => {
  const [newsList, setNewsList] = useState([]);
  const [sidebarNewsList, setSidebarNewsList] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res?.json())
      .then((data) => {
        // sort posts by sort order
        const sortedList = data.sort(function (a, b) {
          return a?.sort - b?.sort;
        });
        // extract last 2 post for sidebar
        setNewsList(sortedList.slice(0, sortedList?.length - 2));
        setSidebarNewsList(sortedList.slice(sortedList.length - 2));
      });
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
          <div className="col-md-12 col-lg-3">
            <div className="row nestedBorder">
              <div className="col-md-12">
                <img style={{width:"100%"}}src="https://media-eng.dhakatribune.com/uploads/2019/08/nagad-is-set-to-begin-nagad-e-lakhpati-campaign-pic-1567106404728.jpg" />
              </div>
              {sidebarNewsList.map((newsData, index) => (
                <NewsPostCard
                  className="col-lg-12"
                  newsData={newsData}
                  noDesc
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProthomAloLandingPage;

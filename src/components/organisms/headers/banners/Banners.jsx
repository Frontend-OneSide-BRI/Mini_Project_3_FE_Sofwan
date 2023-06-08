import React, { useEffect, useState } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useFetch from "../../../../hooks/useFetch";
import Img from "../../lazyLoadImage/Img";
import ContentWrapper from "../../contentWrapper/ContentWrapper";

const Banners = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg =
      url.backdrop +
      data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className="banners">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}
      <div className="opacity-layer"></div>

      <ContentWrapper>
        <div className="bannerContent">
          <span className="title">Welcome Party</span>
          <span className="subTitle">Have Fun, Enjoy, for Watching Movie</span>
          <div className="searchInput">
            <input
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              type="text"
              placeholder="Search brimovie ..."
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Banners;

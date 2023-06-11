import React,{useState} from "react";
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import "./style.scss";
import SwitchTabs from "../../../atoms/button/SwitchTabs";
import useFetch from "../../../../hooks/useFetch";
import Carousel from "../../../molecules/card/Carousel";
const Popular = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };
  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">Popular</span>
        <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} /> 
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};

export default Popular;

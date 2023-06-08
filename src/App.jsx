import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import HomePage from "./pages/homePage/HomePage";
import Headers from "./components/organisms/headers/Headers";
import Footers from "./components/organisms/footers/Footers";
import Page404 from "./pages/notFound/Page404";
import SearchResult from "./pages/searchResult/SearchResult";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfig();
  }, []);
  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      }
      dispatch(getApiConfiguration(url));
    });
  };
  return (
    <BrowserRouter>
    {/* <Headers/> */}
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/search/:query" element={<SearchResult/>}/>
      <Route path="*" element={<Page404/>}/>
    </Routes>
    {/* <Footers/> */}
    </BrowserRouter>
  )
}

export default App;

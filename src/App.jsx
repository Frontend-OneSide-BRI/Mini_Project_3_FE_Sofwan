import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration,getGenres } from "./store/homeSlice";
import HomePage from "./pages/homePage/HomePage";
import Headers from "./components/organisms/headers/Headers";
import Footers from "./components/organisms/footers/Footers";
import Page404 from "./pages/notFound/Page404";
import SearchResult from "./pages/searchResult/SearchResult";
import Details from "./pages/detailMovie/Details";
import Explore from "./pages/explore/Explore";
import Login from "./pages/login/Login";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  useEffect(() => {
    fetchApiConfig();
    genresCall()
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
  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
        promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
        return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
};
  return (
    <BrowserRouter>
    <Headers/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/:mediaType/:id" element={<Details/>} />
      <Route path="/search/:query" element={<SearchResult/>}/>
      <Route path="/explore/:mediaType" element={<Explore />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Page404/>}/>
    </Routes>
    <Footers/>
    </BrowserRouter>
  )
}

export default App;

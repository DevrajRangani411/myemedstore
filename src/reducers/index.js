import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import Blog from "./blog";
import ContactUs from "./contactUs"
import Portfolio from "./portfolio"
import Aboutus from "./aboutus"
import Home from "./Home"

export default history =>
    combineReducers({
        router: connectRouter(history),
        Blog,
        ContactUs,
        Portfolio,
        Aboutus,
        Home
    });

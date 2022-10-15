import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Menu} from "./components/menu/Menu";
import PortfolioPage from "./pages/portfolioPage/PortfolioPage";
import PostsPage from "./pages/postsPage/PostsPage";
import AboutUs from "./pages/aboutUs/AboutUs";
import Post from "./components/post/Post";

function App() {
    return (
        <BrowserRouter>
            <Menu/>
            <Routes>
                <Route path="/" element={<PortfolioPage/>}/>
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/posts" element={<PostsPage/>}/>
                <Route path="/posts/:id" element={<Post/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

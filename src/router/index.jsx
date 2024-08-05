import { useRoutes } from "react-router-dom";
import BlogPostList from "../views/blogPosts/BlogPostList";
import Signup from "../views/signup/Signup";

const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <BlogPostList />
        },
        {
            path: "/signup",
            element: <Signup />
        }
    ]);    
}

export default Router;
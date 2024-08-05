import { useRoutes } from "react-router-dom";
import BlogPostList from "../views/blogPosts/BlogPostList";
import Signup from "../views/signup/Signup";
import SignIn from "../views/signin/SignIn";
import CreatePost from "../views/createPost/CreatePost";
import EditPost from "../views/editPost/EditPost";
import ViewPostById from "../views/viewPostById/ViewPostById";



const Router = () => {
    return useRoutes([
        {
            path: "/",
            element: <BlogPostList />
        },
        {
            path: "/signup",
            element: <Signup />
        },
        {
            path: "/signin",
            element: <SignIn />
        },
        {
            path: "/create",
            element: <CreatePost />
        },
        {
            path: "/edit/:id",
            element: <EditPost />
        },
        {
            path: "/post/:id",
            element: <ViewPostById />
        }
    ]);    
}

export default Router;
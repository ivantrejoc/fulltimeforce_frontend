import { useRoutes } from "react-router-dom";
import BlogPostList from "../views/blogPosts/BlogPostList";
import Signup from "../views/signup/Signup";
import SignIn from "../views/signin/SignIn";
import ConnectedCreatePost from "../views/createPost/CreatePost";
import EditPost from "../views/editPost/EditPost";
import ViewPostById from "../views/viewPostById/ViewPostById";
import NotFound from "../views/notFound/NotFound";
import PrivateRouter from "../components/privateRouter/PrivateRouter";

const Router = () => {
  return useRoutes([
    {
      path: "/",
      element: <PrivateRouter element={BlogPostList} />
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
      element: <PrivateRouter element={ConnectedCreatePost} />
    },
    {
      path: "/edit/:id",
      element: <PrivateRouter element={EditPost} />
    },
    {
      path: "/post/:id",
      element: <PrivateRouter element={ViewPostById} />
    },
    {
      path: "*",
      element: <NotFound />
    }
      
  ]);
};

export default Router;

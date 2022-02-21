import React from "react";
import { useSelector } from "react-redux";

import Post from "./Post";

const PostList = () => {
    const data = useSelector((state) => state.post.list);
    const likedPostList = useSelector ((state) => state.post.likedPostList);

    return(

    )

};

export default PostList;
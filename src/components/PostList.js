import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { apis } from "../shared/api";
import InfinityScroll from "../shared/InfinityScroll";

import Post from "./Post";

const PostList = () => {
    // const [post_list, setPostList] = useState([]);
    const data = useSelector((state) => state.post.list)
    const likeList = useSelector((state) => state.post.likeList)

    console.log(data)

    // useEffect(() => {
    //     apis.getPost()
    //         .then(function (response) {
    //             setPostList(response.data)
    //         }).catch(function (error) {
    //             console.log(error)
    //         })
    // }, [])


    return (
        <React.Fragment>
            <InfinityScroll>
                {data && data.map((p, i) => {
                    
                    const postId = p.id;
                    const userId = p.uid;
                    const nickname = p.nickname;
                    const imageUrl = p.imageUrl;
                    const likeCount = p.likeCount;
                    const commentCount = p.commentCount;
                    const content = p.content;
                    const createdAt = p.createdAt;

                    // console.log(p)
                    // let liked = false;
                    // for (let i = 0; i < likeList.length; i++) {
                    //     if(likeList[i] === postId) {
                    //         liked = true;
                    //     }
                    // }

                    return (
                        <Post
                            postId={postId}
                            userId={userId}
                            createdAt={createdAt}
                            imageUrl={imageUrl}
                            nickname={nickname}
                            likeCount={likeCount}
                            commentCount={commentCount}
                            content={content}
                            i={i}
                            // liked={liked}
                        />
                    )
                })
                }
            </InfinityScroll>
        </React.Fragment>
    )

};

export default PostList;

import React, { useState } from "react";
import styled from "styled-components";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";

import Modal from "./Modal";

import { BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IoMdPaperPlane } from "react-icons/io";
import { BsChat } from "react-icons/bs";
import { RiBookmarkLine } from "react-icons/ri";
import { CgSmile } from "react-icons/cg";
import { addLikeDB } from "../redux/modules/likeReducer";
import { delPostDB } from "../redux/modules/postReducer";
import { actionCreators as commentActions } from "../redux/modules/commentReducer";
import { actionCreators as userActions } from "../redux/modules/userReducer";
import User from "../redux/modules/userReducer";
export default function Post(props) {
  //props 값
  console.log(props);
  const post = props;
  const postId = post.postId;
  const imageUrl = post.imageUrl;
  const liked = post.liked;
  const createdAt = post.createdAt.split("T")[1].split(":")[0];

  //디스패치
  const dispatch = useDispatch();

  //좋아요
  const [like, setLike] = useState(liked);
  const [addliked, setAddLiked] = useState(0);
  const [delliked, setDelLiked] = useState(0);

  // 댓글
  const [commentList, setCommentList] = useState([]);
  const user = useSelector((state) => state.user);
  const userinfo = useSelector((state) => state.user.userinfo);
  const comment = useSelector((state) => state.comment);
  const comment_list = useSelector((state) => state.comment.list);

  const [hasComment, setHasComment] = useState("");

  //포스트 헤더의 더보기
  const [moreInfo, setMoreInfo] = useState(false);

  //댓글 밸류값
  const changeComment = (e) => {
    setHasComment(e.target.value);
  };

  //댓글 추가 및 상태값 유지
  const clickComment = () => {
    dispatch(commentActions.addCommentDB(postId, hasComment));
  };
  React.useEffect(() => {
    dispatch(commentActions.getCommentDB());
  }, []);

  //포스트 삭제
  const deletePost = () => {
    alert("정말 삭제하시겠습니까?").then((response) => {
      console.log("삭제 완료");
      dispatch(delPostDB(postId));
      setMoreInfo(false);
    });
  };

  //좋아요 추가
  const addLike = () => {
    setLike(true);
    setAddLiked(1);
    setDelLiked(0);
    addLikeDB(postId);
  };

  //좋아요 삭제
  const delLike = () => {
    setLike(false);
    setAddLiked(0);
    setDelLiked(-1);
    addLikeDB(postId);
  };

  return (
    <Wrap>
      <PostHeader>
        {/* 포스트 헤더 */}
        <HeaderLeft>
          <PostTitleImgArea>
            <PostTitleImg
              src="https://img1.daumcdn.net/thumb/R300x0/?fname=https://k.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg"
              alt="프로필사진"
            />
          </PostTitleImgArea>
          <PostTitle>{post.nickname}</PostTitle>
        </HeaderLeft>
        <PostMenu>
          <MenuArea>
            <BsThreeDots size="20" onClick={() => setMoreInfo(true)} />
          </MenuArea>
        </PostMenu>
      </PostHeader>
      {/* 더보기 버튼 모달창 생성*/}
      <Modal visible={moreInfo} width="400px" borderRadius="10px">
        <ModalArea style={{ color: "red", fontWeight: "900" }}>신고</ModalArea>
        <ModalArea
          style={{ color: "red", fontWeight: "900" }}
          onClick={deletePost}
        >
          삭제
        </ModalArea>
        <ModalArea style={{ color: "red", fontWeight: "900" }}>
          팔로우
        </ModalArea>
        <ModalArea>게시물로 이동</ModalArea>
        <ModalArea>공유 대상...</ModalArea>
        <ModalArea>링크 복사</ModalArea>
        <ModalArea>퍼가기</ModalArea>
        <ModalArea
          onClick={() => setMoreInfo(false)}
          style={{ border: "none" }}
        >
          취소
        </ModalArea>
      </Modal>

      {/* 중간의 이미지 */}
      <PostCenter>
        <PostMainImg src={imageUrl} />
      </PostCenter>

      {/* 푸터 : 좋아요 기능, 댓글, 디엠 기능, 북마크(보류), 내용 */}
      <PostFooter>
        <FooterMenu>
          {/* 온클릭 이벤트 : 좋아요 누르면 채워진 하트, 좋아요 취소하면 비워진 하트 기능*/}
          {(like && (
            <AiFillHeart
              size="28"
              style={{ margin: "8px" }}
              onClick={delLike}
              color="red"
            />
          )) || (
            <AiOutlineHeart
              size="28"
              style={{ margin: "8px" }}
              onClick={addLike}
            />
          )}

          {/* 댓글 */}
          <BsChat size="28" style={{ margin: "8px" }} />

          {/* 디엠 */}
          <IoMdPaperPlane
            size="28"
            style={{ margin: "8px" }}
            onClick={() => {
              history.push("/direct");
            }}
          />

          {/* 북마크 */}
          <RiBookmarkLine
            size="28"
            style={{
              position: "absolute",
              top: "10px",
              right: "8px",
            }}
          />
        </FooterMenu>

        {/* 좋아요 몇개인지 기능 해야됨 */}
        <LikeArea>
          좋아요 {post.likeCount}개
          {/* {liked && <Like>좋아요 {post.likeCount + delLike}개 </Like>}
                    {liked || <Like>좋아요 {post.likeCount + addLike}개 </Like>} */}
        </LikeArea>

        {/* 콘텐츠 내용 */}
        <PostContent>
          <Username>{post.nickname}</Username>
          <ContentMore>
            <Content>{post.content}</Content>
          </ContentMore>
        </PostContent>

        {/* 댓글 모두 보기 (추후 기능) */}
        <CommentsShow>댓글 {post.commentCount}개 모두 보기</CommentsShow>
        {/* 댓글리스트 */}
        {comment_list.map((item, index) => {
          // console.log(item);
          // console.log(index);
          return (
            <div key={index}>
              <div>{userinfo.nickname}</div>
              <div>{item.comment}</div>
            </div>
          );
        })}
        {/* 시간 */}
        <ModifiedAt>{createdAt}시간 전</ModifiedAt>

        {/* 댓글 작성 기능*/}
        <WriteComment>
          <CgSmile size="28" style={{ margin: "0 16px", cursor: "pointer" }} />
          <Message placeholder="댓글 달기..." onChange={changeComment} />
          {/* 코멘트 작성버튼 */}
          <Commenting onClick={clickComment}>게시</Commenting>
        </WriteComment>
      </PostFooter>
    </Wrap>
  );
}

const Wrap = styled.div`
  border: 1px solid #ddd;
  width: 636px;
  background-color: #fff;
  margin-bottom: 25px;
  @media screen and (max-width: 920px) {
    margin: auto;
    margin-bottom: 24px;
    width: 95%;
    overflow: scroll;
  }
`;

const PostHeader = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
`;

const HeaderLeft = styled.div`
  width: 566px;
  display: flex;
  align-items: center;
`;

const PostTitleImgArea = styled.div`
  width: 45px;
  height: 45px;
  border: 2px solid transparent;
  border-radius: 100%;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 16px 4px 16px 16px;
  cursor: pointer;
`;

const PostTitleImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 100%;
`;

const PostTitle = styled.div`
  font-weight: bold;
  margin: 0px 0px 5px 0px;
  cursor: pointer;
  &:hover {
    text-decoration: none;
  }
`;

const PostMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: auto;
  padding-right: 8px;
  cursor: pointer;
`;

const MenuArea = styled.div`
  padding: 8px;
`;

const PostCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PostMainImg = styled.img`
  width: 100%;
  @media screen and (max-width: 920px) {
    width: 100%;
  }
`;

const PostFooter = styled.div``;

const FooterMenu = styled.div`
  padding: 8px;
  position: relative;
`;

const LikeArea = styled.div`
  font-weight: bold;
  padding: 0 16px 10px;
`;

const Like = styled.span`
  cursor: pointer;
`;

const PostContent = styled.div`
  padding: 0 16px;
  display: flex;
`;

const Username = styled.div`
  font-weight: bold;
  padding-right: 6px;
  &:hover {
    text-decoration: none;
  }
`;

const Content = styled.div`
  padding: 3px 8px 15px;
  line-height: 1.2;
`;

const ContentMore = styled.div``;

const CommentsShow = styled.div`
  color: #999;
  padding: 6px 16px;
  cursor: pointer;
`;

const ModifiedAt = styled.div`
  font-size: 10px;
  color: #999;
  padding: 10px 16px 20px;
  border-bottom: 1px solid #ddd;
`;

const WriteComment = styled.div`
  height: 53px;
  display: flex;
  align-items: center;
`;

const Message = styled.textarea`
  width: 500px;
  // max-height: 60px;
  outline: none;
  border: 0;
  font-size: 14px;
  resize: none;
  flex-direction: column;
  word-wrap: break-word;
  margin: 16px 0px 0px 0px;
`;

const Commenting = styled.div`
  width: 40px;
  color: #4368ff;
  cursor: pointer;
`;

const ModalArea = styled.div`
  height: 48px;
  border-bottom: 1px solid #999;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
`;

import React, { useState } from "react";
import styled from "styled-components";
import { history } from '../redux/configureStore'
import { useDispatch } from "react-redux";

import Modal from "./Modal";
import CommentDetail from "./CommentDetail";

import { BsThreeDots } from "react-icons/bs";
import { AiFillHeart, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { IoMdPaperPlane } from "react-icons/io";
import { BsChat } from "react-icons/bs";
import { RiBookmarkLine } from "react-icons/ri";
import { CgSmile } from "react-icons/cg";

import { addLikeDB } from "../redux/modules/likeReducer";
import { delPostDB } from "../redux/modules/postReducer";
import { addCommentDB } from "../redux/modules/commentReducer";
import { apis } from "../shared/api";

export default function Post(props) {
  //props 값
  const post = props;
  const postId = post.postId
  const imageUrl = post.imageUrl
  const liked = post.liked;
  const createdAt = post.createdAt?.split("T")[0]

  //디스패치
  const dispatch = useDispatch();

  //좋아요
  const [like, setLike] = useState(liked);
  const [addliked, setAddLiked] = useState(0);
  const [delliked, setDelLiked] = useState(0);

  //댓글
  const [hasComment, setHasComment] = useState("")
  const [commentShow, setCommentShow] = useState(false);
  const [commentModal, setCommentModal] = useState(false);
  
  const addComment = (postId) => {
    let comment = document.querySelector("#comment");
    comment.value = "";
    console.log(comment);
    dispatch(addCommentDB(postId, hasComment));
  };
  
  //댓글 밸류값
  const changeComment = (e) => {
    setHasComment(e.target.value);
  }

  // 게시물 내용 더보기
  const [contentMore, setContentMore] = useState(false);
  
  //포스트 헤더의 더보기
  const [moreInfo, setMoreInfo] = useState(false)

  //포스트 삭제
  const deletePost = () => {
    const ok = window.confirm("정말로 삭제하시겠어요?")

    if (ok) {
      dispatch(delPostDB(postId))
      setMoreInfo(false);
      alert("삭제 완료!");
    }
  }

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
  }

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
        <ModalArea>
          게시물로 이동
        </ModalArea>
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
        <PostMainImg src={imageUrl} alt="postImage" />
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
          <IoMdPaperPlane size="28" style={{ margin: "8px" }} onClick={() => { history.push('/direct') }} />

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
          {/* 좋아요 {post.likeCount}개 */}
          {liked && <Like>좋아요 {post.likeCount + delliked}개 </Like>}
          {liked || <Like>좋아요 {post.likeCount + addliked}개 </Like>}
        </LikeArea>

        {/* 콘텐츠 내용 */}
        <PostContent>
          <Username>{post.nickname}</Username>



          {contentMore && (
            <>
          <ContentMore onClick={() => setContentMore(false) }>
              <span
                  style={{
                    color: "#999",
                    fontWeight: "600",
                    cursor: "pointer",
                    paddingLeft: "10px",
                  }}
                >
                  내용 접기
                  </span>
          </ContentMore>
          </>
          )}
          {contentMore || (
            <>
              <ContentTitle>{post.content?.split("\n")[0]}</ContentTitle>
              <ContentMore onClick={() => setContentMore(true)}>
              <span>... </span>
                <span
                  style={{
                    color: "#999",
                    fontWeight: "600",
                    cursor: "pointer",
                  }}
                >
                  더 보기
                </span>
              </ContentMore>
            </>
          )}
        </PostContent>
        {contentMore && (
          <>
            <Content>
              {post.content.split("\n").map((content, index) => {
                return <div key={index}>{content}</div>;
              })}
            </Content>
          </>
        )}

        {/* 댓글 모두 보기 */}
        {post.commentCount > 0 && (
          <CommentsShow
            onClick={() => {
              setCommentShow(true);
              setCommentModal(true);
            }}
          >
            댓글 {post.commentCount}개 모두 보기
          </CommentsShow>
        )}
        {commentModal && (
          <>
            <CommentDetail
              visible={commentModal}
              postId={postId}
              imgUrl={imageUrl}
              postUsername={post.nickname}
              // postUserImg={post.profileUrl}
              postContent={post.content}
              postCreatedAt={createdAt}
              postLikeCount={post.likeCount}
              liked={liked}
              like={like}
              />
              <ClosePosting
              onClick={() => {
                setCommentModal(false);
                setCommentShow(false);
              }}
            >
              <AiOutlineClose size="30" color="#fff" />
            </ClosePosting>
          </>
        )}

        {commentShow && (
          <>
            <CommentsShow onClick={() => setCommentShow(false)}>
              댓글 접기
            </CommentsShow>
            <div style={{ display: "flex" }}>
              <Username style={{ padding: "0 6px 0 16px" }}>username</Username>
              <Comments>댓글입니다!!</Comments>
            </div>
          </>
        )}
    

        {/* 시간 */}
        <ModifiedAt>{createdAt}</ModifiedAt>

        {/* 댓글 작성 기능*/}
        <WriteComment>
          <CgSmile size="28" style={{ margin: "0 16px", cursor: "pointer" }} />
          <Message
            placeholder="댓글 달기..."
            onChange={changeComment}
            id="comment"
          />
          {/* 코멘트 작성버튼 */}
          {hasComment !== "" ? (
            <Commenting onClick={() => addComment(postId)}>게시</Commenting>
          ) : (
            <Commenting style={{ opacity: "0.3", pointerEvents: "none" }}>
              게시
            </Commenting>
          )}
        </WriteComment>
      </PostFooter>
    </Wrap>
  )
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
    margin : 0px 0px 5px 0px;
    cursor: pointer;
    &:hover {
      text-decoration: none;
    }
  `;

const ContentTitle = styled.span``;

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

const ClosePosting = styled.div`
  position: fixed;
  top: 30px;
  right: 30px;
  cursor: pointer;
  z-index: 9999;
`;

const Comments = styled.div`
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
    padding: 3px 8px 15px 15px;
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
    color: #4368FF;
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
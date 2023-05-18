import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { FaComment, FaPaperPlane, FaTrash } from "react-icons/fa";
import axios from "axios";
import Cookies from "js-cookie";
import { useParams } from "react-router-dom";
import ReactDOM from "react-dom";

const DetailsModal = ({ post, onClose }) => {
  const { postId } = useParams();
  const token = Cookies.get("token");

  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([
    { username: "gkdms", text: "Great post!" },
    { username: "aaa", text: "여기가 어디죠?" },
    { username: "wlw_sdf", text: "나는?" },
    { username: "udf232", text: "보고싶어" },
    { username: "cl_2ne1", text: "ㅠㅠ 왜 내 연락 안받아?" },
    { username: "cute_07", text: "카페 갈 사람?" },
    { username: "love_cat", text: "우리집 고양이 보러 와" },
    { username: "tkfkd", text: "배고프다" },
    { username: "hlove_0212", text: "Thanks for sharing" },
    { username: "phe5470", text: "good" },
  ]);

  if (!post) {
    return null;
  }

  const user = {
    id: 8,
    username: "user3",
    avatar: process.env.PUBLIC_URL + "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Flh3.googleusercontent.com%2FLOqlAC95Hb53bSCn4fhBF0DIbHJZoj3hq-IMLTlF3vxLoaUhoK0L2LeLfwZvrtlnbUgNsp29cJvbvpw_1RHbSygvFxILNyn2k_CSapDEL93hlHMhhoOl9UD1Yv6_4lRdXi7AjCbsYlp-C6qA_6GheFkRhs8HdG9b11TJKlO6ONyvvgxxi8-7cuEB3h09rlcfVAZziuJE4kv4ep9hkeQBhW4_-L4ZyZbgkD2k257L3Y6pn4iZSaQB5rpDf6CUznNUsPNeuDy5zKZ17BjqOqkaltP_WTe06yRj4F3MNdVgBxGmS-n1Dm_FHVq9Gm8O37oXok4qAFVLD7JfiGUKbAD6lyqyy0JhTVbfx7z7EjeEF6vLkksRv0wdtHkZnYp8JTmyu4HqDLN2Jipd9fcXII_CXPKKlpklpUTKvWfmQo_F9PAJXzS5Mld9c9T0MM5WvvB7lHexcYf1eyEzUOeHqw-lTWqYbkreIPjAOcm281xxXWY7QzWJvT2pF93SyGvpoX0xTdWkUnj80880VVzvzKM_VUCqxTxpfzhMmFCjUAnf95LJu4XyGrIGjlddXosWp_8f58Lv8E3qQa75TCXR07lKNHuonJKuggw2gk69wLGwtIpcBYDvg0qudAylc8UmL9E_afmEs8T6kgmCpMNJhvjCheelzxg3sHdhUiTT2SykgMsJLmK0622cWYKQltlkGsYYKZgmBT1if-EO_osLKAdyA0-mCfDK9ByIQtfLXufQMURbG_Y2XMXNKft_YneAQAzyJNzjJpxMI2l2xfxX8Q_14dJGfWKHUNk7_HLxnKcPMo-zzQKc1iOaBGnMGoGCrLwy05xw_2qQ7h4_KkDCm2JLa4w9jK5X2yI9K7sYEgFBjfj-XUlNIee1Gx3IY0gqs-SoPDGv-TBFeC7rNuxyjnkWDo5Xp-kBSOeV1yIOPjfwwA6j", // 실제 이미지 경로로 바꿀 예정
  };

  const toggleLike = () => {
    setLiked(!liked);
  };

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const deletePost = async () => {
    try {
      await axios.delete(`/api/posts/${postId}`, {
        headers: { Authorization: token },
      });
      onClose();
    } catch (error) {
      console.error("Failed to delete post:", error);
    }
  };

  return ReactDOM.createPortal(
    <ModalOverlay>
      <ModalWrap onClick={handleClickOutside}>
        <ModalInner onClick={(e) => e.stopPropagation()}>
          <DetailsContainer>
            <ImageSection src={post.postImage} />
            <DetailsContent>
              <UserInformation user={user} token={token} />
              <CommentSection>
                {comments.map((comment, index) => (
                  <Comment key={index}>
                    <CommentContent>
                      <b>{comment.username}</b> {comment.text}
                    </CommentContent>
                  </Comment>
                ))}
              </CommentSection>
              <Likes>
                <LikeButton onClick={toggleLike}>
                  {liked ? (
                    <IoMdHeart size={24} color="red" />
                  ) : (
                    <IoMdHeartEmpty size={24} />
                  )}
                </LikeButton>
                <FaComment size={24} />
                <FaPaperPlane size={24} />
                {user.username === post.author && (
                  <DeleteButton onClick={deletePost}>
                    <FaTrash size={24} />
                  </DeleteButton>
                )}
              </Likes>
              <CommentInput postId={postId} token={token} />
            </DetailsContent>
          </DetailsContainer>
        </ModalInner>
      </ModalWrap>
    </ModalOverlay>,
    document.body
  );
};

const UserInformation = ({ user, token }) => {
  const [userInfo, setUserInfo] = useState({ profileImage: "", nickname: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(token);
        const response = await axios.get(
          `https://99gram.store/api/members/${user.id}`,
          {
            headers: { Authorization: token },
          }
        );
        if (response.data.message === "success") {
          setUserInfo({
            profileImage: response.data.data.image,
            nickname: response.data.data.nickname,
          });
        } else {
          console.error("Failed to fetch user data:", response.data.message);
        }
      } catch (error) {
        console.error("Failed to fetch user data:", error);
      }
    };

    fetchData();
  }, [user.id, token]);

  return (
    <UserInfoContainer>
      <UserAvatar src={userInfo.profileImage || user.avatar} />
      <Username>{userInfo.nickname}</Username>
    </UserInfoContainer>
  );
};

const Comments = ({ comments }) => {
  return (
    <CommentsContainer>
      {comments.map((comment, index) => (
        <Comment key={index}>
          <CommentContent>
            <b>{comment.username}</b> {comment.text}
          </CommentContent>
        </Comment>
      ))}
    </CommentsContainer>
  );
};

const ReactionBar = ({ liked, toggleLike, nickname, memberId }) => {
  return (
    <ReactionContainer>
      <LeftReactions>
        {liked ? (
          <IoMdHeart onClick={toggleLike} size={24} color="red" />
        ) : (
          <IoMdHeartEmpty onClick={toggleLike} size={24} />
        )}
        <FaComment size={24} />
        <FaPaperPlane size={24} />
      </LeftReactions>
      {memberId === memberId && <FaTrash size={24} />}
    </ReactionContainer>
  );
};

const CommentInput = ({ postId, token }) => {
  const [comment, setComment] = useState("");

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `/api/posts/${postId}/comments`,
        { comment },
        {
          headers: { Authorization: token },
        }
      );
      console.log(response);
      setComment("");
    } catch (error) {
      console.error("Failed to post comment:", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="댓글 달기..."
        value={comment}
        onChange={handleChange}
      />
      <SubmitButton type="submit">게시</SubmitButton>
    </Form>
  );
};

export default DetailsModal;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const ModalWrap = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  overflow: auto;
  outline: 0;
`;

const ModalInner = styled.div`
  width: 60%;
  height: 80%;
  box-sizing: border-box;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.18);
  background-color: #fff;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
`;

const DetailsContainer = styled.div`
  display: flex;
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
`;

const ImageSection = styled.img`
  width: 60%;
  height: 100%;
`;

const DetailsContent = styled.div`
  width: 40%;
  flex-grow: 1;
  border: 1px solid #dbdbdb;
  border-left: none;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const CommentSection = styled.div`
  padding: 16px;
  border-top: 1px solid #dbdbdb;
  overflow: auto;
  flex-grow: 1;
`;

const Likes = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 16px;
`;

const LikeButton = styled.div`
  cursor: pointer;
`;

const DeleteButton = styled.div`
  cursor: pointer;
`;

const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 16px;
  height: 50px;
`;

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 12px;
`;

const Username = styled.span`
  font-weight: bold;
`;

const CommentsContainer = styled.div`
  // 여기에 원하는 스타일 추가
`;

const Comment = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CommentContent = styled.span`
  font-weight: bold;
`;

const ReactionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  border-top: 1px solid #dbdbdb;
  justify-content: space-between;
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  border-top: 1px solid #dbdbdb;
`;

const Input = styled.input`
  flex-grow: 1;
  border: none;
  outline: none;
`;

const SubmitButton = styled.button`
  border: none;
  background: none;
  color: #0095f6;
  font-weight: bold;
  cursor: pointer;
`;

const LeftReactions = styled.div`
  display: flex;
  gap: 16px;
`;

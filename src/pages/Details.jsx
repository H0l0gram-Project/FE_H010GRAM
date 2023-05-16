// import React, { useState } from "react";
// import styled from "styled-components";
// import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
// import { FaComment, FaPaperPlane } from "react-icons/fa";

// const Details = () => {
//   const [liked, setLiked] = useState(false);

//   const toggleLike = () => {
//     setLiked(!liked);
//   };

//   const [comments, setComments] = useState([
//     { username: "user1", text: "Great post!" },
//     { username: "user2", text: "Thanks for sharing" },
//     // 추가로 더 많은 댓글을 넣을 수 있습니다.
//   ]);

//   const user = {
//     username: "user3",
//     avatar: process.env.PUBLIC_URL + "/exampleAvatar.jpg", // 실제 이미지 경로로 바꿔주세요.
//   };


//   return (
//     <DetailsContainer>
//       <ImageSection src={process.env.PUBLIC_URL + "/example01.jpg"} />
//       <DetailsContent>
//         <UserInformation user={user} />
//         <CommentSection>
//           <Comments comments={comments} />
//         </CommentSection>
//         <Likes />
//         <ReactionBar liked={liked} toggleLike={toggleLike} />
//         <CommentInput />
//       </DetailsContent>
//     </DetailsContainer>
//   );
// };

// const UserInformation = ({ user }) => {
//   return (
//     <UserInfoContainer>
//       <UserAvatar src={user.avatar} />
//       <Username>{user.username}</Username>
//     </UserInfoContainer>
//   );
// };


// const Comments = ({ comments }) => {
//   return (
//     <CommentsContainer>
//       {comments.map((comment, index) => (
//         <Comment key={index}>
//           <CommentContent>
//             <b>{comment.username}</b> {comment.text}
//           </CommentContent>
//         </Comment>
//       ))}
//     </CommentsContainer>
//   );
// };

// const ReactionBar = ({ liked, toggleLike }) => {
//   return (
//     <ReactionContainer>
//       {liked ? (
//         <IoMdHeart onClick={toggleLike} size={24} color="red" />
//       ) : (
//         <IoMdHeartEmpty onClick={toggleLike} size={24} />
//       )}
//       <FaComment size={24} />
//       <FaPaperPlane size={24} />
//     </ReactionContainer>
//   );
// };

// const CommentInput = () => {
//   const [comment, setComment] = useState("");

//   const handleChange = (e) => {
//     setComment(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // 여기서 댓글을 저장 및 처리하십시오.
//     setComment("");
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Input
//         type="text"
//         placeholder="댓글 달기..."
//         value={comment}
//         onChange={handleChange}
//       />
//       <SubmitButton type="submit">게시</SubmitButton>
//     </Form>
//   );
// };

// const DetailsContainer = styled.div`
//   display: flex;
//   max-width: 960px;
//   margin: 0 auto;
// `;

// const DetailsContent = styled.div`
//   flex-grow: 1;
//   border: 1px solid #dbdbdb;
//   border-left: none;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   flex-direction: column;
// `;

// const ImageSection = styled.img`
//   width: 50%;
//   height: auto;
//   margin-top: 50px;
// `;

// const UserInfoContainer = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 16px;
//   margin-top: 50px;
// `;

// const UserAvatar = styled.img`
//   width: 40px;
//   height: 40px;
//   border-radius: 50%;
//   margin-right: 12px;
// `;

// const Username = styled.span`
//   font-weight: bold;
// `;

// const CommentSection = styled.div`
//   padding: 16px;
//   border-top: 1px solid #dbdbdb;
//   flex-grow: 1;  // 가능한 한 많은 공간을 차지하도록 하기 위해
//   overflow: auto; // 댓글이 제공된 공간을 초과하면 스크롤이 가능하도록 하기 위해
// `;

// const Comment = styled.div`
//   display: flex;
//   justify-content: space-between;
//   margin-bottom: 8px;
// `;

// const CommentContent = styled.span`
//   font-weight: bold;
// `;

// const Likes = styled.span`
//   font-weight: bold;
//   padding: 16px;
// `;

// const ReactionContainer = styled.div`
//   position: sticky;
//   bottom: 0;
//   display: flex;
//   align-items: center;
//   gap: 16px;
//   padding: 16px;
// `;

// const Form = styled.form`
//   position: sticky;
//   bottom: 0;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 8px 16px;
//   border-top: 1px solid #dbdbdb;
// `;

// const Input = styled.input`
//   flex-grow: 1;
//   border: none;
//   outline: none;
// `;

// const SubmitButton = styled.button`
//   border: none;
//   background: none;
//   color: #0095f6;
//   font-weight: bold;
//   cursor: pointer;
// `;

// const CommentsContainer = styled.div`
//   // 원하는 스타일을 여기에 추가하세요
// `;

// export default Details;
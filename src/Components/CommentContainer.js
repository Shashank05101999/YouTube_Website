const commentsData = [
  {
    name: "shashank yadav",
    text: " nice video Keep it up⭐⭐🙌",
    replies: [],
    avatarUrl: "https://avatar.iran.liara.run/public/42",
  },
  {
    name: "shashank yadav",
    text: " nice video",
    avatarUrl: "https://avatar.iran.liara.run/public/46",
    replies: [],
  },
  {
    name: "shashank yadav",
    text: " slaying 💕",
    replies: [],
    avatarUrl: "https://avatar.iran.liara.run/public/44",
  },
  {
    name: "shashank yadav",
    text: " Excellent !!!",
    replies: [],
    avatarUrl: "https://avatar.iran.liara.run/public/61",
  },
  {
    name: "shashank yadav",
    text: " nice video Keep it up⭐🙌",
    replies: [
      {
        name: "shashank yadav",
        text: " nice video Keep it up🙌",
        avatarUrl: "https://avatar.iran.liara.run/public/60",
        replies: [
          {
            name: "shashank yadav",
            text: " nice video Keep it ",
            avatarUrl: "https://avatar.iran.liara.run/public",
            replies: [
              {
                name: "shashank yadav",
                text: " nice video Keep it up⭐⭐🙌",
                avatarUrl: "https://avatar.iran.liara.run/public",
                replies: [
                  {
                    name: "shashank yadav",
                    text: " nice video Keep it up⭐⭐🙌",
                    avatarUrl: "https://avatar.iran.liara.run/public",
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
    avatarUrl: "https://avatar.iran.liara.run/public/",
  },
];

const Comment = ({ data }) => {
  const { name, text, avatarUrl } = data;
  return (
    <div className="flex  bg-slate-300 shadow-lg rounded-2xl my-3 w-[100%] ">
      <img className=" w-10 h-10 rounded-3xl" alt="user" src={avatarUrl}></img>
      <div className="px-3 ">
        <p className="font-bold"> {name}</p>
        <p>Comment:{text}</p>

        {/* <p>replies:{replies}</p>   */}
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className=" pl-5 border  border-l-black ml-5">
        <div className="pl-5 border  border-l-black ml-5"></div>
        <Comment key={index} data={comment} />
        <div className="pl-5 border  border-l-black ml-5">
          <Comment key={index} data={comment} />
        </div>
        <Comment key={index} data={comment} />
      </div>
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="m-5 p-2  w-[80%]">
      <CommentList comments={commentsData} />
    </div>
  );
};
export default CommentContainer;

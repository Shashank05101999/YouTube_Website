import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatslice";
import {
  RandomMessages,
  generateRandomName,
  randomIndex,
} from "../Constants/Constant";

const LiveChat = () => {
  const [LiveMessage, setLiveMessage] = useState();

  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: RandomMessages(),
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div className="w-full h-[510px]  ml-3 border border-gray-700 rounded-xl  bg-slate-100 overflow-x-scroll flex flex-col-reverse">
        {chatMessages.map((c, index) => (
          <ChatMessage name={c.name} message={c.message} />
        ))}
      </div>

      <form
        className="w-full py-1 mx-2 border border-gray-400"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Shashank Yadav",
              message: LiveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="w-[80%] rounded-xl "
          type="text "
          value={LiveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        ></input>
        <button className="border border-gray-800 rounded-3xl mx-2 px-2  bg-slate-800 text-gray-100 hover:bg-slate-600 cursor-pointer">
          Submit
        </button>
      </form>
    </>
  );
};

export default LiveChat;

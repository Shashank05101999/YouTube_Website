import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="border bg-slate-300 hover:bg-slate-500 m-4  px-3 py-2 font-bold font-mono rounded-3xl text ">
        {name}
      </button>
    </div>
  );
};

export default Button;

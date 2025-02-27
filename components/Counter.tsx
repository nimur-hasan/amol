"use client";

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);

    const audio = new Audio("/click.mp3");
    audio.play();
  };

  return (
    <div>
      <div className="mt-[30px] text-center font-medium text-[12px]">
        Today: {new Date().toLocaleDateString("en-GB")}
      </div>
      <button
        onClick={handleClick}
        className="mx-auto cursor-pointer mt-[30px] h-[218px] w-[218px] rounded-full border-[18px] border-black/10 bg-white flex justify-center items-center"
      >
        <div className="text-[42px] font-medium">{count}</div>
      </button>
      <div className="text-center text-[14px] mt-5 font-medium">
        Dorud sharif - [100]
      </div>
    </div>
  );
}

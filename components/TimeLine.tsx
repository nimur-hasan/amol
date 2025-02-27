import { CircleCheck } from "lucide-react";
import React from "react";
import Item from "./Item";

export default function TimeLine() {
  return (
    <div className="border border-black/10 rounded-[8px] px-4 mt-[30px]">
      <div className="md:flex">
        <div className="w-full md:w-[50%]">
          <div className="text-center text-[14px] mx-auto w-[180px] border border-t-0 border-black/10 p-3 rounded-[8px] rounded-t-none">
            Morning - 9AM
          </div>
          <div className="flex flex-col gap-4 px-[30px] my-[30px]">
            {/*  */}
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
        <div className="md:flex items-center py-[30px] hidden">
          <div className="w-[1px] bg-black/10 h-full text-white">.</div>
        </div>
        <div className="w-full md:w-[50%] border-t border-t-black/10 md:border-t-0">
          <div className="text-center text-[14px] mx-auto w-[180px] border border-t-0 border-black/10 p-3 rounded-[8px] rounded-t-none">
            Evening - 5PM
          </div>
          <div className="flex flex-col gap-4 px-[30px] my-[30px]">
            {/*  */}
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
          </div>
        </div>
      </div>
    </div>
  );
}

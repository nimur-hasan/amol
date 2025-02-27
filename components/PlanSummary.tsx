import React from "react";

export default function PlanSummary() {
  return (
    <div className="border border-black/10 rounded-[8px] p-4">
      <div className="grid grid-flow-col auto-cols-max grid-rows-4 gap-2 overflow overflow-x-scroll">
        {Array.from({ length: 365 }).map((_, index) => (
          <div key={index} className="h-[18px] w-[18px] bg-black/10"></div>
        ))}
      </div>
    </div>
  );
}
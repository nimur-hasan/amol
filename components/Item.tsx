import { CircleCheck } from "lucide-react";
import React from "react";

export default function Item() {
  return (
    <div className="flex items-center gap-2">
      <CircleCheck className="h-6" />
      <div className="text-[14px]">Dorud sharif - [100]</div>
    </div>
  );
}

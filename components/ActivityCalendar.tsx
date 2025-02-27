"use client";

import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";
import { Tooltip } from "react-tooltip";
import { subDays, format } from "date-fns";

type Activity = {
  date: string;
  count: number;
};

type Props = {
  data: Activity[];
};

const ActivityCalendar: React.FC<Props> = ({ data }) => {
  const today = new Date();
  const startDate = subDays(today, 365);

  return (
    <div className="border border-black/10 rounded-[8px] p-4">
      <CalendarHeatmap
        startDate={startDate}
        endDate={today}
        values={data}
        classForValue={(value) => {
          if (!value) return "color-empty";
          return `color-scale-${Math.min(value.count, 4)}`;
        }}
        tooltipDataAttrs={(value) => ({
          "data-tooltip-id": "tooltip",
          "data-tooltip-content": value.date
            ? `${value.date}: ${value.count} activities`
            : "No activity",
        })}
      />
      <Tooltip id="tooltip" />
      <style jsx>{`
        .color-empty {
          fill: #ebedf0;
        }
        .color-scale-1 {
          fill: #c6e48b;
        }
        .color-scale-2 {
          fill: #7bc96f;
        }
        .color-scale-3 {
          fill: #239a3b;
        }
        .color-scale-4 {
          fill: #196127;
        }
      `}</style>
    </div>
  );
};

export default ActivityCalendar;

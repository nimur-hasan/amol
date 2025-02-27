import ActivityCalendar from "@/components/ActivityCalendar";
import Counter from "@/components/Counter";
import PlanSummary from "@/components/PlanSummary";
import TimeLine from "@/components/TimeLine";
import Image from "next/image";

export default function Home() {
  const mockData = [
    { date: "2025-02-01", count: 1 },
    { date: "2025-02-10", count: 2 },
    { date: "2025-02-15", count: 3 },
    { date: "2025-02-20", count: 5 },
    { date: "2025-02-25", count: 1 },
  ];
  return (
    <div className="xl:px-[60px] xl:py-[30px] p-4">
      <ActivityCalendar data={mockData} />
      {/*  */}
      <Counter />
      {/*  */}
      <TimeLine />
    </div>
  );
}

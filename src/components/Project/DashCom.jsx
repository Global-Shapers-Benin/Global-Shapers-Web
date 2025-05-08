import { useState, useMemo, useEffect } from "react";
import { Chart } from "react-google-charts";
import { ArrowRight } from "lucide-react";
import { useResizeDetector } from "react-resize-detector";
import Footer from "../Footer/Footer";

const bubbleData = [
  {
    projects: 4,
    impact: 800,
    category: "Entrepreneurship",
    size: 50,
    date: new Date("2024-01-15"),
  },
  {
    projects: 8,
    impact: 1200,
    category: "Entrepreneurship",
    size: 70,
    date: new Date("2024-01-20"),
  },
  {
    projects: 12,
    impact: 1000,
    category: "Education",
    size: 80,
    date: new Date("2024-02-10"),
  },
  {
    projects: 24,
    impact: 500,
    category: "Education",
    size: 20,
    date: new Date("2024-02-25"),
  },
  {
    projects: 28,
    impact: 1800,
    category: "Environment",
    size: 85,
    date: new Date("2024-03-18"),
  },
  {
    projects: 30,
    impact: 2000,
    category: "Entrepreneurship",
    size: 120,
    date: new Date("2024-03-22"),
  },
  {
    projects: 40,
    impact: 2200,
    category: "Environment",
    size: 130,
    date: new Date("2024-04-15"),
  },
  {
    projects: 10,
    impact: 950,
    category: "Entrepreneurship",
    size: 60,
    date: new Date("2024-04-05"),
  },
  {
    projects: 15,
    impact: 1100,
    category: "Education",
    size: 75,
    date: new Date("2024-05-01"),
  },
  {
    projects: 20,
    impact: 1500,
    category: "Environment",
    size: 100,
    date: new Date("2024-05-20"),
  },
  {
    projects: 22,
    impact: 1600,
    category: "Entrepreneurship",
    size: 95,
    date: new Date("2024-06-10"),
  },
  {
    projects: 18,
    impact: 1400,
    category: "Education",
    size: 85,
    date: new Date("2024-06-25"),
  },
  {
    projects: 26,
    impact: 700,
    category: "Environment",
    size: 110,
    date: new Date("2024-07-05"),
  },
  {
    projects: 34,
    impact: 1900,
    category: "Entrepreneurship",
    size: 105,
    date: new Date("2024-07-18"),
  },
  {
    projects: 12,
    impact: 1200,
    category: "Education",
    size: 60,
    date: new Date("2024-08-12"),
  },
  {
    projects: 16,
    impact: 1200,
    category: "Environment",
    size: 90,
    date: new Date("2024-08-28"),
  },
  {
    projects: 14,
    impact: 2110,
    category: "Entrepreneurship",
    size: 48,
    date: new Date("2024-09-03"),
  },
  {
    projects: 10,
    impact: 1050,
    category: "Education",
    size: 70,
    date: new Date("2024-09-21"),
  },
  {
    projects: 30,
    impact: 800,
    category: "Environment",
    size: 85,
    date: new Date("2024-10-10"),
  },
  {
    projects: 35,
    impact: 2100,
    category: "Entrepreneurship",
    size: 130,
    date: new Date("2024-11-15"),
  },
  {
    projects: 40,
    impact: 2300,
    category: "Education",
    size: 10,
    date: new Date("2024-12-05"),
  },
  {
    projects: 25,
    impact: 1750,
    category: "Environment",
    size: 115,
    date: new Date("2024-12-20"),
  },
  {
    projects: 40,
    impact: 2200,
    category: "Environment",
    size: 130,
    date: new Date("2024-04-15"),
  },
];

const headerRow = [
  "",
  "Number of Projects",
  "Impact Metrics",
  "Category",
  "Size",
];

const months = [
  { value: 1, label: "January" },
  { value: 2, label: "February" },
  { value: 3, label: "March" },
  { value: 4, label: "April" },
  { value: 5, label: "May" },
  { value: 6, label: "June" },
  { value: 7, label: "July" },
  { value: 8, label: "August" },
  { value: 9, label: "September" },
  { value: 10, label: "October" },
  { value: 11, label: "November" },
  { value: 12, label: "December" },
];

export default function ImpactDashboard() {
  const [fromMonth, setFromMonth] = useState(1);
  const [toMonth, setToMonth] = useState(12);
  const [chartError, setChartError] = useState(false);
  const [chartLoading, setChartLoading] = useState(true);
  const { ref } = useResizeDetector();

  const filteredBubbles = useMemo(() => 
    bubbleData.filter(item => {
      const month = item.date.getMonth() + 1;
      return month >= fromMonth && month <= toMonth;
    }),
  [fromMonth, toMonth]);

  // Add this useEffect right after your state declarations
useEffect(() => {
  if (fromMonth > toMonth) {
    setToMonth(fromMonth);
  }
}, [fromMonth, toMonth]);

  const chartData = useMemo(() => [
    headerRow,
    ...filteredBubbles.map(item => [
      "",
      item.projects,
      item.impact,
      item.category,
      item.size,
    ]),
  ], [filteredBubbles]);

  const chartOptions = useMemo(() => ({
    title: "Impact Metrics",
    hAxis: {
      title: "Number of Projects",
      minValue: 0,
      textStyle: { color: '#374151' },
      titleTextStyle: { fontSize: 14 }
    },
    vAxis: {
      title: "Impact Metrics",
      minValue: 0,
      textStyle: { color: '#374151' },
      titleTextStyle: { fontSize: 14 }
    },
    bubble: {
      textStyle: { fontSize: 0 },
      opacity: 0.8,
    },
    colors: ["#FFAE4C", "#00529B", "#228B22"],
    chartArea: {
      width: '85%',
      height: '75%',
      left: 100,
      top: 60,
      backgroundColor: '#f9fafb'
    },
    legend: {
      position: 'top',
      alignment: 'center',
      textStyle: { color: '#374151' }
    },
    titleTextStyle: {
      color: '#1f2937',
      fontSize: 18,
      bold: true
    },
    backgroundColor: 'transparent',
    animation: {
      startup: true,
      duration: 1000,
      easing: 'out'
    }
  }), []);

  return (
    <div>
      <div className="bg-[#F0F7EC] py-10">
        <div className="max-w-3xl mx-auto text-center px-6">
          <p className="text-lg font-Montserrat text-start text-gray-900 font-medium">
            "Explore our dynamic impact dashboard that showcases how{" "}
            <span className="text-[#228B22] font-semibold">
              Global Shapers Benin
            </span>{" "}
            is driving meaningful change locally and contributing to the global{" "}
            <span className="text-[#228B22] font-semibold">
              Sustainable Development Goals (SDGs).
            </span>
            "
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[clamp(0.8rem,2vw,1.8rem)] text-black font-Montserrat-reg">Dashboard</h3>
            <div className="flex gap-4 items-center">
              <div className="flex flex-col">
                <select
                  value={fromMonth}
                  onChange={(e) => setFromMonth(Number(e.target.value))}
                  className="border rounded-md py-1 text-gray-700 bg-transparent text-[clamp(0.6rem,2vw,1rem)]"
                >
                  {months.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col">
                <select
                  value={toMonth}
                  onChange={(e) => setToMonth(Number(e.target.value))}
                  className="border rounded-md py-1 text-gray-700 bg-transparent text-[clamp(0.6rem,2vw,1rem)]"
                >
                  {months.map((m) => (
                    <option key={m.value} value={m.value}>
                      {m.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div ref={ref} className="w-full h-[60vh] min-h-[350px] overflow-auto relative">
            {chartError ? (
              <div className="text-red-500 p-4">
                Failed to load chart. Please try refreshing.
              </div>
            ) : (
              <>
                {chartLoading && (
                  <div className="text-center p-4 text-gray-500">
                    Loading impact metrics...
                  </div>
                )}
                <Chart
                  chartType="BubbleChart"
                  width="100%"
                  height="100%"
                  data={chartData}
                  options={chartOptions}
                  rootProps={{ 'data-testid': '1' }}
                  chartEvents={[
                    {
                      eventName: 'ready',
                      callback: () => setChartLoading(false),
                    }
                  ]}
                  onError={() => setChartError(true)}
                />
              </>
            )}
          </div>
        </div>

        <div className="bg-[#228B22] text-white text-center py-6 mt-10">
          <h3 className="text-lg font-semibold">
            Join Us in Making a Difference
          </h3>
          <button className="mt-3 px-5 py-2 bg-white text-green-700 rounded-lg flex items-center mx-auto shadow-md">
            Join Us <ArrowRight className="ml-2" />
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
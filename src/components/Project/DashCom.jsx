import React, { useMemo, useState, useEffect, useRef } from "react";
import { Bubble } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";
import { ArrowRight } from "lucide-react";
import ellipse from "../../assets/Ellipse 1.png";
import ellipses from "../../assets/Ellipse 2.png";

ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

/* --- USER TUNABLES --- */
const FILL_ALPHA = 0.28;
const BORDER_ALPHA = 0.95;
const BORDER_WIDTH = 2;
const HOVER_BORDER_WIDTH = 3.5;

const categoryColors = {
  "Clean water & Sanitation": "#FFAE4C",
  "Decent work & Economic growth": "#6B4EFF",
  "Reduced Inequalities": "#A855F7",
  "Climate Action": "#22C55E",
  "Partnership for the Goals": "#EF4444",
};

function hexToRgba(hex, alpha = 1) {
  const cleaned = hex.replace("#", "");
  const bigint = parseInt(cleaned, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const mapCategoryToSDG = (cat) => {
  if (!cat) return "Partnership for the Goals";
  const s = String(cat).toLowerCase();
  if (s.includes("entrepreneur") || s.includes("business"))
    return "Decent work & Economic growth";
  if (s.includes("educat") || s.includes("school"))
    return "Reduced Inequalities";
  if (s.includes("environ") || s.includes("climat")) return "Climate Action";
  return "Clean water & Sanitation";
};

const bubbleData = [
  /* ...your existing bubbleData... */
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

const months = [
  { value: 1, label: "January 2024" },
  { value: 2, label: "February 2024" },
  { value: 3, label: "March 2024" },
  { value: 4, label: "April 2024" },
  { value: 5, label: "May 2024" },
  { value: 6, label: "June 2024" },
  { value: 7, label: "July 2024" },
  { value: 8, label: "August 2024" },
  { value: 9, label: "September 2024" },
  { value: 10, label: "October 2024" },
  { value: 11, label: "November 2024" },
  { value: 12, label: "December 2024" },
];

export default function ImpactDashboardChartJS() {
  const chartContainerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(1200);
  const [fromMonth, setFromMonth] = useState(1);
  const [toMonth, setToMonth] = useState(12);
  const [loading, setLoading] = useState(true);

  // Responsive container width tracking
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      if (entries[0]) setContainerWidth(entries[0].contentRect.width);
    });
    if (chartContainerRef.current) observer.observe(chartContainerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (fromMonth > toMonth) setToMonth(fromMonth);
  }, [fromMonth, toMonth]);

  const sanitized = useMemo(() => {
    return bubbleData
      .map((r) => {
        const date = r.date instanceof Date ? r.date : new Date(r.date);
        const projects = Number(r.projects ?? NaN);
        const impact = Number(r.impact ?? NaN);
        const size = Number(r.size ?? NaN);
        const category = mapCategoryToSDG(r.category);
        return { date, projects, impact, size, category };
      })
      .filter((r) => {
        const month = r.date.getMonth() + 1;
        return month >= fromMonth && month <= toMonth;
      });
  }, [fromMonth, toMonth]);

  // dynamically scale bubble radius based on container width
  const radiusFromSize = (size) =>
    Math.max(4, Math.sqrt(size) * 2.5 * (containerWidth / 1200));

  const datasets = useMemo(() => {
    const groups = {};
    for (const row of sanitized) {
      groups[row.category] = groups[row.category] || [];
      groups[row.category].push({
        x: row.projects,
        y: row.impact,
        r: radiusFromSize(row.size),
        _size: row.size,
      });
    }

    return Object.entries(groups).map(([category, dataPoints]) => {
      const hex = categoryColors[category] || "#999999";
      return {
        label: category,
        data: dataPoints,
        backgroundColor: hexToRgba(hex, FILL_ALPHA),
        borderColor: hexToRgba(hex, BORDER_ALPHA),
        borderWidth: BORDER_WIDTH,
        hoverBackgroundColor: hexToRgba(hex, Math.min(0.45, FILL_ALPHA + 0.12)),
        hoverBorderColor: hexToRgba("#000000", 0.08),
        hoverBorderWidth: HOVER_BORDER_WIDTH,
      };
    });
  }, [sanitized, containerWidth]);

  const chartDataForJS = useMemo(() => ({ datasets }), [datasets]);

  const options = useMemo(
    () => ({
      maintainAspectRatio: false,
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => {
              const raw = context.raw || {};
              const cat = context.dataset?.label ?? "";
              return `${cat} — Projects: ${raw.x}, Impact: ${raw.y}, Size: ${raw._size}`;
            },
          },
          padding: 8,
          displayColors: false,
        },
      },
      scales: {
        x: {
          title: {
            display: true,
            text: "Number of projects",
            color: "#6b7280",
            font: { size: 13 },
          },
          ticks: { color: "#6b7280" },
          grid: { color: "rgba(230,233,235,0.9)", borderDash: [4, 4] },
          min: 0,
        },
        y: {
          title: {
            display: true,
            text: "Impact Metrics",
            color: "#6b7280",
            font: { size: 13 },
          },
          ticks: { color: "#6b7280" },
          grid: { color: "rgba(230,233,235,0.9)", borderDash: [4, 4] },
          min: 0,
        },
      },
    }),
    []
  );

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 200);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="bg-[#F0F7EC] py-10">
      <div className="max-w-6xl mx-auto text-center md:text-start px-4 md:px-6 lg:px-8">
        <p className="text-[clamp(1rem,2vw,1.5rem)] md:text-[clamp(1.25rem,2.5vw,1.75rem)] text-gray-900 font-medium leading-relaxed">
          “Explore our dynamic impact dashboard that showcases how{" "}
          <span className="text-[#228B22] font-semibold">
            Global Shapers Benin
          </span>{" "}
          is driving meaningful change locally and contributing to the global{" "}
          <span className="text-[#228B22] font-semibold">
            Sustainable Development Goals (SDGs).
          </span>
          ”
        </p>
      </div>

      {/* Chart Card */}
      <div className="max-w-6xl mx-auto mt-8 bg-white rounded-lg p-4 md:p-6 lg:p-8 border border-green-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 mb-4">
          <h3 className="text-[clamp(1rem,2vw,1.6rem)] font-semibold text-black">
            Dashboard
          </h3>
          <div className="flex flex-wrap items-center gap-3 md:gap-4">
            <select
              value={fromMonth}
              onChange={(e) => setFromMonth(Number(e.target.value))}
              className="border border-gray-200 rounded-md py-1 px-3 text-gray-900 bg-white"
            >
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
            <span className="text-gray-700">—</span>
            <select
              value={toMonth}
              onChange={(e) => setToMonth(Number(e.target.value))}
              className="border border-gray-200 rounded-md py-1 px-3 text-gray-900 bg-white"
            >
              {months.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div
          ref={chartContainerRef}
          className="w-full relative"
          style={{ minHeight: "35vh", height: "60vh" }}
        >
          {loading ? (
            <div className="flex items-center justify-center h-full text-gray-500">
              Loading impact metrics...
            </div>
          ) : datasets.length === 0 ? (
            <div className="flex items-center justify-center h-full text-gray-600">
              No data for the selected date range.
            </div>
          ) : (
            <Bubble data={chartDataForJS} options={options} />
          )}
        </div>

        {/* Custom legend */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-5 text-sm text-gray-700">
          {Object.entries(categoryColors).map(([label, color]) => (
            <div key={label} className="flex items-center gap-2 select-none">
              <span
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: color,
                  borderRadius: "999px",
                }}
              />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto mt-10 relative flex flex-col md:flex-row items-center justify-center md:justify-between bg-[#228B22] rounded-xl text-white px-6 py-10 overflow-hidden">
        <img
          src={ellipse}
          alt=""
          className="absolute max-w-[140px] right-0 bottom-0 rounded-r-xl"
        />
        <img
          src={ellipses}
          alt=""
          className="absolute max-w-[80px] left-0 bottom-0 rounded-l-xl"
        />
        <div className="text-center z-10 flex-1">
          <h3 className="text-[clamp(1.25rem,2vw,2rem)] font-semibold mb-3">
            Join Us in Making a Difference
          </h3>
          <button className="inline-flex items-center gap-2 bg-white text-green-700 px-5 py-2 rounded-full shadow">
            Join Us <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
